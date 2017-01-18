//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})



/*,
  "tabBar":{
    "borderStyle":"#999",
    "backgroundColor":"#000",
    "selectedColor":"#fff",
    "color":"#ccc",
    "list":[{
      "pagePath":"pages/index/index",
      "text":"热门电影",
      "iconPath":"static/img/movie.png",
      "selectedIconPath":"static/img/movie_active.png"
    },{
      "pagePath":"pages/future/future",
      "text":"即将上映",
      "iconPath":"static/img/sy.png",
      "selectedIconPath":"static/img/sy_active.png"
    }]
  }
*/