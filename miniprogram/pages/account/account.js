//index.js
const app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    useritemArray: [
      { icon: "📖", title: "学习进度" },
      { icon: "💓", title: "收藏" },
      { icon: "🎫", title: "卡包" },
      { icon: "👬", title: "学友圈" },
      { icon: "💰", title: "钱包" },
    ]
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
