// pages/post/post.js
const myRequest = require('../../lib/api/request');
let app = getApp()
const AV = require('../../utils/av-weapp-min.js');


Page({
  data: {
    items: []
  },
  takePhoto: function(e) {
    let that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
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
          console.log(444,res)
          let url = `/pages/index/index?leanCloudImage=${res}`
          app.globalData.pictures = res
          console.log(111,app.globalData.pictures)
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
          user_id: 3,
          image_url: app.globalData.pictures
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
