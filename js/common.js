/**
 * 更简单的写法
 * 只判断ie文档模式
 */
(function(){
    if(document.documentMode){
        ieversion = "ie"+document.documentMode;
        document.getElementsByTagName("html")[0].className = ieversion;
    }else {
        document.getElementsByTagName("html")[0].className = "w3c";
    }
})();



//详情 选择数量
$(function(){
    $(".numberWithBtn-r").click(function(){
        var num = parseInt($(this).siblings('.numberWithBtn-m').val());
        var jiage = parseInt($(this).siblings('#jiage').val());
//            var total = $("#total").text();
//            total = parseInt(total.substr(1,total.length-1))+jiage;
//            total = "¥"+total;
        if(num<1000){
            $(this).siblings('.numberWithBtn-m').val(num+1);
//                $("#total").text(total);
        }else{
            return false;
        }
    });
    $(".numberWithBtn-l").click(function(){
        var num = parseInt($(this).siblings('.numberWithBtn-m').val());
        var jiage = parseInt($(this).siblings('#jiage').val());
//            var total = $("#total").text();
//            total = parseInt(total.substr(1,total.length-1))-jiage;
//            total = "¥"+total;
        if(num>1){
            $(this).siblings('.numberWithBtn-m').val(num-1);
//                $("#total").text(total);
        }else{
            return false;
        }
    });
});


<!--弹出层-->


