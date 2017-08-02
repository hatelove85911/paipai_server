#! /bin/bash

trap 'kill %1' SIGINT
cd admin/ && npm run dev & cd meteorServer/ && meteor
