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
          "imageurl": "../../resources/1.jpg",
        }, {
          "title": "二月二龙抬头",
          "imageurl": "../../resources/2.jpg",
        }, {
          "title": "春分节气",
          "imageurl": "../../resources/3.jpg",
        }, {
          "title": "群友祝福",
          "imageurl": "../../resources/4.png",
        }]
      },
      {
        "id": 2,
        "theme": "美好祝福",
        "items": [{
          "title": "一帆风顺",
          "imageurl": "../../resources/5.png"
        }, {
          "title": "双倍福气",
          "imageurl": "../../resources/6.jpg",
        }, {
          "title": "三阳开泰",
          "imageurl": "../../resources/7.jpg",
        }, {
          "title": "四季平安",
          "imageurl": "../../resources/8.jpg",
        }, {
          "title": "五福临门",
          "imageurl": "../../resources/9.png",
        }, {
          "title": "六六大顺",
          "imageurl": "../../resources/10.jpg",
        }]
      }
    ]
  }

  return arr;
}