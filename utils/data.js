module.exports = {
  viewData: viewData,
}

function viewData() {
  var arr = {
    list: [
      {
        "id": 1,
        "theme": "三月节日",
        "items": [{
          "title": "植树节发财树",
          "image-url": "",
        }, {
          "title": "二月二龙抬头",
          "image-url": "",
        }, {
          "title": "春分节气",
          "image-url": "",
        }, {
          "title": "群友祝福",
          "image-url": "",
        }]
      },
      {
        "id": 2,
        "theme": "美好祝福",
        "items": [{
          "title": "一帆风顺",
          "image-url": ""
        }, {
          "title": "双倍福气",
          "image-url": "",
        }, {
          "title": "三阳开泰",
          "image-url": "",
        }, {
          "title": "四季平安",
          "image-url": "",
        }, {
          "title": "五福临门",
          "image-url": "",
        }]
      }
    ]
  }

  return arr;
}