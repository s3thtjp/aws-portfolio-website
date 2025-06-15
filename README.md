# AWS Portfolio Website

Professional portfolio website demonstrating cloud engineering expertise through a complete AWS architecture implementation.

## 🏗️ Architecture
![AWS Static website architecture](https://github.com/user-attachments/assets/207135cc-a47d-46d2-aa9e-574fb161c3bd)
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

## 🚀 Features (Updated)

- ⚡ **Lightning Fast**: <1 second global load times via CloudFront
- 🔒 **Secure**: HTTPS everywhere with AWS Certificate Manager
- 🌍 **Global**: 218+ CloudFront edge locations worldwide
- 📱 **Responsive**: Mobile-first design principles
- 🔄 **Automated**: Zero-downtime deployments via GitHub Actions
- 💰 **Cost-Effective**: ~$2/month total hosting costs
- ✉️ **Functional Contact Form**: Serverless backend with email delivery
- 🛡️ **Form Validation**: Client and server-side validation
- 📊 **Professional Emails**: Formatted email delivery via AWS SES

## 🏗️ Architecture (Updated)

### Frontend
- Static HTML/CSS/JavaScript hosted on S3
- Global distribution via CloudFront CDN
- Custom domain with Route 53 DNS

### Backend
- **AWS Lambda**: Serverless contact form processing
- **AWS SES**: Professional email delivery
- **API Gateway**: RESTful API for form submissions
- **IAM**: Secure access management

### CI/CD
- GitHub Actions for automated deployments
- Automatic S3 sync and CloudFront invalidation

## 📡 API Endpoints

### Contact Form
- **POST** `/contact` - Submit contact form
- **OPTIONS** `/contact` - CORS preflight

**Request Format:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Tech Corp",
  "role": "CTO",
  "subject": "Job Opportunity",
  "message": "I'd like to discuss a role..."
}
### 8.2 Update Architecture Diagram
**Create an updated architecture diagram** showing:
- Frontend (S3 + CloudFront + Route 53)
- API Gateway
- Lambda Function
- SES Email Service
- CI/CD Pipeline

### 8.3 Document New Skills Demonstrated
**Add to your portfolio**:
- ✅ **Serverless Architecture**: AWS Lambda for backend processing
- ✅ **API Design**: RESTful API with proper error handling
- ✅ **Email Integration**: Professional email delivery with SES
- ✅ **Form Validation**: Client and server-side validation
- ✅ **Error Handling**: Graceful error handling and user feedback
- ✅ **Security**: CORS configuration and input sanitization

---

## Cost Analysis (Updated)

### Monthly Costs with Backend:
- **S3 Storage**: $0.50
- **CloudFront**: $1.00
- **Route 53**: $0.50
- **Lambda**: $0.10 (1M requests free tier)
- **SES**: $0.10 (62,000 emails free tier)
- **API Gateway**: $0.20 (1M requests free tier)
- **Total**: ~$2.40/month

**Professional contact form backend for $0.40/month additional!**

---

## Troubleshooting Common Issues

### ❌ Problem: Form submission returns CORS error
**Solutions**:
1. **Enable CORS** in API Gateway for your resource
2. **Check Lambda response** includes proper CORS headers
3. **Verify API Gateway** has OPTIONS method configured

### ❌ Problem: Email not sending
**Solutions**:
1. **Check SES verification** - email must be verified
2. **Verify Lambda permissions** - needs SES:SendEmail
3. **Check region** - Lambda and SES must be in same region
4. **Review CloudWatch logs** for detailed error messages

### ❌ Problem: Lambda function timeout
**Solutions**:
1. **Increase timeout** in Lambda configuration (default 3 seconds)
2. **Check network connectivity** between Lambda and SES
3. **Optimize function code** for better performance

### ❌ Problem: Form shows "Sending..." but never completes
**Solutions**:
1. **Check API Gateway endpoint** URL in JavaScript
2. **Verify CORS configuration** allows POST method
3. **Check browser network tab** for API errors
4. **Test API directly** with Postman or curl

---

## Success Criteria ✅

### Technical Success:
- [ ] Contact form submits successfully
- [ ] Email received in your inbox with form data
- [ ] Form shows success message to user
- [ ] Error handling works for invalid inputs
- [ ] API Gateway endpoint responds correctly
- [ ] Lambda function executes without errors
- [ ] SES delivers emails successfully

### Professional Success:
- [ ] Functional backend demonstrates full-stack skills
- [ ] Professional email formatting
- [ ] Proper error handling and user feedback
- [ ] Documentation includes new architecture
- [ ] Resume updated with serverless backend skills

---

## Congratulations! 🎉

**You've now built a complete, full-stack cloud application with:**

### Technical Architecture:
- ✅ **Frontend**: Static website with global CDN
- ✅ **Backend**: Serverless API with Lambda + API Gateway
- ✅ **Email**: Professional delivery via SES
- ✅ **Security**: IAM roles, CORS, input validation
- ✅ **CI/CD**: Automated deployments
- ✅ **Monitoring**: CloudWatch logging and metrics

### Professional Skills Demonstrated:
- 🚀 **Full-Stack Cloud Development**
- 🚀 **Serverless Architecture Design**
- 🚀 **API Development & Integration**
- 🚀 **Email System Implementation**
- 🚀 **Security Best Practices**
- 🚀 **Error Handling & User Experience**

**This is now a production-ready, enterprise-grade application that showcases advanced cloud engineering skills!** 

**Employers will see**: Someone who can build complete, functional cloud applications from frontend to backend - exactly what they're looking for in a cloud engineer! 🌟
