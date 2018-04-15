var g_ServerUrl = 'http://tianjiansoft.club/';
var g_ServerUrlHttps = 'https://tianjiansoft.club/';
const shuangbeifuqi = require('shuangbeifuqi.js')
const sanyangkaitai = require('sanyangkaitai.js')

var g_arr = {
    list: [{
            "id": 3,
            "theme": "四月节日",
            "items": [{
                "id": "yurenjiezhufu",
                "title": "愚人节祝福",
                "imageurl": "../../resources/yurenjiezhufu.jpg",
            }, {
                "id": "qingmingjiemianhuai",
                "title": "清明节缅怀",
                "imageurl": "../../resources/qingmingjiemianhuai.jpg",
            }, {
                "id": "guyujieqizhufu",
                "title": "谷雨节气祝福",
                "imageurl": "../../resources/guyujieqi.jpg",
            }, {
                "id": "chunnuanhuakai",
                "title": "春暖花开",
                "imageurl": "../../resources/chunnuanhuakai.jpg",
            }]
        },
        {
            "id": 2,
            "theme": "三月节日",
            "items": [{
                "id": "zhishujiefacaishu",
                "title": "植树节发财树",
                "imageurl": "../../resources/1.jpg",
            }, {
                "id": "eryueerlongtaitou",
                "title": "二月二龙抬头",
                "imageurl": "../../resources/2.jpg",
            }, {
                "id": 3,
                "title": "春分节气",
                "imageurl": "../../resources/3.jpg",
            }, {
                "id": 4,
                "title": "群友祝福",
                "imageurl": "../../resources/4.png",
            }]
        },
        {
            "id": 1,
            "theme": "美好祝福",
            "items": [{
                "id": 5,
                "title": "一帆风顺",
                "imageurl": "../../resources/5.png"
            }, {
                "id": 6,
                "title": "双倍福气",
                "imageurl": "../../resources/6.jpg",
            }, {
                "id": 7,
                "title": "三阳开泰",
                "imageurl": "../../resources/7.jpg",
            }, {
                "id": 8,
                "title": "四季平安",
                "imageurl": "../../resources/8.jpg",
            }, {
                "id": 9,
                "title": "五福临门",
                "imageurl": "../../resources/9.png",
            }, {
                "id": 10,
                "title": "六六大顺",
                "imageurl": "../../resources/10.jpg",
            }]
        }
    ]
}

var g_templateItems = [];


function viewData() {
    return g_arr;
}

function getTemplateItemsOrderByAgreeses(callback) {
    getTemplateItemsOrderByAgreesesFromServer(callback);
}

function getTemplateItemsOrderByDate(callback) {
    getTemplateItemsOrderByDateFromServer(callback);
}

function getTemplateContentImageUrls(callback, id) {
    getTemplateContentImageUrlsFromServer(callback, id);
}

function strIdtoIntId(strId) {
    var intId = 0;
    var idsObject = {
        "zhishujiefacaishu": 1,
        "eryueerlongtaitou": 2,
        "yurenjiezhufu": 3,
        "qingmingjiemianhuai": 4,
    };
    intId = idsObject[strId];
    return intId;
}

function getTextContentById(id) {
    var idsTextContents = [];
    if (id == 'shuangbeifuqi') {
        idsTextContents = shuangbeifuqi.textArray;
    } else if (id == 'sanyangkaitai') {
      idsTextContents = sanyangkaitai.textArray;
    }
    
    return idsTextContents;
}

function getTemplateItemsOrderByAgreesesFromServer(callback) {
    wx.request({
        url: g_ServerUrlHttps + "index.php",
        data: {
            method: "getTemplateItemsOrderByAgreeses",
        },
        dataType: "json",
        success: function(res) {
            callback(res);
        },
    })
}

function getTemplateItemsOrderByDateFromServer(callback) {
    wx.request({
        url: g_ServerUrlHttps + "index.php",
        data: {
            method: "getTemplateItemsOrderByDate",
        },
        dataType: "json",
        success: callback,
    });
}

function getTemplateContentImageUrlsFromServer(callback, id) {
    console.log(id);
    wx.request({
        url: g_ServerUrlHttps + "index.php",
        data: {
          method: "getTemplateContentImageUrls",
          name_id: id,
        },
        dataType: "json",
        success: callback,
    });
}

module.exports = {
    viewData: viewData,
    strIdtoIntId: strIdtoIntId,
    getTextContentById: getTextContentById,
    getTemplateItemsOrderByAgreeses: getTemplateItemsOrderByAgreeses,
    getTemplateItemsOrderByDate: getTemplateItemsOrderByDate,
    getTemplateContentImageUrls: getTemplateContentImageUrls,
    ServerUrl: g_ServerUrl,
}