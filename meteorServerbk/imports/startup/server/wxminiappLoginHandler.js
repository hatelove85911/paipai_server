import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { HTTP } from 'meteor/http'

Accounts.registerLoginHandler(function(loginRequest) {
  //there are multiple login handlers in meteor. 
  //a login request go through all these handlers to find it's login hander
  //so in our login handler, we only consider login requests which has admin field
  if(!loginRequest.wxminiapp) {
    return undefined;
  }

  //our authentication logic :)
  if(!loginRequest.code) {
    return null;
  }
  
  var code = loginRequest.code
  var appid = 'wxaf1e1256e447a9be'
  var appsecret = 'fe1527853ef0dd7e2284e5689609cad5'

  var syncHTTP = Meteor.wrapAsync(HTTP.get)
  var result = syncHTTP.get('https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + appsecret + '&grant_type=authorization_code&js_code=' + code, {})
  // 
  //we create a admin user if not exists, and get the userId
  var userId = null;
  var user = Meteor.users.findOne({username: 'admin'});
  if(!user) {
    userId = 'junshen laoluan'
    // userId = Meteor.users.insert({username: 'admin'});
  } else {
    userId = user._id;
  }

  //creating the token and adding to the user
  var stampedToken = Accounts._generateStampedLoginToken();
  //hashing is something added with Meteor 0.7.x, 
  //you don't need to do hashing in previous versions
  var hashStampedToken = Accounts._hashStampedToken(stampedToken);
  
  Meteor.users.update(userId, 
    {$push: {'services.resume.loginTokens': hashStampedToken}}
  );

  //sending token along with the userId
  return {
    id: userId,
    token: stampedToken.token
  }
});
