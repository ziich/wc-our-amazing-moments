// pages/show/show.js
const app = getApp()
const myRequest = require('../../lib/api/request')
wx.navigateBack({
  delta: 1
})

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // change the url
    let that = this
    wx.request({
      url: 'http://localhost:3000/api/v1/posts/' + app.globalData.current_post_id,
      success: function(res) {
        console.log(res)
        that.setData({ post: res.data})
      }
    })
  },
  
  bindFormSubmit: function (e) {
    let page = this
    console.log(666,e)
    wx.showToast({ title: 'Sending...', icon: 'loading', duration: 1000 })
    // Post new  to API
    myRequest.post({
      path: `posts/${app.globalData.current_post_id}/comments`,
      data: {
        content: e.detail.value.content,
        user_id: 3
      },
      success(res) {
        console.log(res)
      }
    })
    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }, 1000)
  },
  // deletePost: function (e) {
  //   let page = this
  //   myRequest.delete({
  //     path: `posts/${e.currentTarget.dataset.id}`,


  //     success: function (res) {
  //       console.log('deleted')
  //     },
  //     fail: function (res) {
  //       console.log('Error')
  //     },
  //   })
  //   wx.reLaunch({
  //     url: '/pages/index/index',
  //   })
  // },

  //   let post = {
  //   }
  //   content: "Spicy Food",
  //   updatePost: function (post, _url, id) {
  //   }
  //   let that = this
  //   wx.request({
  //     })
  //   url: _url + id,
  //     data: restaurant,
  //     method: 'PUT',
  //     header: { 'content-type': 'application/json' },
  //     success: function (res) {
  //     },
  //   }
  //   console.log('success' + res)
  //     fail: function (res) {
  //       console.log('Error' + res)
  //     }
  //   })
  // myRequest.post({
  //     path: `posts/${app.globalData.current_post_id}/comments`,
  //     data: {
  //       content: e.detail.value.content,
  //       user_id: 3
  //     },
  //     success(res) {
  //       console.log(res)
  //     }
  //   })
  likePost: function (event) {
    if (!this.data.liked) {
      this.setData({
        liked: true,
      })
      myRequest.post({
        path: `likes/like`,
        data: {
          post_id: app.globalData.current_post_id,
          user_id: 1
        },
        success(res) {
          console.log(res)
        }
      })
    } else {
      this.setData({
        liked: false
      })
      myRequest.post({
        path: `likes/unlike`,
        data: {
          post_id: app.globalData.current_post_id,
          user_id: 1
        },
        success(res) {
          console.log(res)
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})