$(document).ready(function() {
    $("#usercenter").click(function() {
        window.location.href = '../UserCenter/BuyerCenter.html'
    })
    $("#index").click(function() {
        window.location.href = '../index.html'
    })
})
var shoppingcart = new Vue({
    el: "#shoppingcart",
    data: {
        carts: JSON.parse(localStorage.getItem('carts')),
        money: 0,
    },
    methods: {
        decart: function(cart) {
            var index = this.carts.cart.indexOf(cart);
            this.carts.cart.splice(index, 1);
            localStorage.setItem('carts', JSON.stringify(this.carts));
        },
    },
    created: function() {
        var len = this.carts.cart.length;
        var money = 0;
        for (let i = 0; i < len; i++) {
            money += this.carts.cart[i].count * this.carts.cart[i].fruit.price;
        }
        this.money = money;
    }
})
var pay = new Vue({
    el: "#cart_confirm",
    data: {
        money: window.shoppingcart.money,
    },
    methods: {

    }
})