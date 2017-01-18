/**
 * Created by liuxin on 2017/1/11 0011.
 */
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1 ; i <= 12; i++) {
  months.push(i)
}

for (let i = 1 ; i <= 31; i++) {
  days.push(i)
}

Page({
    data: {
    iconSize: [20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple','#85da00','#85ff00','#85ee00','#aada00','#dddc00','#866a00','#85da00','#aaaa00'
    ],
    iconType: [
      'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn','success_circle','success_no_circle', 'waiting_circle', 'circle', 'download','info_circle', 'cancel', 'search', 'clear'
    ],
    array: ['美国', '中国', '巴西', '日本'],
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    index: 0,
    date: '2016-09-01',
    time: '12:01',
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    year: date.getFullYear(),
    value: [9999, 1, 1],
    
  },
  selectorChange:function(e){
      this.setData({
          index:e.detail.value
      })
  },
  timeChange:function(e){
      console.log(e)
      this.setData({
          time:e.detail.value
      })
  },
  dateChange:function(e){
      console.log(e)
      this.setData({
          date:e.detail.value
      })
  },
  pickerViewChange:function(e){
      let val = e.detail.value;
      this.setData({
         year: this.data.years[val[0]],
         month: this.data.months[val[1]],
         day: this.data.days[val[2]]
      })
  },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        console.log('onLoad')
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