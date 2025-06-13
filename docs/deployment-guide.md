# Deployment Guide

## Automated Deployment Process

### How It Works
1. Developer pushes code to `main` branch
2. GitHub Actions automatically triggers
3. Code is synced to S3 bucket
4. CloudFront cache is invalidated
5. Website updates are live within 2-3 minutes

### Manual Deployment (if needed)
```bash
# Sync files to S3
aws s3 sync website/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR-DIST-ID --paths "/*"