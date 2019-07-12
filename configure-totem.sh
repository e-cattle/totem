#!/bin/bash

echo "Installing Browser"
snap install mir-kiosk
sleep 5
snap install --beta chromium-mir-kiosk
sleep 5

echo "Configuring system URL"
snap set chromium-mir-kiosk url="http://localhost:3002"

echo "Hidden Cursor"
sed -i "/cursor=auto/c cursor=null" /var/snap/mir-kiosk/current/miral-kiosk.config
