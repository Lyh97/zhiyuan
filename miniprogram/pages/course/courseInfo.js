// pages/course/courseInfo.js
var sliderWidth = 50;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course: {
      image:'',
      title: ''
    },
    courses: {
      couseInfo1: {
        video_img: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        title: '微信公众平台基础讲解',
        info: '已开课20节 | 预开课50节',
        infoImg:['http://img.mp.itc.cn/upload/20170110/abb7b847259a44e8838c0c402e1b0773_th.jpg',
        'http://www.xiazaiba.com/uploadfiles/content/2016/1229/water_1483001137135290802688.png',
        'http://d.hiphotos.baidu.com/exp/w=500/sign=b0c57143dd0735fa91f04eb9ae500f9f/a8773912b31bb051e3c460703f7adab44bede082.jpg'
        ]
      },
      courseInfo2: {
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539231156758&di=e0465db9fd904379c5e537ae56819adc&imgtype=0&src=http%3A%2F%2Fs4.51cto.com%2Foss%2F201802%2F10%2F2f2185757fe8b381dfa8d0f0d7d42adf.jpg-wh_651x-s_111359355.jpg',
        title: 'Python高级开发/ Flask 爬虫/ Openstack Django'
      }
    },
    tabs: ["评论", "详情"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      // course :this.data.courses[options.name]
      course: this.data.courses['couseInfo1']
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})