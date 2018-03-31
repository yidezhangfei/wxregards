// pages/items/item.js
const App = getApp();
const util = require("../../utils/util.js");
const data = require("../../utils/data.js")
const ServerUrl = 'http://115.159.28.14/mp_bless/';

const congratulations = "祝您健康";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    userInfo: {
    },
    templateUrl: ServerUrl + "resource/template/",
    iconUrl: ServerUrl + "resource/icon/",
    bandUrl: ServerUrl + "resource/band/",
    dataString: "",
    imageUrlArray: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    var id = options.id;

    that.setData({
      id: id,
    });

    that.SetPageContent(id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    that.getUserInfo();
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
  
  },

  // getUserInfo
  getUserInfo: function() {
    var that = this;
    
    wx.getUserInfo({
      success: function(res) {
        that.setData({
          userInfo: res.userInfo,
        });
        var term = that.data.userInfo.nickName + congratulations;
        wx.setNavigationBarTitle({
          title: term,
        })
      },
      fail: function(res) {
        console.log(res);
      }
    })
  },
  SetPageContent: function(id) {
    var that = this;
    var intId = data.strIdtoIntId(id);
    that.SetImageUrl(intId, 9);
  },
  SetImageUrl: function(id, count) {
    var that = this;
    var tempImageUrlArray = [];
    for(var i=0; i <= count; i++) {
      var templateUrl = that.data.templateUrl + id.toString() + "/";
      tempImageUrlArray[i] = templateUrl + i.toString() + ".gif";
    }
    that.setData({
      imageUrlArray: tempImageUrlArray,
    })
    console.log(that.data.imageUrlArray);
  }
})