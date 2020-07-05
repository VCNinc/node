#!/bin/bash

# to run:
# ssh root@... -i ssh
# echo "ENDPOINT=\"https://example.org\"" >> /etc/environment
# wget -O - https://raw.githubusercontent.com/modular/node/master/setup.sh | bash

su - nodejs
pm2 delete all
git clone https://github.com/modular/node
cd node
npm i
pm2 start index.js -i 0 --name modular
pm2 save
echo "* * * * * cd /home/nodejs/node && git fetch --all && git reset --hard origin/master && npm update && pm2 reload modular" >> cron
crontab cron
