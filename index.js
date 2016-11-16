// 屏幕自适应
function resets () {
	var htmls=document.getElementsByTagName('html')[0];
	var ww=document.documentElement.clientWidth;
	var scale=100/425;
	htmls.style.fontSize=scale*ww+'px';
}
resets();
window.onresize=function  () {
	resets();
}

// 我在车展
$('.c2 p').eq(0).click(function  () {
	$('.explain').hide();
	$('.confirm').show();
})

// 不在现场
$('.c2 p').eq(1).click(function  () {
	$('.center .jzh').hide();
	$('.center .c2').hide();
	$('.center .draw').show();
	setCookie('spot','no',30);
})

// 活动说明
$('.c2 span').click(function  () {
	$('.explain').show();
	$('.mask').show();	
})

// 确认是否在现场
$('.explain .blue').click(function  () {
	$('.explain').hide();
	$('.confirm').show();
})


// 确认在现场
$('.confirm .blue').eq(0).click(function  () {
	$('.center .jzh').hide();
	$('.center .c2').hide();
	$('.confirm').hide();
	$('.mask').hide();
	$('.center .draw').show();
	setCookie('spot','yes',30);
	// 使用spot来判断是否在现场
})

// 重新选择
$('.confirm .blue').eq(1).click(function  () {
	$('.confirm').hide();
	$('.mask').hide();
})

function setCookie (key,value,days) {//创建cookie
	var date=new Date();
	date.setDate(date.getDate()+days);//设置有效期，以天为单位
	document.cookie=key+"="+escape(value)+"; expires="+date;//secape进行编码
}

$('.draw li').click(function  () {
	window.open('result.html','_self');
})

// 返回
$('.top li').eq(1).click(function  () {
	window.open('index.html','_self');
})