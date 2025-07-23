# WordPress Deployment Guide

This guide will help you deploy your Lighthouse Atlanta Church website to WordPress hosting.

## 🚀 Quick Deployment

### Option 1: Using the Deployment Script

1. **Make the script executable:**
   ```bash
   chmod +x deploy-wordpress.sh
   ```

2. **Run the deployment script:**
   ```bash
   ./deploy-wordpress.sh
   ```

3. **Upload files to WordPress hosting:**
   - Upload all contents of the `out/` directory to your WordPress hosting
   - Ensure files are uploaded to the root directory of your domain

### Option 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm install
   npm run build
   ```

2. **Locate the build files:**
   - All static files will be in the `out/` directory

3. **Upload to WordPress hosting:**
   - Use FTP, cPanel File Manager, or your hosting provider's upload tool
   - Upload all files from `out/` to your domain's root directory

## 🌐 WordPress Hosting Setup

### Before Uploading

1. **Backup your current WordPress site**
   - Download all current files
   - Export your WordPress database
   - Keep a backup of your current site

2. **Prepare your hosting environment**
   - Ensure your hosting supports static HTML files
   - Check that your domain is properly configured
   - Verify SSL certificate is active

### Upload Process

1. **Access your hosting control panel**
   - Log into cPanel, Plesk, or your hosting provider's dashboard

2. **Navigate to file manager**
   - Go to File Manager or FTP access
   - Navigate to your domain's root directory (usually `public_html`)

3. **Upload the files**
   - Upload all contents of the `out/` directory
   - Ensure `index.html` is in the root directory
   - Maintain the folder structure

### Post-Upload Configuration

1. **Test your site**
   - Visit your domain to ensure the site loads
   - Check all pages and functionality
   - Test on mobile devices

2. **Configure redirects (if needed)**
   - Set up 301 redirects from old WordPress URLs
   - Configure custom error pages

3. **Update DNS settings**
   - Ensure your domain points to the correct hosting
   - Update nameservers if necessary

## 🔧 Troubleshooting

### Common Issues

**Site not loading:**
- Check file permissions (should be 644 for files, 755 for directories)
- Verify `index.html` is in the root directory
- Check hosting error logs

**Images not displaying:**
- Ensure all image files were uploaded
- Check file paths in the HTML
- Verify image file permissions

**Styling issues:**
- Check that CSS files were uploaded
- Verify file paths in HTML
- Clear browser cache

**404 errors:**
- Ensure all pages were uploaded
- Check file naming (case-sensitive)
- Verify hosting supports clean URLs

### Performance Optimization

1. **Enable compression**
   - Enable GZIP compression in hosting
   - Compress images before upload

2. **Set up caching**
   - Configure browser caching
   - Enable CDN if available

3. **Monitor performance**
   - Use Google PageSpeed Insights
   - Monitor Core Web Vitals

## 📞 Support

If you encounter issues during deployment:

1. **Check the error logs** in your hosting control panel
2. **Contact your hosting provider** for server-related issues
3. **Email support**: info@lighthouseatlanta.com
4. **Create an issue** in the GitHub repository

## 🔄 Updating the Site

To update your deployed site:

1. **Make changes** to your local development environment
2. **Test locally** using `npm run dev`
3. **Build the project** using `npm run build`
4. **Upload the new files** from the `out/` directory
5. **Test the live site** to ensure everything works

## 🎯 Best Practices

- **Always backup** before making changes
- **Test locally** before deploying
- **Use version control** (Git) for tracking changes
- **Monitor site performance** regularly
- **Keep dependencies updated**
- **Document any custom configurations**

---

**Need help?** Contact info@lighthouseatlanta.com or create an issue in the GitHub repository. 