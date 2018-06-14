$(document).ready(function() {
    $("#denglu").click(function() {
        window.location.href = "../Sfruit/login/login.html"
    });
    $("#zhuce").click(function() {
        window.location.href = "../Sfruit/login/register.html"
    });
    $("#shopper").click(function() {
        $('#shopper a:last').tab('show');

    })
});
var shoppers = new Vue({
    el: '#shopper',
    data: {
        shoppers: [{
                name: '商家1',
                id: 1,
            },
            {
                name: '商家2',
                id: 2,
            },
            {
                name: '商家3',
                id: 3,
            },
            {
                name: '商家4',
                id: 4,
            }
        ]
    },
})

var kind = new Vue({
    el: '#kinds',
    data: {
        kinds: [{
                name: '苹果',
            },
            {
                name: '香蕉',
            },
            {
                name: '荔枝',
            },
            {
                name: '樱桃',
            },
            {
                name: '杏子',
            }
        ]
    }
})

var country = new Vue({
    el: '#country',
    data: {
        countrys: [{
            name: '中国'
        }, {
            name: '越南'
        }, {
            name: '荷兰'
        }, {
            name: '美国'
        }]
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
                shopper: 'shopper1',
                country: 'china',
                jieshao: '这是香蕉。'
            },
            {
                id: 2,
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: 'shopper2',
                country: 'Vietnam',
                jieshao: '这是香蕉。'
            },
            {
                id: 3,
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: 'shopper3',
                country: 'Netherlands',
                jieshao: '这是香蕉。'
            },
            {
                id: 4,
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: 'shopper4',
                country: 'USA',
                jieshao: '这是香蕉。'
            },
            {
                id: 5,
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: 'shopper1',
                country: 'china',
                jieshao: '这是香蕉。'
            },
            {
                id: 6,
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: 'shopper2',
                country: 'china',
                jieshao: '这是香蕉。'
            },
            {
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: 'shopper3',
                country: 'china',
                jieshao: '这是香蕉。'
            }, {
                src: '../Sfruit/Images/banana.jpg',
                name: '香蕉',
                kind: 'banana',
                shopper: 'shopper4',
                country: 'china',
                jieshao: '这是香蕉。'
            }, {
                src: '../Sfruit/Images/Kiwi.jpg',
                name: '猕猴桃',
                kind: 'Kiwi',
                shopper: 'shopper1',
                country: 'china',
                jieshao: '这是猕猴桃。'
            }, {
                src: '../Sfruit/Images/Kiwi.jpg',
                name: '猕猴桃',
                kind: 'Kiwi',
                shopper: 'shopper1',
                country: 'china',
                jieshao: '这是猕猴桃。'
            }, {
                src: '../Sfruit/Images/Kiwi.jpg',
                name: '猕猴桃',
                kind: 'Kiwi',
                shopper: 'shopper1',
                country: 'china',
                jieshao: '这是猕猴桃。'
            }, {
                src: '../Sfruit/Images/Kiwi.jpg',
                name: '猕猴桃',
                kind: 'Kiwi',
                shopper: 'shopper1',
                country: 'china',
                jieshao: '这是猕猴桃。'
            }, {
                src: '../Sfruit/Images/Strawberry.jpg',
                name: '草莓',
                kind: 'Strawberry',
                shopper: 'shopper1',
                country: 'china',
                jieshao: '这是草莓。'
            }, {
                src: '../Sfruit/Images/Strawberry.jpg',
                name: '草莓',
                kind: 'Strawberry',
                shopper: 'shopper1',
                country: 'china',
                jieshao: '这是草莓。'
            }, {
                src: '../Sfruit/Images/Strawberry.jpg',
                name: '草莓',
                kind: 'Strawberry',
                shopper: 'shopper1',
                country: 'china',
                jieshao: '这是草莓。'
            }, {
                src: '../Sfruit/Images/Strawberry.jpg',
                name: '草莓',
                kind: 'Strawberry',
                shopper: 'shopper1',
                country: 'china',
                jieshao: '这是草莓。'
            }, {
                src: '../Sfruit/Images/Strawberry.jpg',
                name: '草莓',
                kind: 'Strawberry',
                shopper: 'shopper1',
                country: 'china',
                jieshao: '这是草莓。'
            }
        ]
    },
    methods: {
        chosefruit: function(inf) {

        }
    }
})