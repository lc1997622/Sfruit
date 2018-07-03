$(document).ready(function() {

    $("#sButtonId").click(function() { //获取select对象  
        var selectedObj = $("#selectId option:selected"); //获取当前selected的值  
        var selected = selectedObj.get(0).value;
        $("#sResult").html("结果:" + selected);
    });

    $("#cButtonId").click(function() { //获取checkBox对象  
        var Check = '';
        var checkedObj = $("[name='checkboxId'][@checked]"); //获取当前checked的value值 如果选中多个则循环  
        checkedObj.each(function() {
            var isCheck = this.value;
            Check += isCheck;
        });
        $("#cResult").html("结果:" + Check);
    });

    $("#rButtonId").click(function() { //获取radio对象  
        var radioObj = $("[name='radioId'][@checked]"); //获取当前checked的value值  
        var radio = radioObj.get(0).value;
        $("#rResult").html("结果:" + radio);
    });

    $("#tButtonId").click(function() { //获取text对象  
        var textObj = $("#textId"); //获取当前text的value值  
        var text = textObj.get(0).value;
        $("#tResult").html("结果:" + text);
    });
});