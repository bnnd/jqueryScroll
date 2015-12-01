//demo:http://www.mafengwo.cn/i/3519935.html
$(function() {
//添加图片
var div=$("img[data-src]");
div.each(function(i,n){
var obj = $(n).attr("data-src").replace("!730x0.jpg","");
$("body").append("<img class=\"placeholder\" src=\"\">");
$('.placeholder').eq(i).attr('src',obj);
 //css样式
$('.placeholder').css({ display:'block',position:'relative',});
$('.placeholder').eq(i).load(function(){
var toLeft=($(document).width()-$('.placeholder').eq(i).width())/2;
$('.placeholder').eq(i).css("left",toLeft)
});
});
//定时器
setTimeout(function (){
$('body').children().not('.placeholder') .remove();
$('body').animate({scrollTop:0}, 1);
var docHeight = $(document).height();
var iTime = $('img').size();
$('body').animate({scrollTop:docHeight}, 5*iTime*1000, 'linear');
},6000);
});
