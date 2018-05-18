/**
 * ajaxInclude方法
 * Created by 幻想家 on 2015/7/2.
 * 云端备份唯一地址：github.com/myfancy
 * 本地备份唯一地址：MY_WEB_DEMO\MyFrontFrame\JS-Plugin
 *
 * 版本更新：2016.4.22（优化错误显示 if(statusTxt=="error") {……}//这里）
 *
 * 版本更新：201509230909（采用jquery插件的方式写）
 * 使用方法：
 <script src="js/jquery.ajaxInclude.js"></script>
 <script id="ieAlert" type="text/javascript">
 $('#ieAlert').ajaxInclude('inc_ieAlert.html');
 </script>
 *
 */

;

(function($) {
    $.fn.ajaxInclude = function(includeFile) {
        var scriptID = $(this).attr('id');
        //通过js创建外层div，位置是当前script节点前方，所以一个页面中多次引用时需要使用不同的id
        $(this).before('<div id='+scriptID+'-tempWrap'+'></div>');
        //在创建的div中，通过ajax load()引入指定html文件
        //添加回调函数，处理一些问题并捕捉异常
        $("#"+scriptID+'-tempWrap').load(includeFile,function(responseTxt,statusTxt,xhr){
            if(statusTxt=="success") {
                //可以在这里删除有碍观瞻的自身script节点，表担心，不影响函数执行
                $(this).next().remove();
                //没错，这就是传说中的去壳大法！
                $(this).children().unwrap();
            }else if(statusTxt=="error") {
                $(this).html("<div style='width: 100%;font-size: 25px;text-align: center'>" +
                    "<h1 style='font-size: 25px;font-weight: bold'>" + scriptID+ "组件加载失败！" +"</h1>"+
                    "<span style='font-size: 10px'>" + xhr.statusText+ "</span>"+
                    "</div>");
                console.log(scriptID+ "组件加载失败！——"+xhr.status + "：" + xhr.statusText);
            }
        });
    };
})(jQuery);