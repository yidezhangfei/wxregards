var g_ServerUrl = 'http://tianjiansoft.club/';

var g_arr = {
  list: [
    {
      "id": 3,
      "theme": "四月节日",
      "items": [
        {
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
        }
      ]
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
  var date = new Date();
  var dateString = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
  var idsTextContents = {
    "zhishujiefacaishu": [[{
      p1: "我亲爱的朋友们",
      c: "color:#ed1162"
    }, {
      p1: "今天是" + dateString,
      c: "color: #f93c87"
    }, {
      p1: "祝各位一路顺风",
      c: "color: red; background-color: yellow"
    }, {
      p1: "每月都幸福",
      c: "color: #f24f12"
    }, {
      p1: "每年都好运",
      c: "color: yellow"
    }, {
      p1: "一生都平安",
      c: "color: green"
    }], [{
      p1: "今天是个一帆风顺的日子",
      c: "color: red"
    }, {
      p1: "为你送上",
      c: "color: red"
    }, {
      p1: "十亿个祝福",
      c: "color: yellow"
    }], [{
      p1: "工作", p2: "帆风顺", c: "color: #fabcc8"
    }, {
      p1: "成就", p2: "鸣惊人", c: "color:#1cfafa"
    }, {
      p1: "生意", p2: "本万利", c: "color:#ffff47"
    }, {
      p1: "事业", p2: "飞冲天", c: "color:#11fa15"
    }, {
      p1: "生活", p2: "劳永逸", c: "color:#99f9a1"
    }, {
      p1: "人生", p2: "帆风顺", c: "color:#f8a366"
    }, {
      p1: "好人", p2: "生平安", c: "color:#d98128"
    }, {
      p1: "出门", p2: "日千里", c: "color:red"
    }, {
      p1: "工作", p2: "马当先", c: "color:yellow"
    }, {
      p1: "旅行", p2: "路顺风", c: "color:#fabcc8"
    }]],
  };
  return idsTextContents[id];
}

function getTemplateItemsOrderByAgreesesFromServer(callback) {
  wx.request({
    url: g_ServerUrl + "index.php",
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
    url: g_ServerUrl + "index.php",
    data: {
      method: "getTemplateItemsOrderByDate",
    },
    dataType:"json",
    success: callback,
  });
}

module.exports = {
  viewData: viewData,
  strIdtoIntId: strIdtoIntId,
  getTextContentById: getTextContentById,
  getTemplateItemsOrderByAgreeses: getTemplateItemsOrderByAgreeses,
  getTemplateItemsOrderByDate: getTemplateItemsOrderByDate,
  ServerUrl: g_ServerUrl,
}