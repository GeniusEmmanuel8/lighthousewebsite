#!/bin/bash

# Lighthouse Atlanta Church Website - WordPress Deployment Script
# This script builds the Next.js site and prepares it for WordPress hosting

echo "🚀 Starting WordPress deployment for Lighthouse Atlanta Church..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Build failed. Please check for errors above."
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""
echo "📁 Your static files are ready in the 'out' directory."
echo ""
echo "🌐 To deploy to WordPress:"
echo "1. Upload all contents of the 'out' directory to your WordPress hosting"
echo "2. Make sure your domain points to the uploaded files"
echo "3. Update DNS settings if necessary"
echo ""
echo "📋 Files to upload:"
ls -la out/

echo ""
echo "🎉 Deployment preparation complete!"
echo "📧 For support: info@lighthouseatlanta.com" 