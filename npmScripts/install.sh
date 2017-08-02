#! /bin/bash

cd admin/ && npm install && ./node_modules/.bin/meteor-client bundle --source=../meteorServer &
cd meteorServer && npm install
