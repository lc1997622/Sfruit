var fruit = new Vue({
    el: '#fruits',
    data: {
        fruits: [{
                id: 1,
                src: '../Images/482065238502496930.jpg',
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
                src: '../Images/917593610264255430.jpg',
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
                src: '../Images/33558913801732740.jpg',
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
                src: '../Images/256660426650346801.jpg',
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
                src: '../Images/659479878259961007.jpg',
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
                src: '../Images/823185833255645548.jpg',
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
                src: '../Images/198765557630413770.jpg',
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
                src: '../Images/415323767774883523.jpg',
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
                src: '../Images/Kiwi.jpg',
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
                src: '../Images/Kiwi.jpg',
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
                src: '../Images/Kiwi.jpg',
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
                src: '../Images/Kiwi.jpg',
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
                src: '../Images/Strawberry.jpg',
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
                src: '../Images/Strawberry.jpg',
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
                src: '../Images/Strawberry.jpg',
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
                src: '../Images/Strawberry.jpg',
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
                src: '../Images/Strawberry.jpg',
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
                src: '../Images/apple.jpg',
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
                src: '../Images/apple.jpg',
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
                src: '../Images/apple.jpg',
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
                src: '../Images/apple.jpg',
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
                src: '../Images/apricot.jpg',
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
                src: '../Images/apricot.jpg',
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
                src: '../Images/apricot.jpg',
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
                src: '../Images/apricot.jpg',
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
    methods: {}
})