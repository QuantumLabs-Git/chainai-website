# EC2 Instance Deployment Guide for ChainAI Website

## Option A: Quick Setup with AWS Elastic Beanstalk (Easier)

Elastic Beanstalk manages EC2 instances for you with auto-scaling and load balancing.

### Step 1: Prepare Application

1. **Create deployment script in package.json:**
```json
"scripts": {
  "start": "next start -p 8080",
  "build": "next build"
}
```

2. **Create `.ebextensions/nodecommand.config`:**
```yaml
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
```

3. **Create `.npmrc`:**
```
unsafe-perm=true
```

### Step 2: Install EB CLI

```bash
pip install awsebcli
```

### Step 3: Initialize and Deploy

```bash
# Initialize Elastic Beanstalk
eb init -p node.js-18 chainai-website --region us-east-1

# Create environment
eb create chainai-production --instance-type t3.small

# Deploy
eb deploy

# Open in browser
eb open
```

### Step 4: Set Up Auto-Deployment

Create `.github/workflows/deploy-eb.yml`:
```yaml
name: Deploy to Elastic Beanstalk

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Generate deployment package
        run: zip -r deploy.zip . -x '*.git*'
      
      - name: Deploy to EB
        uses: einaregilsson/beanstalk-deploy@v21
        with:
          aws_access_key: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws_secret_key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          application_name: chainai-website
          environment_name: chainai-production
          version_label: ${{ github.sha }}
          region: us-east-1
          deployment_package: deploy.zip
```

---

## Option B: Direct EC2 Instance (Full Control)

### Step 1: Launch EC2 Instance

1. **Go to EC2 Console:** https://console.aws.amazon.com/ec2/

2. **Launch Instance:**
   - Name: `chainai-web-server`
   - AMI: Ubuntu Server 22.04 LTS
   - Instance type: t3.small (2 vCPU, 2GB RAM)
   - Key pair: Create new or use existing
   - Security group rules:
     - SSH (22) - Your IP
     - HTTP (80) - Anywhere
     - HTTPS (443) - Anywhere
     - Custom TCP (3000) - Anywhere (for Next.js)

3. **Elastic IP (recommended):**
   - Allocate Elastic IP
   - Associate with instance

### Step 2: Connect and Setup Server

```bash
# Connect to server
ssh -i your-key.pem ubuntu@your-instance-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Nginx (reverse proxy)
sudo apt install nginx -y

# Install Git
sudo apt install git -y
```

### Step 3: Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/chainai
```

Add:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/chainai /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 4: Deploy Application

```bash
# Clone repository
cd /home/ubuntu
git clone https://github.com/QuantumLabs-Git/chainai-website.git
cd chainai-website

# Install dependencies
npm ci

# Build application
npm run build

# Start with PM2
pm2 start npm --name "chainai" -- start
pm2 save
pm2 startup systemd -u ubuntu --hp /home/ubuntu
```

### Step 5: Auto-Deployment with GitHub Actions

1. **Create deploy user on server:**
```bash
sudo adduser deploy
sudo usermod -aG sudo deploy
```

2. **Set up SSH key for GitHub Actions:**
```bash
ssh-keygen -t rsa -b 4096
# Add public key to server's authorized_keys
# Add private key to GitHub Secrets as SERVER_SSH_KEY
```

3. **Create `.github/workflows/deploy-ec2.yml`:**
```yaml
name: Deploy to EC2

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_IP }}
          username: ubuntu
          key: ${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd /home/ubuntu/chainai-website
            git pull origin main
            npm ci
            npm run build
            pm2 restart chainai
```

### Step 6: SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com
```

---

## Cost Comparison

### EC2 (t3.small):
- Instance: ~$15/month
- Elastic IP: ~$3.60/month
- Storage (20GB): ~$2/month
- Bandwidth: Variable
- **Total: ~$25-35/month**

### Elastic Beanstalk:
- Similar to EC2 + management overhead
- **Total: ~$30-40/month**

### AWS Amplify:
- Build minutes: ~$3/month
- Hosting & bandwidth: ~$10/month
- **Total: ~$10-15/month**

---

## Recommendation

**For your use case, I still recommend AWS Amplify because:**

1. **Cost:** 50-70% cheaper than EC2
2. **Maintenance:** Zero server management
3. **Security:** Automatic updates and patches
4. **Scaling:** Automatic and serverless
5. **CI/CD:** Built-in GitHub integration
6. **SSL:** Free and automatic

**Choose EC2 if you need:**
- Custom server configurations
- Run additional services (databases, etc.)
- Full control over the environment
- Complex backend processing
- WebSocket servers

---

## Quick Decision Guide

```
Is your app mostly static/frontend? → S3 + CloudFront
Need Next.js SSR/API routes? → AWS Amplify
Need full server control? → EC2
Want managed EC2? → Elastic Beanstalk
```