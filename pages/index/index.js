Page({
    data: {
        winWidth: 0,
        winHeight: 0,
    },
    onLoad: function(options) {
        var that = this;

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