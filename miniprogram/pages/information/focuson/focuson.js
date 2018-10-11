// pages/information/focuson/focuson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i: 0,
    title: {
      Name: "", imgUrl: "", title: "",classtitleArray:[]
    },
    focusonArray: {
      Array1: { 
        Name: "高等数学", 
        imageUrl: "/static/image/math.png",
        contxt:"math",
        title: "高等数学你不需要学习，给邓老师1万块钱培训费包教会！", 
      classtitleArray: [
        { tit: "1.有趣的高斯函数" }, 
        { tit: "2.神奇的阿基米德" }, 
        { tit: "3.尼古拉斯·宇航自传" }
      ]
      },
      Array2: {
        Name: "C++", imageUrl: "/static/image/ccc.png", contxt: "math",
        title: "C++之老油条--邓成！",
        classtitleArray: [{ tit: "1.尼古拉斯·宇航自传" }, { tit: "2.尼古拉斯·宇航自传" }, { tit: "3.尼古拉斯·宇航自传" }]
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({i:1})
    this.setData({
      title: this.data.focusonArray[options.name]
    })
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