#!/bin/bash
pm2 delete all
cd ~/Works/js/opentrade/databaseServer/
pm2 start main.js -n DB
cd ~/Works/js/opentrade/accountsserver/
pm2 start main.js -n Accounts-Server
cd ~/Works/js/opentrade/server/
pm2 start main.js -n Server

