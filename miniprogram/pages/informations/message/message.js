// pages/informations/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bool: false,
    myinfo1: '',
    myinfo2: '',
    information: { imgUrl: "",message: "" },
    people: {
      dc: {  imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2030723859,2010944235&fm=26&gp=0.jpg",
      message: "可以介绍一下你自己吗？"
    },
      wjz: { imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3395443728,2191156425&fm=26&gp=0.jpg",
      message: "我们可以一起学习离散数学吗？"
    },
    wow: {
      imgUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=460885269,1209361721&fm=26&gp=0.jpg",
      message: "请问，高数课视频可以分享一下吗？"
    },
    qhb: {
      imgUrl: "data:image/jpeg;base64,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",
      message: "你现在都不学习的吗？"
    },
    lyh: {
      imgUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=925135667,2769745375&fm=26&gp=0.jpg",
      message: "你知道高数老师电话号码吗？"
    },
    wyn: {
      imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=438325268,2532581150&fm=26&gp=0.jpg",
      message: "可以给我讲一下高数二吗？"
    }
  }
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      information : this.data.people[options.name]
    })

    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  myinfo1: function(e) {
    this.setData({
      myinfo1: e.detail.value
    })
  },

  send: function(e) {
    this.setData({
      bool: !this.data.bool,
      myinfo2: this.data.myinfo1
    })
  },

  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
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