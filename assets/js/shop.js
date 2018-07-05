$(document).ready(function() {
    $("#to_cart").click(function() {
        add();
        window.location.href = 'shoppintcart.html';
    })
    $("#title_details").click(function() {
        window.location.href = '../index.html'
    })
    $("#join_cart").click(function() {
        add();
    })
})

function add() {
    var dong = {
        fruit: detail.fruit,
        count: detail.count,
    }

    var carts = JSON.parse(localStorage.getItem('carts'));
    if (carts == null || carts.cart.length == 0) {
        carts = {
            cart: [dong]
        }
    } else {
        var length = carts.cart.length;
        for (let i = 0; i < length; i++) {
            if (carts.cart[i].fruit.id == dong.fruit.id) {
                carts.cart[i].count += dong.count;
                break;
            } else if (i == length - 1) {
                carts.cart[length] = dong;
            }
        }
    }
    var strCart = JSON.stringify(carts);
    localStorage.setItem('carts', strCart)
}

var detail = new Vue({
    el: '#details_content',
    data: {
        fruit: JSON.parse(localStorage.getItem('key')),
        count: 1,
    },
})