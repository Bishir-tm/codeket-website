cd /codeket-website || exit
git pull origin main
npm install
npm run build
sudo rm -rf /var/www/codeket/*
sudo cp -r dist/* /var/www/codeket/
sudo chown -R www-data:www-data /var/www/codeket/
sudo chmod -R 755 /var/www/codeket/
sudo systemctl restart nginx
echo "Deployment successful!"