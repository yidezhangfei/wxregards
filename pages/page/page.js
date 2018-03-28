
var viewData = require("../../utils/data.js");

Page({
    data: {
        winWidth: 0,
        winHeight: 0,

        view_data: [],
    },
    onLoad: function(options) {
        var that = this;

        var view_data = viewData.viewData().list;
        console.log(view_data);

        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                });
            },
        })
    },
    onReady: function() {

    },
    onShow: function() {

    },
    onHide: function() {

    },
    onUnload: function() {

    },
})