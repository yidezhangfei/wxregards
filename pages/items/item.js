// pages/items/item.js
const App = getApp();
const util = require("../../utils/util.js");
const data = require("../../utils/data.js")
const ServerUrl = 'http://tianjiansoft.club/';

const congratulations = "祝您健康";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    userInfo: {
    },
    nickName: "",
    templateUrl: ServerUrl + "resources/template/",
    iconUrl: ServerUrl + "resources/icon/",
    bandUrl: ServerUrl + "resources/band/",
    avatarUrl: "",
    dataString: "",
    imageBandUrl: "",
    backgroundUrl: "",
    today: "",
    imageUrlArray: [],
    textContentArray: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    var id = options.id;
    var date = new Date();
    var date_string = date.getFullYear() + "年" + date.getMonth() + "月" + date.getDate() + "日";

    that.setData({
      id: id,
      today: date_string,
    });
    console.log(that.data.today);

    that.getUserInfo();
    that.SetPageContent(id);
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
  
  },

  // getUserInfo
  getUserInfo: function() {
    var that = this;
    
    wx.getUserInfo({
      success: function(res) {
        that.setData({
          userInfo: res.userInfo,
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName,
        });
        console.log(that.data.nickName)
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
  //  that.SetImageUrl(intId, 9);
    that.SetImageUrl(id, 9);

    var textContentArray = data.getTextContentById(id);
    that.setData({
      textContentArray: textContentArray,
    });
    console.log(that.data.textContentArray[0]);
  },
  SetImageUrl: function(id, count) {
    var that = this;
    // get background image from server
    data.getTemplateContentImageUrls(function(res) {
      var list = res.data;
      console.log(list);
      var background_url = "";
      var image_urls_array = [];
      list.forEach(function(element) {
        if (element['background_image_url']) {
          background_url = element['background_image_url'];
        }
        if (element['image_url']) {
          image_urls_array.push(element['image_url']);
        }
      });
      console.log(image_urls_array);
      that.setData({
        backgroundUrl: background_url,
        imageUrlArray: image_urls_array,
      });
    }, id);
    // set band image
    that.setData({
      imageBandUrl: that.data.bandUrl + id + ".gif", 
    });
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