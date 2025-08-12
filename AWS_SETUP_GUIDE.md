# Complete GitHub to AWS Auto-Deployment Setup Guide

## Overview
This guide will help you set up automatic deployment from GitHub to AWS using AWS Amplify (recommended) or GitHub Actions with S3/CloudFront.

---

## Method 1: AWS Amplify (RECOMMENDED - Easiest)

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. Click the **"+"** icon → **"New repository"**
3. Fill in:
   - Repository name: `chainai-website`
   - Description: "ChainAI Website - Next.js Application"
   - Set to **Public** or **Private** (your choice)
   - DO NOT initialize with README (we already have one)
4. Click **"Create repository"**
5. Copy the repository URL (it will look like: `https://github.com/YOUR_USERNAME/chainai-website.git`)

### Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
cd "/Volumes/PRO-G40/Development/ChainAI Website/NextJs"

# Add GitHub as remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/chainai-website.git

# Push code to GitHub
git push -u origin main
```

### Step 3: Set Up AWS Amplify

1. **Sign in to AWS Console**: https://console.aws.amazon.com/

2. **Navigate to AWS Amplify**:
   - Search for "Amplify" in the search bar
   - Click on "AWS Amplify"

3. **Create New App**:
   - Click **"New app"** → **"Host web app"**
   - Choose **"GitHub"** as your source provider
   - Click **"Continue"**

4. **Authorize GitHub**:
   - Click **"Authorize aws-amplify-console"**
   - Grant permissions when prompted

5. **Select Repository**:
   - Select your `chainai-website` repository
   - Select the `main` branch
   - Click **"Next"**

6. **Configure Build Settings**:
   - Amplify should auto-detect Next.js
   - The build settings should look like:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```
   - Click **"Next"**

7. **Review and Deploy**:
   - Review all settings
   - Click **"Save and deploy"**

8. **Wait for Deployment** (5-10 minutes):
   - Amplify will build and deploy your app
   - You'll get a URL like: `https://main.d1234abcd.amplifyapp.com`

### Step 4: Set Up Custom Domain (Optional)

1. In Amplify Console, go to **"Domain management"**
2. Click **"Add domain"**
3. Enter your domain (e.g., `chainai.com`)
4. Follow DNS configuration instructions

### Step 5: Configure Auto-Deployment

Auto-deployment is already configured! Every time you push to GitHub:

```bash
git add .
git commit -m "Your changes"
git push
```

Amplify will automatically rebuild and deploy your site.

---

## Method 2: GitHub Actions + S3/CloudFront (Advanced)

### Prerequisites
First, modify your Next.js config for static export:

```javascript
// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true
  }
  // ... rest of your config
}
```

### Step 1: Create AWS Resources

#### Create S3 Bucket:

1. **Go to S3 Console**: https://s3.console.aws.amazon.com/
2. Click **"Create bucket"**
3. Configure:
   - Bucket name: `chainai-website` (must be unique)
   - Region: `US East (N. Virginia) us-east-1`
   - Uncheck "Block all public access"
   - Acknowledge the warning
4. Click **"Create bucket"**
5. Go to bucket → **Properties** → **Static website hosting**
6. Enable it with:
   - Index document: `index.html`
   - Error document: `404.html`

#### Create CloudFront Distribution:

1. **Go to CloudFront**: https://console.aws.amazon.com/cloudfront/
2. Click **"Create distribution"**
3. Configure:
   - Origin domain: Select your S3 bucket
   - Origin access: Public
   - Viewer protocol policy: Redirect HTTP to HTTPS
   - Default root object: `index.html`
4. Click **"Create distribution"**
5. Note the **Distribution ID** (you'll need this)

### Step 2: Create IAM User for Deployment

1. **Go to IAM Console**: https://console.aws.amazon.com/iam/
2. Click **"Users"** → **"Add users"**
3. Username: `github-deploy-user`
4. Select **"Access key - Programmatic access"**
5. Click **"Next"**
6. Create new policy with this JSON:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::chainai-website",
        "arn:aws:s3:::chainai-website/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

7. Save the **Access Key ID** and **Secret Access Key**

### Step 3: Configure GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Add these secrets:
   - `AWS_ACCESS_KEY_ID`: Your IAM user's access key
   - `AWS_SECRET_ACCESS_KEY`: Your IAM user's secret key
   - `S3_BUCKET_NAME`: Your S3 bucket name
   - `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID

### Step 4: Update package.json

Add export script:

```json
"scripts": {
  "export": "next build && next export"
}
```

### Step 5: Push and Deploy

```bash
git add .
git commit -m "Configure static export"
git push
```

GitHub Actions will automatically deploy to S3/CloudFront.

---

## Monitoring & Troubleshooting

### Check Deployment Status

#### Amplify:
- Go to Amplify Console
- View build logs and deployment history

#### GitHub Actions:
- Go to GitHub repository → **Actions** tab
- Click on workflow runs to see logs

### Common Issues & Solutions

1. **Build Failures**:
   - Check Node version compatibility
   - Verify all dependencies in package.json
   - Check environment variables

2. **404 Errors**:
   - For S3: Configure error pages in CloudFront
   - For Amplify: Check rewrites and redirects

3. **Environment Variables**:
   - Amplify: App settings → Environment variables
   - GitHub Actions: Add to secrets

---

## Cost Estimates

### AWS Amplify:
- Build minutes: $0.01 per minute
- Hosting: $0.15 per GB served
- **Typical monthly cost**: $10-15

### S3 + CloudFront:
- S3 Storage: $0.023 per GB
- CloudFront: $0.085 per GB transferred
- **Typical monthly cost**: $5-10

---

## Next Steps

1. **Set up monitoring**:
   - CloudWatch for AWS metrics
   - GitHub notifications for build status

2. **Configure domain**:
   - Route 53 for DNS
   - ACM for SSL certificates

3. **Optimize performance**:
   - Enable caching
   - Optimize images
   - Use CDN effectively

---

## Quick Commands Reference

```bash
# Check current remote
git remote -v

# Add remote if not added
git remote add origin https://github.com/YOUR_USERNAME/chainai-website.git

# Push changes
git add .
git commit -m "Update message"
git push

# Force push if needed (careful!)
git push -f origin main

# Check deployment logs
# For Amplify: Check AWS Console
# For GitHub Actions: Check Actions tab
```

## Support Resources

- AWS Amplify Docs: https://docs.amplify.aws/
- GitHub Actions Docs: https://docs.github.com/actions
- Next.js Deployment: https://nextjs.org/docs/deployment

---

Remember to never commit sensitive information like API keys or secrets to your repository!