// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    liked: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    let id = options.id
    // change the url
    wx.request({
      url: 'http://localhost:3000/post/' + id,
    })
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
  
  likePost: function (event) {
    if (!this.data.liked) {
      this.setData({
        liked: true,
      })
      console.log(this.data.liked)
    } else {
      this.setData({
        liked: false
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