# AWS Portfolio Website

Professional portfolio website demonstrating cloud engineering expertise through a complete AWS architecture implementation.

## 🏗️ Architecture

- **Frontend**: Static HTML/CSS/JavaScript
- **Hosting**: Amazon S3 Static Website Hosting
- **CDN**: Amazon CloudFront with global edge locations
- **DNS**: Amazon Route 53 with custom domain
- **SSL**: AWS Certificate Manager with automatic renewal
- **CI/CD**: GitHub Actions for automated deployment
- **Monitoring**: CloudWatch metrics and Route 53 health checks

## 🚀 Features

- ⚡ **Lightning Fast**: <1 second global load times via CloudFront
- 🔒 **Secure**: HTTPS everywhere with AWS Certificate Manager
- 🌍 **Global**: 218+ CloudFront edge locations worldwide
- 📱 **Responsive**: Mobile-first design principles
- 🔄 **Automated**: Zero-downtime deployments via GitHub Actions
- 💰 **Cost-Effective**: ~$2/month total hosting costs

## 🛠️ Technologies

### AWS Services
- S3 (Static Website Hosting)
- CloudFront (Content Delivery Network)
- Route 53 (DNS Management)
- Certificate Manager (SSL Certificates)
- IAM (Access Management)

### Development
- HTML5/CSS3/JavaScript
- GitHub Actions (CI/CD)
- Git Version Control

## 📊 Performance Metrics

- **Global Load Time**: <1 second
- **Lighthouse Score**: 95+ Performance
- **Uptime**: 99.99% SLA
- **Security**: A+ SSL Rating

## 🚦 Deployment Process

1. **Push to main branch** triggers GitHub Actions
2. **Automated sync** to S3 bucket
3. **CloudFront invalidation** ensures fresh content
4. **Zero downtime** deployment complete

## 📁 Project Structure
website/
├── index.html          # Homepage
├── about.html          # About page
├── projects.html       # Projects showcase
├── contact.html        # Contact information
├── error.html          # Custom 404 page
├── css/style.css       # Stylesheet
├── js/main.js          # JavaScript functionality
└── images/             # Static assets
## 🔧 Local Development

```bash
# Clone repository
git clone https://github.com/yourusername/aws-portfolio-website.git

# Navigate to website directory
cd aws-portfolio-website/website

# Open in browser
open index.html