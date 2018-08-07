// pages/post/post.js
wx.chooseImage({
  count: 1, // Default 9
  sizeType: ['original', 'compressed'], // Can specify whether it is the original or compressed image, both have defaults
  sourceType: ['album', 'camera'], // Can specify whether the source is an album or camera, both have defaults
  success: function (res) {
    // Returns the local file path list for the selected photo, tempFilePath can be used as the img tag's src attribute to display the image
    var tempFilePaths = res.tempFilePaths
  }
})