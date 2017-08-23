import {Picker} from 'meteor/meteorhacks:picker'
import { HTTP } from 'meteor/http'

Picker.route('/wxlogin', function (params, req, res, next) {

  var code = params.query.code
  var appid = 'wxaf1e1256e447a9be'
  var appsecret = 'fe1527853ef0dd7e2284e5689609cad5'

  HTTP.get('https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + appsecret + '&grant_type=authorization_code&js_code=' + code, {}, function (err, result) {
    debugger;
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      openid: 'haha'
    }))
  })

});
