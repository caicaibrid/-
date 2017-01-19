var ajax = require("../../static/lib/ajax");
var toast = require("../../static/lib/toast");
var dialog = require("../../static/lib/dialog");
//dialog function(title,content,showCancel,cancelText,cancelColor,confirmText,confirmColor)
//toast function(title,icon,time,cb)
var app = getApp();

Page({
  data: {
    tagType:"video",
    tagCurrent:0,
    tagData:[{
      "key":"video",
      "value":"全部"
    },{
      "key":"subv_funny",
      "value":"逗比剧"
    },{
      "key":"subv_voice",
      "value":"音乐台"
    },{
      "key":"subv_society",
      "value":"看天下"
    },{
      "key":"subv_comedy",
      "value":"相声小品"
    },{
      "key":"subv_haoshengyin",
      "value":"中国新唱将"
    },{
      "key":"subv_entertainment",
      "value":"最娱乐"
    }],
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
  bindTagTap:function(e){
      var current = e.target.dataset.current;
      var tag = e.target.id;
      this.data.subjectData.category = tag;
      this.setData({
        movieList:[],
        tagCurrent:current
      });
      this.movieList();
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
  onLoad: function () {
    this.movieList();
  }
})
