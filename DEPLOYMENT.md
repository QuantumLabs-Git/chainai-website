# ChainAI Website Deployment Guide

## Prerequisites
- GitHub account
- AWS account
- AWS CLI installed locally (optional)

## Option 1: AWS Amplify (Recommended)

### Steps:
1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/chainai-website.git
   git push -u origin main
   ```

2. **Set up AWS Amplify:**
   - Go to AWS Amplify Console
   - Click "New app" > "Host web app"
   - Choose GitHub and authorize access
   - Select your repository and branch
   - Amplify will auto-detect Next.js settings
   - Review and deploy

3. **Environment Variables (if needed):**
   - In Amplify Console, go to App settings > Environment variables
   - Add any required environment variables

4. **Custom Domain:**
   - In Amplify Console, go to Domain management
   - Add your custom domain

## Option 2: S3 + CloudFront (Static Export)

### Prerequisites:
- Modify `next.config.js` to enable static export:
  ```javascript
  module.exports = {
    output: 'export',
    // ... other config
  }
  ```
- Add export script to package.json:
  ```json
  "scripts": {
    "export": "next export"
  }
  ```

### Steps:
1. **Create S3 Bucket:**
   ```bash
   aws s3 mb s3://chainai-website --region us-east-1
   aws s3 website s3://chainai-website --index-document index.html --error-document 404.html
   ```

2. **Create CloudFront Distribution:**
   - Go to CloudFront Console
   - Create distribution with S3 bucket as origin
   - Note the distribution ID

3. **Set GitHub Secrets:**
   - Go to GitHub repo > Settings > Secrets
   - Add:
     - `AWS_ACCESS_KEY_ID`
     - `AWS_SECRET_ACCESS_KEY`
     - `S3_BUCKET_NAME`
     - `CLOUDFRONT_DISTRIBUTION_ID`

4. **Push to trigger deployment:**
   ```bash
   git push origin main
   ```

## GitHub Actions Workflow

The `.github/workflows/deploy-to-aws.yml` file handles:
- Building the Next.js application
- Running tests (if configured)
- Deploying to AWS

## Monitoring Deployments

### Amplify:
- View deployment logs in Amplify Console
- Set up notifications for build status

### GitHub Actions:
- Check Actions tab in GitHub repository
- View workflow runs and logs

## Rollback

### Amplify:
- Use "Redeploy this version" in Amplify Console

### S3/CloudFront:
- Revert commit and push to trigger new deployment
- Or manually sync previous build from backup

## Security Best Practices

1. **Never commit secrets** - Use GitHub Secrets
2. **Enable MFA** on AWS account
3. **Use IAM roles** with minimal permissions
4. **Enable CloudFront security headers**
5. **Set up AWS Budget alerts**

## Cost Optimization

- **Amplify**: ~$0.01 per build minute + hosting
- **S3 + CloudFront**: Pay per storage and transfer
- Use CloudFront caching to reduce costs
- Set up AWS Budget alerts

## Troubleshooting

### Build Failures:
- Check Node version compatibility
- Verify all dependencies are installed
- Check environment variables

### 404 Errors:
- Ensure Next.js routing is configured correctly
- For S3, check CloudFront error pages configuration

### Performance Issues:
- Enable CloudFront compression
- Optimize images and assets
- Use Next.js Image component