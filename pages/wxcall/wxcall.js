Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "http://170619.s81i.faiusr.com/2/107/AFEI_7QKEAIYACDdmKHaBSicjOeYBTDIATjIAUBr.jpg",
          "name": "耿医师",
          "description": "心理咨询专家顾问",
          "wx": "g940414854"
        },
        {
          "id": 2,
          "imgurl": "http://170619.s81i.faiusr.com/2/107/AFEI_7QKEAIYACDcmKHaBSja5JPuATDIATjIAUBr.jpg",
          "name": "田医师",
          "description": "一级心理咨询师",
          "wx": "Rtt892"
        }
      ]
    };
    //console.log(data.datas);
    //设置车辆展示信息
    that.setData({
      carInfoData: data.datas
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