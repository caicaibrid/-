var dialog = function(title,content,showCancel,cancelText,cancelColor,confirmText,confirmColor){
    wx.showModal({
        title:title,// '提示',
        content:content,//'这是一个模态弹窗',
        showCancel:showCancel,//是否显示取消按钮按钮
        cancelText:cancelText,//取消按钮的文字文字
        cancelColor:cancelColor,//取消按钮的颜色颜色
        confirmText:confirmText,//确认按钮的颜色颜色
        confirmColor:confirmColor,///确认按钮的颜色
        success: function(res) {
            
        }
     })
}

module.exports=dialog;