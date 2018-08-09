const app = getApp()
const myRequest = require('../../lib/api/request')
const AV = require('../../utils/av-weapp-min.js');


Page({
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  },


  data: {
    items: []
  },
  select: function(e) {
    console.log(e)
    let _id = e.currentTarget.dataset.data.id

    wx.navigateTo({
      url: '/pages/show/show?id=_id',
    })
  },
 
  onLoad: function (options) {
    console.log(234234, options)
    this.setData({ pictures: options.leanCloudImage })

    myRequest.get({
      path: "posts",
      success: function (res) {
        console.log(555, res)
        console.log(res)
        page.setData({ items: res.data.posts })
      }
    })
  },

  onShow: function () {
    let page = this
    myRequest.get({
      path: 'posts',
      success(res) {
        page.setData({ posts: res.data.posts })
      }
    })
  },
  
// delete this function after posts from DB load properly
  test: function (e) {
      wx.navigateTo({
      url: '/pages/show/show',
    })
  },
  //----



  // should only be available for the main user
  deletePost: function (e) {
    let page = this
    myRequest.delete({
      path: `posts/${e.currentTarget.dataset.id}`,

      success: function (res) {
        console.log('deleted')
      },
      fail: function (res) {
        console.log('Error')
      },
    })
    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})