/**
 * 判断是否移动端，
 * 如果是则跳转到移动端URL地址，如果不是则跳转到电脑端URL地址
 * @param url_m 移动端地址
 * @param url_pc 电脑端地址
 * @param m_flag 移动端标记 如：/m/ /wap/ /mobile/ /weixin/等
 *
 * API：
 * browserRedirect("移动页面地址","电脑页面地址","移动端标记");
 *
 * 备注：
 * 如果 url_m url_pc使用的是相对路径，注意在移动端和电脑端的路径的不同。
 *
 */

function browserRedirect(url_m,url_pc,m_flag) {
    //只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        if(window.location.href.indexOf(m_flag) == -1)
        window.location.replace(url_m);
    }else {
        if(window.location.href.indexOf(m_flag) !== -1)
        window.location.replace(url_pc);
    }
}