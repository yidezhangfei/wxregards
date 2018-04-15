var date = new Date();
var dateString = date.getFullYear() + "年" + date.getMonth() + "月" + date.getDate() + "日";

var textArray = [
    [{
        p1: "我亲爱的朋友们",
        c: ['color: rgb(233, 42, 105); margin: 1%;']
    }, {
        p1: "今天是" + dateString,
        c: ['color: rgb(252,69,163); margin-top: 1%; margin-bottom: 1%;']
    }, {
        p1: "千载难逢的好事成双日",
        c: ['color: rgb(252,139,202); margin: 1%;']
    }, {
        p1: "送你双倍的福气",
        c: ["background-color: yellow; color: rgb(203,38,80); margin: 1%;"]
    }, {
        p1: "快乐成双",
        c: ['color: rgb(165,63,39); margin: 1%;'],
    }, {
        p1: "福气满满",
        c: ['color: yellow; margin: 1%;'],
    }, {
        p1: "一生平安",
        c: ['color: green; margin: 1%;'],
    }],
    [{
        p1:"吉祥双喜的日子",
        c: ["color: rgb(255,190,205); margin-top: 3%; margin-bottom: 3%;"],
    }, {
        p1: "双倍的祝福送给你",
        c: ["color: darkturquoise; margin-top: 3%; margin-bottom: 3%;"],
    }, {
        p1: "月儿圆，家人圆",
        c: ["color: #ffff33; margin-top: 3%; margin-bottom: 3%;"],
    }, {
        p1: "合家幸福双团圆",
        c: ['color: lawngreen; margin-top: 3%; margin-bottom: 3%;'],
    }, {
        p1: "钞票滚滚双和美",
        c: ['color: sandybrown; margin-top: 3%; margin-bottom: 3%;'],
    }, {
        p1: "亲情近，友情近",
        c: ['color: coral; margin-top: 3%; margin-bottom: 3%;'],
    }, {
        p1: "亲情近，友情近",
        c: ['color: firebrick; margin-top: 3%; margin-bottom: 3%;'],
    }, {
        p1: "问候甜，祝福甜",
        c: ['color: aqua; margin-top: 3%; margin-bottom: 3%;'],
    }, {
        p1: "吉祥日子双倍甜",
        c: ['color: #FFB3FF; margin-top: 3%; margin-bottom: 3%;'],
    }],
    [{
        p: ['\u039f', '此祝福内涵魅力', '\u039f'],
        c: ['color: red;margin-top: 1%; margin-bottom: 1%','color: limegreen; margin-top: 1%; margin-bottom: 1%', 'color: green; margin-top: 1%; margin-bottom: 1%'],
    }, {
        p: ['健康\u039f', '活泼', '青春力'],
        c: ['color: red; font-size: 23px; margin-top: 1%; margin-bottom: 1%', 'color: limegreen; margin-top: 1%; margin-bottom: 1%', 'color: yellow; margin-top: 1%; margin-bottom: 1%'],
    }, {
        p: ['好运\u039f', '吉祥', '幸福力'],
        c: ['color: blue; font-size: 23px; margin-top: 1%; margin-bottom: 1%', 'color: limegreen; margin-top: 1%; margin-bottom: 1%', 'color: turquoise; margin-top: 1%; margin-bottom: 1%']
    }, {
        p: ['幽默\u039f', '搞笑', '感染力'],
        c: ['color: yellow; font-size: 23px; margin-top: 1%; margin-bottom: 1%', 'color: limegreen; margin-top: 1%; margin-bottom: 1%', 'color: yellow; margin-top: 1%; margin-bottom: 1%']
    }, {
        p: ['\u039f', '祝收到的朋友在2018年', '\u039f'],
        c: ['color: #E63F00; margin-right: 1%; margin-top: 1%; margin-bottom: 1%', 'color: #E63F00; margin-top: 1%; margin-bottom: 1%', 'color: yellow; margin-top: 1%; margin-bottom: 1%']
    }, {
        p: ['\u039f', '拥有运气财气好福气', '\u039f'],
        c: ['color: #E63F00; margin-top: 1%; margin-bottom: 1%', 'color: aqua; margin-top: 1%; margin-bottom: 1%', 'color: yellow; margin-top: 1%; margin-bottom: 1%']
    }, {
        p: ['\u039f', '双倍福气送给你', '\u039f'],
        c: ['color: #E63F00; margin-top: 1%; margin-bottom: 1%', 'color: #FF44AA; margin-top: 1%; margin-bottom: 1%', 'color: yellow; margin-top: 1%; margin-bottom: 1%']
    }],
];

module.exports = {
    textArray:textArray,
}

