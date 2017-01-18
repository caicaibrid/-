var toast =require("./toast");

var baseUrl ="https://movie.douban.com";
var ajax = function(url,method,header,data,cb){
    toast("加载中...","loading",10000);
    wx.request({
      url:baseUrl+url,
      data:data,
      method:method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
          'content-type':header==1?"application/x-www-form-urlencoded":"application/json"
      }, // 设置请求的 header
      success: function(res){
        wx.hideToast();
        typeof cb=="function" && cb(res)
      },
      fail: function() {
        
      },
      complete: function() {
        
      }
    })
}
module.exports=ajax;