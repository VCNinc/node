#!/bin/bash

# to run:
# ssh root@... -i ssh
# echo "ENDPOINT=\"https://alpha0.modularseed.xyz\"" >> /etc/environment
# echo "COVERAGE=\"0%1\"" >> /etc/environment
# wget -O - https://raw.githubusercontent.com/modular/node/master/setup.sh | bash
# cd /home/nodejs/node && git fetch --all && git reset --hard origin/master && npm update && pm2 startOrRestart ecosystem.config.js && pm2 save

su - nodejs
pm2 delete all
git clone https://github.com/modular/node
cd node
npm i
pm2 startOrRestart ecosystem.config.js
pm2 save
echo "* * * * * cd /home/nodejs/node && git fetch --all && git reset --hard origin/master && npm update && pm2 startOrRestart ecosystem.config.js && pm2 save" >> cron
crontab cron
