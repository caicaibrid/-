var ajax = require("../../static/lib/ajax");
var toast = require("../../static/lib/toast");
var dialog = require("../../static/lib/dialog");
//dialog function(title,content,showCancel,cancelText,cancelColor,confirmText,confirmColor)
//toast function(title,icon,time,cb)
var app = getApp();

Page({
  data: {
    videoUrl:"",
    subjectData:{
      category:"video",
      utm_source:"toutiao",
      widen:1,
      max_behot_time:0,
      max_behot_time_tmp:0,
      as:"A1A528A7FFB1991",
      cp:"587FA1C969114E1"
    },
    movieList:[],
    isLower:false
  },
  movieList:function(){
    var that=this;
    ajax("/api/pc/feed/","GET",1,that.data.subjectData,function(res){
      console.log(res);
        if(res.statusCode==200){
          that.data.subjectData.max_behot_time = res.data.next.max_behot_time;
          that.data.subjectData.max_behot_time_tmp = res.data.next.max_behot_time;
          var result=res.data.data;
          for(let obj of result){
              obj.behot_time =  app.fromNow(obj.behot_time);
          }
          var newArr=that.data.movieList.concat(result);
          that.setData({
            movieList:newArr,
            isLower:false
          })
        }else{
          dialog("提示",res.errMsg,false,"","","确定","blue")
        }
    })
  },
  scrolltolower:function(){
    this.setData({
      isLower:true
    });
    this.movieList();
  },
  onLoad: function (options) {
    this.setData({
        videoUrl:options.video
    })
    this.movieList();
  }
})