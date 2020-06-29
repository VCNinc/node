# ssh root@... -i ssh

#!/bin/bash

su - nodejs
pm2 delete hello
git clone https://github.com/modular/node
cd node
echo "{\"port\":3000,\"endpoint\":\"https://dev.modularseed.xyz\",\"modspace\":\"0%1\"}" > config.json
npm i
pm2 start index.js
pm2 save
