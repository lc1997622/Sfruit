$(document).ready(function() {
    $("#denglu").click(function() {
        window.location.href = "../Sfruit/login/login.html"
    });
    $("#zhuce").click(function() {
        window.location.href = "../Sfruit/login/register.html"
    });
    $("sousuo").click(function() {

    })
    $("#shopper").click(function() {
        $('#shopper a:last').tab('show')
    })
    $("#shop").click(function() {
        $('#shopper a:last').tab('hide')
    })
});