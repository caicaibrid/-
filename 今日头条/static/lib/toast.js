var toast = function(title,icon,time,cb){
    wx.showToast({
        title:title,//	String	是	提示的内容
        icon:icon,//	String	否	图标，只支持"success"、"loading"
        duration:time,//	Number	否	提示的延迟时间，单位毫秒，默认：1500, 最大为10000
        success:function(res){
            typeof cb =="function"&&cb(res)
        },//	Function	否	接口调用成功的回调函数
        fail:function(){

        },//	Function	否	接口调用失败的回调函数
        complete:function(){

        }
    })
}
module.exports=toast;