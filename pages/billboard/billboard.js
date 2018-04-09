// pages/billboard/billboard.js
const app = getApp();
const util = require("../../utils/util.js");
const data = require("../../utils/data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleImageArray: [],
    templateItems: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var titleImageArray = [];
    titleImageArray[0] = "../../resources/billboard/yingxiongbang.png";

    data.getTemplateItemsOrderByAgreeses(function(res) {
      var items = [];
      items = res.data;
      items.forEach(function(element) {
        element.imageurl = data.ServerUrl + element.imageurl;
      })
      that.setData({
        templateItems: items,
      });
      console.log(that.data.templateItems);
    });

    that.setData({
      titleImageArray: titleImageArray,
    });
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