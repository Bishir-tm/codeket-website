#!/bin/bash

# Exit if any command fails
set -e

# Navigate to your project
cd /var/www/codeket-website || exit

echo "Pulling latest code from main branch..."
git pull origin main

echo "Installing backend dependencies..."
npm install

echo "Restarting backend using PM2..."
pm2 restart codeket-backend

echo "Building frontend..."
cd frontend || exit
npm install
npm run build

echo "Setting proper permissions..."
sudo chown -R www-data:www-data /var/www/codeket-website
sudo chmod -R 755 /var/www/codeket-website

echo "Restarting Nginx..."
sudo systemctl restart nginx

echo "✅ Deployment successful!"
