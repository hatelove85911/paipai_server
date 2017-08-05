#! /bin/bash

npmScripts/killdevprocess.sh
trap 'kill %1; kill %2; kill %3' SIGINT

echo "*** start admin web application on port 8080"
cd admin/ &&
npm run dev &

echo "*** start meteor server on port 3000"
cd meteorServer/ &&
meteor &

echo "*** start wepy compile and watch"
cd miniapp/ &&
wepy build --watch &

echo "*** start miniapp by wept on port 8081"
sleep 15 ;
cd miniapp/dist/ &&
wept -p 8081
