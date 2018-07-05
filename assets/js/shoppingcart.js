var shoppingcart = new Vue({
    el: "#shoppingcart",
    data: {
        carts: JSON.parse(localStorage.getItem('carts')).cart,
    },
    methods: {
        decart: function(cart) {
            var index = this.carts.indexOf(cart);
            this.carts.splice(index, 1);
            localStorage.setItem('carts', JSON.stringify(this.carts));
        },

    }
})
var pay = new Vue({
    el: "#cart_confirm",
    data: {
        money: 34.5,
    },
    methods: {

    }
})