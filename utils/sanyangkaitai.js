var date = new Date();
var dateString = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";

var textArray = [
    [{
        p1: "我亲爱的朋友们",
        c: ['color: rgb(233, 42, 105); margin: 1%;']
    }, {
        p1: "今天是" + dateString,
        c: ['color: rgb(252,69,163); margin-top: 1%; margin-bottom: 1%;']
    }, {
        p1: "三阳开泰好日子",
        c: ['color: rgb(252,139,202); margin: 1%;']
    }, {
        p1: "微信祝福第一个为你送上问候",
        c: ["background-color: yellow; color: rgb(203,38,80); margin: 1%;"]
    }, {
        p1: "在这春意盎然的阳春三月",
        c: ['color: rgb(165,63,39); margin: 1%;'],
    }, {
        p1: "祝愿收到这条微信的朋友",
        c: ['color: yellow; margin: 1%;'],
    }, {
        p1: "吉祥如意缠绕你一辈子",
        c: ['color: green; margin: 1%;'],
    }],
    [{
        p1:"这世界上最难断的是感情",
        c: ["color: rgb(255,190,205); margin-top: 3%; margin-bottom: 3%;"],
    }, {
        p1: "最难求的是爱情",
        c: ["color: darkturquoise; margin-top: 3%; margin-bottom: 3%;"],
    }, {
        p1: "最难还的人情",
        c: ["color: #ffff33; margin-top: 3%; margin-bottom: 3%;"],
    }, {
        p1: "最难得的是友情",
        c: ['color: lawngreen; margin-top: 3%; margin-bottom: 3%;'],
    }, {
        p1: "最难分的亲情",
        c: ['color: sandybrown; margin-top: 3%; margin-bottom: 3%;'],
    }, {
        p1: "最难找的是真情",
        c: ['color: coral; margin-top: 3%; margin-bottom: 3%;'],
    }, {
        p1: "最想看的是你微笑的表情",
        c: ['color: firebrick; margin-top: 3%; margin-bottom: 3%;'],
    }, {
        p1: "我想把世上最美好的一切送给你",
        c: ['color: aqua; margin-top: 3%; margin-bottom: 3%;'],
    }, {
        p1: "送给最特别的朋友",
        c: ['color: #FFB3FF; margin-top: 3%; margin-bottom: 3%;'],
    }],
    [{
      p1: "希望在未来的日子里",
      c: ["color: rgb(255,190,205); margin-top: 3%; margin-bottom: 3%;"],
    }, {
      p1: "你我的情谊天长地久",
      c: ["color: darkturquoise; margin-top: 3%; margin-bottom: 3%;"],
    }, {
      p1: "我依然可以每天为你送去祝福",
      c: ["color: #ffff33; margin-top: 3%; margin-bottom: 3%;"],
    }, {
      p1: "愿所有的好梦依偕着你",
      c: ['color: lawngreen; margin-top: 3%; margin-bottom: 3%;'],
    }, {
      p1: "入睡是甜，醒来成真！",
      c: ['color: sandybrown; margin-top: 3%; margin-bottom: 3%;'],
    }, {
      p1: "愿所有的财运笼罩着你",
      c: ['color: coral; margin-top: 3%; margin-bottom: 3%;'],
    }, {
      p1: "日出遇贵，日落见财！",
      c: ['color: firebrick; margin-top: 3%; margin-bottom: 3%;'],
    }, {
      p1: "愿所有的吉星呵护着你",
      c: ['color: aqua; margin-top: 3%; margin-bottom: 3%;'],
    }, {
      p1: "时时有祥！刻刻平安！",
      c: ['color: #FFB3FF; margin-top: 3%; margin-bottom: 3%;'],
    }],
    [{
      p: ['\u25cf', '此祝福内涵魅力', '\u25cf'],
      c: ['color: red;margin-top: 1%; margin-bottom: 1%', 'color: limegreen; margin-top: 1%; margin-bottom: 1%', 'color: green; margin-top: 1%; margin-bottom: 1%'],
    }, {
      p: ['健康\u25cf', '活泼', '青春力'],
      c: ['color: red; font-size: 23px; margin-top: 1%; margin-bottom: 1%', 'color: limegreen; margin-top: 1%; margin-bottom: 1%', 'color: yellow; margin-top: 1%; margin-bottom: 1%'],
    }, {
      p: ['好运\u25cf', '吉祥', '幸福力'],
      c: ['color: blue; font-size: 23px; margin-top: 1%; margin-bottom: 1%', 'color: limegreen; margin-top: 1%; margin-bottom: 1%', 'color: turquoise; margin-top: 1%; margin-bottom: 1%']
    }, {
      p: ['幽默\u25cf', '搞笑', '感染力'],
      c: ['color: yellow; font-size: 23px; margin-top: 1%; margin-bottom: 1%', 'color: limegreen; margin-top: 1%; margin-bottom: 1%', 'color: yellow; margin-top: 1%; margin-bottom: 1%']
    }, {
      p: ['\u25cf', '祝收到的朋友在2018年', '\u25cf'],
      c: ['color: #E63F00; margin-right: 1%; margin-top: 1%; margin-bottom: 1%', 'color: #E63F00; margin-top: 1%; margin-bottom: 1%', 'color: yellow; margin-top: 1%; margin-bottom: 1%']
    }, {
      p: ['\u25cf', '拥有运气财气好福气', '\u25cf'],
      c: ['color: #E63F00; margin-top: 1%; margin-bottom: 1%', 'color: aqua; margin-top: 1%; margin-bottom: 1%', 'color: yellow; margin-top: 1%; margin-bottom: 1%']
    }, {
      p: ['\u25cf', '双倍福气送给你', '\u25cf'],
      c: ['color: #E63F00; margin-top: 1%; margin-bottom: 1%', 'color: #FF44AA; margin-top: 1%; margin-bottom: 1%', 'color: yellow; margin-top: 1%; margin-bottom: 1%']
    }]
];

module.exports = {
    textArray:textArray,
}

