#! /bin/bash

trap 'kill %1; kill %2; kill %3' SIGINT

echo "*** start admin web application on port 8080"
cd admin/ &&
npm run dev &

echo "*** start meteor server on port 3000"
pwd &&
cd meteorServer/ &&
meteor &

echo "*** start wepy compile and watch"
pwd &&
cd miniapp/ &&
wepy &

echo "*** start miniapp by wept on port 8081"
pwd &&
sleep 5 &&
cd miniapp/dist/ &&
wept -p 8081
