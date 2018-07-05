$(document).ready(function() {
    $("#denglu").click(function() {
        window.location.href = "../Sfruit/login/login.html"
    });
    $("#zhuce").click(function() {
        window.location.href = "../Sfruit/login/register.html"
    });
    $("#cuback").click(function() {
        fruit.fruits = window.fruits.filter(function(fruit) {
            return fruit != null;
        })
    })
    $("#bcshop").click(function() {
        fruit.fruits = window.fruits.filter(function(fruit) {
            return fruit != null;
        })
    })
    $("#bckind").click(function() {
        fruit.fruits = window.fruits.filter(function(fruit) {
            return fruit != null;
        })
    })
    $("#bcchina").click(function() {
        fruit.fruits = window.fruits.filter(function(fruit) {
            return fruit != null;
        })
    })
    $("#china").click(function() {
        fruit.fruits = window.fruits.filter(function(fruit) {
            return fruit != null;
        });
        fruit.fruits = fruit.fruits.filter(function(fruit) {
            return fruit.country.id == 1;
        })
    })
    $("#nochina").click(function() {
        fruit.fruits = window.fruits.filter(function(fruit) {
            return fruit != null;
        });
        fruit.fruits = fruit.fruits.filter(function(fruit) {
            return fruit.country.id != 1;
        })
    })
    $("#submit").click(function() {
        var searchFruit = $("#searchFruit").get(0).value;
        fruit.fruits = window.fruits.filter(function(fruit) {
            return fruit != null;
        });
        fruit.fruits = fruit.fruits.filter(function(fruit) {
            return fruit.name.indexOf(searchFruit) != -1;
        })
    });
    $("#usercenter").click(function() {
        window.location.href = '../UserCenter/BuyerCenter.html'
    })
    $("#index").click(function() {
        window.location.href = '../index.html'
    })
    var id = localStorage.getItem('id');
    if (id == '1') {
        denglumodel.isLogin = true;
    }
});

var country;
var shopper;
var kind;

var denglumodel = new Vue({
    el: "#denglumodel",
    data: {
        isLogin: false,
    }
})

var shoppers = new Vue({
    el: '#shopper',
    data: {
        shoppers: [{
                name: '商家1',
                id: 'shopper1',
            },
            {
                name: '商家2',
                id: 'shopper2',
            },
            {
                name: '商家3',
                id: 'shopper3',
            },
            {
                name: '商家4',
                id: 'shopper4',
            }
        ]
    },
    methods: {
        choseShopper(shopper) {
            window.fruit.shopper(shopper);
        }
    }
})

var kind = new Vue({
    el: '#kinds',
    data: {
        kinds: [{
                name: '苹果',
                kind: 'apple'
            },
            {
                name: '香蕉',
                kind: 'banana'
            },
            {
                name: '草莓',
                kind: 'Strawberry'
            },
            {
                name: '猕猴桃',
                kind: 'Kiwi'
            },
            {
                name: '杏子',
                kind: 'apricot'
            }
        ]
    },
    methods: {
        choseKind(kind) {
            window.fruit.kind(kind);
        }
    }
})

var country = new Vue({
    el: '#country',
    data: {
        countrys: [{
            name: '中国',
            id: 1
        }, {
            name: '越南',
            id: 2
        }, {
            name: '荷兰',
            id: 3
        }, {
            name: '美国',
            id: 4
        }]
    },
    methods: {
        choseCountry(country) {
            window.fruit.country(country);
        }
    }
})

var fruit = new Vue({
    el: '#fruits',
    data: {
        fruits: [{
                id: 1,
                src: '../Sfruit/Images/482065238502496930.jpg',
                name: '美人李',
                kind: 'banana',
                price: 5.5,
                shopper: {
                    id: 'shopper1',
                    name: '商家1'
                },
                country: {
                    id: 1,
                    name: '中国'
                },
                jieshao: '一树红美人，枝繁叶茂间点缀着漫天的朱红。我们闻见了李子独有的香味混合着灌木清香。靠近果树，扑鼻的美人李香迎面袭来。在阳光的照耀下，红得晶莹剔透。'
            },
            {
                id: 2,
                src: '../Sfruit/Images/917593610264255430.jpg',
                name: '甜心芒',
                kind: 'banana',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 2,
                    name: '越南'
                },
                jieshao: '甜心芒活动9斤20个以内，一个4两左右。'
            },
            {
                id: 3,
                src: '../Sfruit/Images/33558913801732740.jpg',
                name: '南非西柚',
                kind: 'banana',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 3,
                    name: '荷兰'
                },
                jieshao: '一件8颗，单果230-300克买6颗送2颗，实发8颗，55包邮‼'
            },
            {
                id: 4,
                src: '../Sfruit/Images/256660426650346801.jpg',
                name: '纽扣蟠桃',
                kind: 'banana',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 4,
                    name: '美国'
                },
                jieshao: '今天最后一天接单，错过再等一年， 5斤，49.9包邮'
            },
            {
                id: 5,
                src: '../Sfruit/Images/659479878259961007.jpg',
                name: '无核荔枝',
                kind: 'banana',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 1,
                    name: '中国'
                },
                jieshao: '“树上的蜂蜜，汁液爆满” 听说咬下去会有要爆的感觉'
            },
            {
                id: 6,
                src: '../Sfruit/Images/823185833255645548.jpg',
                name: '夏橙',
                kind: 'banana',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: '2',
                    name: '越南'
                },
                jieshao: '喜欢橙子，那是最接近太阳的颜色 【夏橙】以夏命名的水果  个头不大，果皮薄，果肉厚实 汁多不腻，甜中带酸，橙味浓。'
            },
            {
                src: '../Sfruit/Images/198765557630413770.jpg',
                name: '黄蜜樱桃',
                kind: 'banana',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 3,
                    name: '荷兰'
                },
                jieshao: '纯正的黄蜜樱桃，皮薄 甜美美的颜色绚烂整个樱桃🍒季节 好看'
            }, {
                src: '../Sfruit/Images/415323767774883523.jpg',
                name: '无籽青柠檬',
                kind: 'banana',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 4,
                    name: '美国'
                },
                jieshao: '【夏日伴侣】泰国无籽青柠檬正宗泰国青柠檬，柠檬中的优质产品，本品皮薄多汁，气味清香，是茶餐厅、冷饮店不可或缺的原料；是美容美白，夏季解暑的必备良品；不打蜡，每个都经过精挑细选才发货一斤约7个。'
            }, {
                src: '../Sfruit/Images/Kiwi.jpg',
                name: '猕猴桃',
                kind: 'Kiwi',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 1,
                    name: '中国'
                },
                jieshao: '这是猕猴桃。'
            }, {
                src: '../Sfruit/Images/Kiwi.jpg',
                name: '猕猴桃',
                kind: 'Kiwi',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 2,
                    name: '越南'
                },
                jieshao: '这是猕猴桃。'
            }, {
                src: '../Sfruit/Images/Kiwi.jpg',
                name: '猕猴桃',
                kind: 'Kiwi',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 3,
                    name: '荷兰'
                },
                jieshao: '这是猕猴桃。'
            }, {
                src: '../Sfruit/Images/Kiwi.jpg',
                name: '猕猴桃',
                kind: 'Kiwi',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 4,
                    name: '美国'
                },
                jieshao: '这是猕猴桃。'
            }, {
                src: '../Sfruit/Images/Strawberry.jpg',
                name: '草莓',
                kind: 'Strawberry',
                price: 5,
                shopper: {
                    id: 'shopper1',
                    name: '商家1'
                },
                country: {
                    id: 1,
                    name: '中国'
                },
                jieshao: '这是草莓。'
            }, {
                src: '../Sfruit/Images/Strawberry.jpg',
                name: '草莓',
                kind: 'Strawberry',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 2,
                    name: '越南'
                },
                jieshao: '这是草莓。'
            }, {
                src: '../Sfruit/Images/Strawberry.jpg',
                name: '草莓',
                kind: 'Strawberry',
                price: 5,
                shopper: {
                    id: 'shopper3',
                    name: '商家3'
                },
                country: {
                    id: 3,
                    name: '荷兰'
                },
                jieshao: '这是草莓。'
            }, {
                src: '../Sfruit/Images/Strawberry.jpg',
                name: '草莓',
                kind: 'Strawberry',
                price: 5,
                shopper: {
                    id: 'shopper4',
                    name: '商家4'
                },
                country: {
                    id: 4,
                    name: '美国'
                },
                jieshao: '这是草莓。'
            }, {
                src: '../Sfruit/Images/Strawberry.jpg',
                name: '草莓',
                kind: 'Strawberry',
                price: 5,
                shopper: {
                    id: 'shopper3',
                    name: '商家3'
                },
                country: {
                    id: 4,
                    name: '美国'
                },
                jieshao: '这是草莓。'
            }, {
                src: '../Sfruit/Images/apple.jpg',
                name: '苹果',
                kind: 'apple',
                price: 5,
                shopper: {
                    id: 'shopper1',
                    name: '商家2'
                },
                country: {
                    id: 1,
                    name: '中国'
                },
                jieshao: '这是苹果。'
            }, {
                src: '../Sfruit/Images/apple.jpg',
                name: '苹果',
                kind: 'apple',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 2,
                    name: '越南'
                },
                jieshao: '这是苹果。'
            }, {
                src: '../Sfruit/Images/apple.jpg',
                name: '苹果',
                kind: 'apple',
                price: 5,
                shopper: {
                    id: 'shopper3',
                    name: '商家3'
                },
                country: {
                    id: 3,
                    name: '荷兰'
                },
                jieshao: '这是苹果。'
            }, {
                src: '../Sfruit/Images/apple.jpg',
                name: '苹果',
                kind: 'apple',
                price: 5,
                shopper: {
                    id: 'shopper4',
                    name: '商家4'
                },
                country: {
                    id: 4,
                    name: '美国'
                },
                jieshao: '这是苹果。'
            }, {
                src: '../Sfruit/Images/apricot.jpg',
                name: '杏子',
                kind: 'apricot',
                price: 5,
                shopper: {
                    id: 'shopper1',
                    name: '商家1'
                },
                country: {
                    id: 1,
                    name: '中国'
                },
                jieshao: '这是杏子。'
            }, {
                src: '../Sfruit/Images/apricot.jpg',
                name: '杏子',
                kind: 'apricot',
                price: 5,
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 2,
                    name: '越南'
                },
                jieshao: '这是杏子。'
            }, {
                src: '../Sfruit/Images/apricot.jpg',
                name: '杏子',
                kind: 'apricot',
                price: 5,
                shopper: {
                    id: 'shopper3',
                    name: '商家3'
                },
                country: {
                    id: 3,
                    name: '荷兰'
                },
                jieshao: '这是杏子。'
            }, {
                src: '../Sfruit/Images/apricot.jpg',
                name: '杏子',
                kind: 'apricot',
                price: 5,
                shopper: {
                    id: 'shopper4',
                    name: '商家4'
                },
                country: {
                    id: 4,
                    name: '美国'
                },
                jieshao: '这是杏子。'
            }
        ]
    },
    methods: {
        chosefruit: function(inf) {
            var id = inf.id;
            var index = inf.src.indexOf("Image", 0);
            var string = inf.src.substring(index);
            inf.src = '../' + string;
            var url = 'Orders/details.html?id=' + id;
            var strFruit = JSON.stringify(inf);
            localStorage.setItem('key', strFruit);
            window.location.href = url;
        },
        country: function(country) {
            this.fruits = window.fruits.filter(function(fruit) {
                return fruit != null;
            })
            this.fruits = this.fruits.filter(function(fruit) {
                return fruit.country.id == country.id;
            })
        },
        shopper: function(shopper) {
            this.fruits = window.fruits.filter(function(fruit) {
                return fruit != null;
            })
            this.fruits = this.fruits.filter(function(fruit) {
                return fruit.shopper.id == shopper.id;
            })
        },
        kind: function(kind) {
            this.fruits = window.fruits.filter(function(fruit) {
                return fruit != null;
            })
            this.fruits = this.fruits.filter(function(fruit) {
                return fruit.kind == kind.kind;
            })
        }
    }
})
var fruits = fruit.fruits;

function doSubmitForm() {
    var username = $('#username');
    var pwd = $('#password');
    var id = 0;
    if (!new RegExp(/\w{3,10}/).test(username.val())) {
        alert('error name');
        return false;
    }
    if (!new RegExp(/\S{6,20}/).test(pwd.val())) {
        alert('error password');
        return false;
    }
    localStorage.setItem('id', '1');
    window.location.href = '../index.html?islogin=' + id;
}