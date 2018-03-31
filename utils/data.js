module.exports = {
  viewData: viewData,
  strIdtoIntId: strIdtoIntId,
}

function viewData() {
  var arr = {
    list: [
      {
        "id": 1,
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
        "id": 2,
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

  return arr;
}

function strIdtoIntId(strId) {
  var intId = 0;
  var idsObject = {
    "zhishujiefacaishu": 1,
    "eryueerlongtaitou": 2,
  };
  intId = idsObject[strId];
  return intId;
}