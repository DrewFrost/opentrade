#!/bin/bash
cd ~/opentrade/databaseServer/
pm2 start main.js -n DB
cd ~/opentrade/accountsserver/
pm2 start main.js -n Accounts-Server
cd ~/opentrade/server/
pm2 start main.js  -n Server

