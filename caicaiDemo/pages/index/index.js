//index.js
//获取应用实例
var app = getApp();
var scroll_view = ["red","green","blue"];
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    publicKey:app.publicKey,
    toView: 'red',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 5
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 10
    }],
    scrollLeft:0,
    markers: [{
      iconPath: "/static/img/index_active.png",
      id: 0,
      latitude: 37.423962,
      longitude: 110.85293,
      width: 10,
      height: 10
    }],
    controls:[{
      id: 1,
      iconPath: '/static/img/log_active.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 10,
        height: 10
      },
      clickable: true
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickEvent(e){
      console.log(e)
  },
  upper:function(e){
      console.log("upper",e);
  },
  lower:function(e){
      console.log("lower",e);
  },
  tolist:function(){
      wx.redirectTo({
        url: '../list/list',
        success: function(res){
          console.log(res)
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  },
  scroll:function(e){
    console.log("scroll",e);
    var that = this;
      var e = e;
      if(e.detail.scrollLeft==750){
        var interval = setInterval(function(){
          if(e.detail.scrollLeft==0){
              clearInterval(interval);
          }
          that.setData({
            scrollLeft:e.detail.scrollLeft -=25
          })
        },10)
      }
      
  },
  imgError:function(e){
      app.imgError(e)
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
  /*onShow:function () {
    wx.showToast({
      title:"后台进入前台",
      icon:"success",
      duration:2000
    })
  },
  onHide:function () {
    wx.showToast({
      title:"前台进入后台",
      icon:"success",
      duration:2000
    })
  }*/
})
