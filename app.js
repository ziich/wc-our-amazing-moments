const AV = require('./utils/av-weapp-min.js')
const config = require('./lib/key.js')
// Initialization of the app
AV.init({
    appId: config.appId,
    appKey: config.appSecret,
  });

App({
  onLaunch: function(){
    let app = this
    const host  = 'http://localhost:3000/api/v1/users/'
    console.log('processing to login')

          

    wx.login({
      success:res=>{

        wx.request({
          url: host + 'login',
          method: 'post',
          data: {
            code: res.code,
          },
          success: res => {
            // console.log(111, res)
            this.globalData.userId = res.data.userId
          }
        })
      
        console.log(11111,res)
        let that = this
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            console.log("Success get UserInfo")
            console.log(13579, app.globalData.userInfo)

            setTimeout(function () {
              wx.request({
                url: host + that.globalData.userId,
                method: 'put',
                data: {
                  name: res.userInfo.nickName,
                  avatar: res.userInfo.avatarUrl
                },
                success: res => {
                  console.log(111, res)
                }
              })
            }, 100)
          }
        })

        
        
        
      },
    })
  },
  
globalData: {

  }
})
