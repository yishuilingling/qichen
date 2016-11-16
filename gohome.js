// 活动规则
$('.center .c2 span').click(function  () {
	$('.mask').show();
	$('.explain').show();
	$('.explain .blue').click(function  () {
		$('.mask').hide();
		$('.explain').hide();
	})
})

// 提交

$('.center .c2 .blue').click(function  () {
	$('.mask').show();
	$('.imgss').hide();
	var reg=/^1[0-9]{10}$/g;
	if(reg.test($('.ipt').val())&&($('.ipt2').val()!='')){		
		$('.sub').show();
		$('.sub .blue').click(function  () {
			window.open('index.html','_self');
		})
	}else{
		$('.fail').show();
		$('.fail .blue').eq(0).click(function  () {
			$('.ipt').val('');
			$('.ipt2').val('');
			$('.mask').hide();
			$('.imgss').show();
			$('.fail').hide();
		})
		$('.fail .blue').eq(1).click(function  () {
			window.open('index.html','_self');			
		})
	}
})

// 返回
$('.top li').eq(1).click(function  () {
	window.open('result.html','_self');
})