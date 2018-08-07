
// pages/post/post.js
const myRequest = require('../../lib/api/request');

Page({
  default: function(e) {
    wx.chooseImage({
      count: 1, // Default 9
      sizeType: ['original', 'compressed'], // Can specify whether it is the                original or compressed image, both have defaults
      sourceType: ['album', 'camera'], // Can specify whether the source is an                                          album or camera, both have defaults
      success: function (res) {
        // Returns the local file path list for the selected photo, tempFilePath         can be used as the img tag's src attribute to display the image
        var tempFilePaths = res.tempFilePaths
      },
    })
  },
  data: {},
  submit: function (e) {
    let page = this
    wx.showToast({ title: 'Sending...', icon: 'loading', duration: 1000 })
    // Post new  to API
    myRequest.post({
      path: 'index',
      data: {
        post: {
          content: e.detail.value.text,
        },
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
  }
})
