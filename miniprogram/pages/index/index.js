// var sliderWidth = 125; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    imgUrls: [
      '../../static/image/2.png',
      '../../static/image/1.jpeg',
      '../../static/image/0.jpeg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    tabs: ["个性推荐", "社区动态", "关注"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    homeInfo: [
      { 
        title: '信息科学与工程学院开展“工大教师初心”大学习大讨论活动',
        body: '9月26日，副校长何又春深入信息学院计算机教研室参加“工大教师之初心”大学习大讨论活动。信息学院党委书记...',
        img: '../../static/image/info1.jpg',
        url: '/pages/article/article?name=homeinfo2'
      },
      {
        title: '学校召开中共沈阳工业大学第十二届委员会第三次全体会议',
        body: '10月9日上午，中共沈阳工业大学第十二届委员会第三次全体会议在校部五楼会议室召开。会议的主要任务是...',
        img: '../../static/image/info2.jpg',
        url: '/pages/article/article?name=homeinfo1'
      },
      {
        title: '学校举办“将改革开放进行到底”青年学生宣讲会',
        body: '9月26日、27日，学校举办了“将改革开放进行到底”青年学生系列宣讲会。活动以改革开放40周年中国的变化与发展...',
        img: '../../static/image/info3.jpg',
        url: '/pages/article/article?name=homeinfo3'
      }
    ],
    communityInfo: [
      {
        url: '/pages/article/article?name=communityInfo1',
        title: '(高数)第五周的作业已经更新，快来查看吧',
        lookIcon: '../../static/image/look.png',
        joinIcon: '../../static/image/join.png',
        lookAccount: 128,
        joinAccount: 63,
        img: 'http://img0.imgtn.bdimg.com/it/u=1813833741,3890256991&fm=200&gp=0.jpg'
      },
      {
        url: '/pages/article/article?name=communityInfo2',
        title: '15级学长带飞，Photoshop全套课程即将开课',
        lookIcon: '../../static/image/look.png',
        joinIcon: '../../static/image/join.png',
        lookAccount: 1984,
        joinAccount: 324,
        img: 'http://imgsrc.baidu.com/image/c0%3Dpixel_huitu%2C0%2C0%2C294%2C40/sign=96280abedba20cf4529df69f1f712e5a/fcfaaf51f3deb48f43fe2ce7fb1f3a292df57870.jpg'
      }
    ],
    focuses: [
      {
        url: '/pages/article/article?name=focusinfo1',
        img: '../../static/course/user_img.jpeg',
        title1: '对未来人生的规划',
        title2: '当我们迷茫的时候，引导我们找到目标，并鼓励我们继续向前',
      }
    ]
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          // sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
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
  }
});