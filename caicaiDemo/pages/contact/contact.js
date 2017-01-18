/**
 * Created by liuxin on 2017/1/11 0011.
 */
var app = getApp()
Page({
    data: {
        contact:"联系我"
    },
    onLoad: function () {
        
    },
    onReady:function(){
        var context = wx.createContext();
        context.setFillStyle("red");
        context.fillRect(10,10,50,50);
        context.draw();

        context.setStrokeStyle("#00ff00");
        context.setLineWidth(5);
        context.fill()
        context.rect(0,0,200,200);
        context.stroke();

        context.setStrokeStyle("#ff0000")
        context.setLineWidth(2)
        context.moveTo(160, 100)
        context.arc(100, 100, 60, 0, 2 * Math.PI, true)
        context.moveTo(140, 100)
        context.arc(100, 100, 40, 0, Math.PI, false)
        context.moveTo(85, 80)
        context.arc(80, 80, 5, 0, 2 * Math.PI, true)
        context.moveTo(125, 80)
        context.arc(120, 80, 5, 0, 2 * Math.PI, true)
        context.stroke()

        wx.drawCanvas({
          canvasId: 'first',
          actions: context.getActions()
        })
            
    }
})