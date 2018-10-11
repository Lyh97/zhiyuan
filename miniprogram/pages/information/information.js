//index.js
const app = getApp()

Page({
  data: {
    DataArray: [
      {Name: "高等数学",Count: "200条动态",imageUrl:"/static/image/math.png",url:"focuson/focuson?name=Array1"},
      { Name: "面向对象程序设计", Count: "105条动态", imageUrl: "/static/image/ccc.png", url: "focuson/focuson?name=Array2" },
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
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
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }
})
