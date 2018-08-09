// pages/post/post.js
const myRequest = require('../../lib/api/request');
let app = getApp()
const AV = require('../../utils/av-weapp-min.js');


Page({
  takePhoto: function(e) {
    let that = this
    wx.chooseImage({
      count: 1, // Default 9
      sizeType: ['original', 'compressed'], // Can specify whether it is the                                                                  original or compressed image, both have defaults
      sourceType: ['album', 'camera'], // Can specify whether the source is an                                                           album or camera, both have defaults
      success: function (res) {
        // Returns the local file path list for the selected photo, tempFilePath         can            be used as the img tag's src attribute to display the image
        let tempFilePaths = res.tempFilePaths[0]
        console.log(55, tempFilePaths)
        app.globalData.pictures = tempFilePaths
        console.log(66, app.globalData)

        that.uploadPromise(tempFilePaths).then(res => {
          console.log('You can execute anything here')
          return res
        }).then(res => {
          console.log('Or .. execute more')
          return res
        }).then(res => {
          let url = `/pages/index/index?leanCloudImage=${res}`
          wx.navigateTo({ url })
        })
        
      }
    });
  },
  uploadPromise: function (tempFilePath) {
    return new Promise((resolve, reject) => {
      new AV.File('file-name', {
        blob: {
          uri: tempFilePath,
        },
      }).save()
        .then(file => resolve(file.url()))
        .catch(e => reject(e));
    })
  },
  data: {},
  formSubmit: function (e) {
    let page = this
    wx.showToast({ title: 'Sending...', icon: 'loading', duration: 1000 })
    // Post new  to API
    myRequest.post({
      path: 'posts',
      data: {
          content: e.detail.value.content,
          user_id : 3
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
