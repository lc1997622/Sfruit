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
    })
    $("#buyer").click(function() {
        window.location.href = "../Sfruit/UserCenter/BuyerCenter.html"
    })
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
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: {
                    id: 'shopper1',
                    name: '商家1'
                },
                country: {
                    id: 1,
                    name: '中国'
                },
                jieshao: '这是香蕉。'
            },
            {
                id: 2,
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 2,
                    name: '越南'
                },
                jieshao: '这是香蕉。'
            },
            {
                id: 3,
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 3,
                    name: '荷兰'
                },
                jieshao: '这是香蕉。'
            },
            {
                id: 4,
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 4,
                    name: '美国'
                },
                jieshao: '这是香蕉。'
            },
            {
                id: 5,
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 1,
                    name: '中国'
                },
                jieshao: '这是香蕉。'
            },
            {
                id: 6,
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: '2',
                    name: '越南'
                },
                jieshao: '这是香蕉。'
            },
            {
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 3,
                    name: '荷兰'
                },
                jieshao: '这是香蕉。'
            }, {
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: {
                    id: 'shopper2',
                    name: '商家2'
                },
                country: {
                    id: 4,
                    name: '美国'
                },
                jieshao: '这是香蕉。'
            }, {
                src: '../Sfruit/Images/Kiwi.jpg',
                name: '猕猴桃',
                kind: 'Kiwi',
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
            console.log(inf);
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
    var pwd = $('#password')
    if (!new RegExp(/\w{3,10}/).test(username.value)) {
        alert('error name');
        return false;
    }
    if (!new RegExp(/\S{6,20}/).test(pwd.value)) {
        alert('error password');
        return false;
    }
    window.denglumodel.isLogin = false;
    window.location.href = "../index.html"
}