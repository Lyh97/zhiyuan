// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: [
      {
        img: 'http://www.rsnet.com.cn/d/file/service/mobile/mini_program/2017-10-11/b34a1092f83d59fd77c8ea197cbb7ba7.jpg',
        title: '微信公众平台基础讲解',
        teacher: '邓老师',
        acount: 7708,
        url: 'courseInfo?name=couseInfo1',
        money: 'Free'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539231156758&di=e0465db9fd904379c5e537ae56819adc&imgtype=0&src=http%3A%2F%2Fs4.51cto.com%2Foss%2F201802%2F10%2F2f2185757fe8b381dfa8d0f0d7d42adf.jpg-wh_651x-s_111359355.jpg',
        title: 'Python高级开发/ Flask 爬虫/ Openstack Django',
        teacher: '黄老师',
        acount: 3305,
        url: 'courseInfo',
        money: 'Free'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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