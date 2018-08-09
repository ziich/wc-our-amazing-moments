const app = getApp()
const myRequest = require('../../lib/api/request');


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
  onLoad: function () {
    let page = this
    this.setData({ image_url: options.leanCloudImage })

  
    myRequest.get({
      path: "posts",
      success: function (res) {
        console.log(555, res)
        console.log(res)
        page.setData({ items: res.data.posts })
      }
    })
  },
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