// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path:"/static/visit.png",
  },
  get:function(){
    //wx.openSetting({});
    var that=this;
    //调用微信接口，获取当前用户信息
    wx.getUserInfo({
      success:function(res){
        console.log('success',res)
        that.setData({
          name:res.userInfo.nickName,
          path:res.userInfo.avatarUrl
        });
      },
      //调用失败
      fail:function(res){
        console.log('fail',res)
      }
    })
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