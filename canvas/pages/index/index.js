//index.js
//获取应用实例
var app = getApp()
Page({
  onLaunch:function(){
    
  },
  data: {
    motto: 'Hello World',
    userInfo: {
      name:"caicai"
    },
    hidden:true,
    x:0,
    y:0,
    img:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  phone:function(){
    wx.makePhoneCall({
      phoneNumber: '18518688708',
      success: function(res) {
        wx.showToast({
          title:"success"
        })
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    /*
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    wx.login({  
      success: function(res) {
        alert(1)
        if (res.code) {
          console.log(res)
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
    */
    wx.chooseLocation({
      success:function(res){
        wx.showToast({
          title:"success",
          durations:"1500",
          icon:"success"
        })
      }
    });
    setTimeout(function(){
        that.setData({
          userInfo:JSON.stringify({name:"caicai"})
        })
    },5000)
    wx.request({
      url: 'http://pspm.pingstart.com/captcha', //仅为示例，并非真实的接口地址
      data: {
        x: '' ,
        y: ''
      },
      method:"GET",
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  start:function(e){
    console.log(e)
    this.setData({
      hidden:false,
      x:e.touches[0].x,
      y:e.touches[0].y
    })
  },
  move:function(e){
    console.log(e)
    this.setData({
      hidden:false,
      x:e.touches[0].x,
      y:e.touches[0].y
    })
  },
  end:function(e){
    console.log(e)
    this.setData({
      hidden:true
    })
  },
  upload:function(){
    var _this = this;
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        // success
        console.log(res)
        _this.setData({
          img:res.tempFilePaths[0]
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function(){
    var context = wx.createCanvasContext("first");
    //创建矩形并且填充为红色
    context.setFillStyle("red");
    context.fillRect(0,0,100,100);

    //创建线性渐变的路劲 (x,y,x1,y1)
    var clg=context.createLinearGradient(100,100,200,200);
    clg.addColorStop(0,"red");
    clg.addColorStop(1,"blue");
    context.setFillStyle(clg);
    context.fillRect(100,100,100,100);

    //创建圆形的渐变（x,y,r）
    var ccg = context.createCircularGradient(250,50,60);
    ccg.addColorStop(0,"yellow");
    ccg.addColorStop(1,"green");
    context.setFillStyle(ccg);
    context.arc(250,50,50,0,2*Math.PI);
    context.fill();

    //设置线条的交点样式
    context.beginPath();
    context.setLineWidth("5");
    context.setLineJoin("round");
    context.setGlobalAlpha(1);
    context.moveTo(50,200);
    context.lineTo(80,300);
    context.lineTo(20,300);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(50,230);
    context.lineTo(50,270);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.setFillStyle("black");
    context.arc(50,285,3,0,2*Math.PI);
    context.fill();
    context.closePath();
    context.stroke();

    //矩形清除
    context.beginPath();
    context.setFillStyle("red");
    context.fillRect(100,200,100,100);
    context.setFillStyle("blue");
    context.fillRect(200,200,100,100);
    context.clearRect(120,220,160,60);
    


    context.draw();




  }
})
