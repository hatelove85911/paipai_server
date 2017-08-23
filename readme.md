# wechat miniapp + meteor
---
# Prerequisites
### Installation
 - docker
 - docker-compose
 - meteor

tips: 
 - if it's slow to pull images from docker hub in China, use daocloud mirror:
```
curl -sSL https://get.daocloud.io/daotools/set_mirror.sh | sh -s http://f26ad130.m.daocloud.io
```
 - post-docker installation, add your user to docker group
 ```
  sudo usermod -aG docker $USER
 ```

### File creation
 1. sudo mkdir -p /data/db

---
# Usage
### install dependencies
1. cd into project directory
2. npm run install

### start local development
1. cd into project directory
2. npm run dev

---
# Deploy
### CA certificates
- put your certificate files under /etc/nginx/ssl
- put your nginx configuration file under /etc/nginx/nginx.conf

