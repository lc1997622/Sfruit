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
    return true;
}