// pages/index/index.js
var viewData = require("../../utils/data.js");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        view_data: [],
    },

    click: function(e) {
        console.log(e)
        var page_id = e.currentTarget.id;
        var url = "../items/item?id=" + page_id;
        wx.navigateTo({
            url: url,
            fail: function(e) {
                console.log(e);
            }
        })
    },

    /**
     * 生命周期函数，监听页面加载 
     */
    onLoad: function(options) {
        var that = this;

        /* var data = viewData.viewData().list;
         that.setData({
           view_data: data
         }) */

        viewData.getTemplateItemsOrderByDate(function(res) {
            var list = res.data;
            console.log(list);

            var content = [{ theme: "", items: [] }];
            list.forEach(function(element) {
                var theme_temp = element.type;
                var item = { id: "", title: "", imageurl: "" };
                item.id = element.name_id;
                item.title = element.name;
                item.imageurl = viewData.ServerUrl + element.imageurl;
                if (content[0]["theme"] == "") {
                    content[0]["theme"] = theme_temp;
                    content[0]["items"].push(item);
                    console.log(item);
                } else if (theme_temp != content[content.length - 1]["theme"]) {
                    var type = { theme: "", items: [] };
                    type.theme = theme_temp;
                    type.items.push(item);
                    console.log(type);
                    content.push(type);
                } else {
                    content[content.length - 1]["items"].push(item);
                    console.log("run 58");
                    console.log(item);
                }
            }, this);
            console.log(content);
            that.setData({
                view_data: content,
            });
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})