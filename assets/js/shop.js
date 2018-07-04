$(document).ready(function() {
    var id = window.location.href.split("=")[1];
    $("#to_cart").click(function() {
        window.location.href = 'shoppintcart.html';
    })
    $("#title_details").click(function() {
        window.location.href = '../index.html'
    })
})

var detail = new Vue({
    el: '#details_content',
    data: {
        fruit: JSON.parse(localStorage.getItem('key')),
        count: 1,
    }
})