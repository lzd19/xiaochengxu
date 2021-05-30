// pages/jump1/jump1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messge:"牛啊牛啊",
    name:"老铁666",
    path:"/static/my2.png",
    location:"请选择你的地址",
    imageList:["/static/talk1.png","/static/talk2.png"]
  },
  change:function(){
    //获取数据
    console.log(this.data.messge);
    //修改数据
    this.setData({messge:"好牛啊好牛啊"})
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
  /* 获取位置 */
  getlocation:function(){
    var that=this;
    wx.chooseLocation({
      success:function(res){
        that.setData({location:res.address});
      },
    })
  },
  /* 上传照片 (只是上传到了内存) */
  uploadImage:function(){
    var that=this;
    wx.chooseImage({
      count:9,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success:function(res){
          that.setData({
            imageList:res.tempFilePaths
          });
          /* that.setData({
            imageList:that.data.imageList.concat(res.tempFilePaths)
          }) */
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(){

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