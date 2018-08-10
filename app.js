const AV = require('./utils/av-weapp-min.js')
const config = require('./lib/key.js')
// Initialization of the app
AV.init({
    appId: config.appId,
    appKey: config.appSecret,
  });

App({
//   onLaunch: function(){
//     const host  = 'http://localhost:3000/'
//     console.log('processing to login')
      
//     wx.login({
//       success:res=>{
//         console.log(666, res)
        
//     wx.request({
//       url: host + 'login',
//       method: 'post',
//       data: {
//         code: res.code
//       },
//       success:res =>{
//         console.log(res)
//         this.globalData.userId = res.data.userId
//         console.log(555, userId)
//       }
//     })
//       }
//   })
//   },
  
// globalData: {
//   items: []
//   }
})