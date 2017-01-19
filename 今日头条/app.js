//app.js
var moment = require("./static/lib/moment.min");

App({
  onLaunch: function () {
    
  },
  fromNow:function(num){
    return moment(num*1000).fromNow();
  },
  globalData:{
    
  }
})
