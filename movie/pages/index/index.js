var ajax = require("../../static/lib/ajax");
var toast = require("../../static/lib/toast");
var dialog = require("../../static/lib/dialog");
//dialog function(title,content,showCancel,cancelText,cancelColor,confirmText,confirmColor)
//toast function(title,icon,time,cb)

Page({
  data: {
    tagType:"movie",
    tagCurrent:0,
    tagData:[],
    subjectData:{
      type:"movie",
      tag:"热门",
      sort:"recommend",
      page_limit:20,
      page_start:0
    },
    movieList:[],
    isLower:false,
    sortList:[{
      name:"recommend",
      value:"按热度排序",
      checked:true,
      color:"red"
    },{
      name:"time",
      value:"按时间排序",
      checked:false,
      color:"green"
    },{
      name:"rank",
      value:"按评价排序",
      checked:false,
      color:"blue"
    }]
  },
  bindTagTap:function(e){
      var current = e.target.dataset.current;
      var tag = e.target.id;
      this.data.subjectData.tag = tag;
      this.setData({
        movieList:[],
        tagCurrent:current
      });
      this.movieList();
  },
  radioChange:function(e){
    var sort = e.detail.value;
    this.data.subjectData.sort = sort;
    this.setData({
      movieList:[]
    });
    this.movieList();
  },
  movieList:function(){
    var that=this;
    ajax("/j/search_subjects","GET",1,that.data.subjectData,function(res){
        if(res.statusCode==200){
          var newArr=that.data.movieList.concat(res.data.subjects);
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
    this.data.subjectData.page_start+=20;
    this.movieList();
  },
  onLoad: function () {
    var that=this;
    ajax("/j/search_tags","GET",1,{type:that.data.tagType},function(res){
        if(res.statusCode==200){
          that.setData({
            tagData:res.data.tags
          });
          that.movieList();
        }else{
          dialog("提示",res.errMsg,false,"","","确定","blue")
        }
    })
  }
})
