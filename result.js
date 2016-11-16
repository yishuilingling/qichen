function getCookie (key) {//获取cookie
	var arr=document.cookie.split('; ');
	for (var i = 0; i < arr.length; i++) {
		var arr1=arr[i].split('=');//分割每一组值
		if(arr1[0]==key){
			return unescape(arr1[1]);//解码
		}
	};
	return false;
}

function setCookie (key,value,days) {//创建cookie
	var date=new Date();
	date.setDate(date.getDate()+days);//设置有效期，以天为单位
	document.cookie=key+"="+escape(value)+"; expires="+date;//secape进行编码
}

// 真正抽奖
if(getCookie('user')=='zhs'){
	$('.c1').show();
	$('.c1 .sorry').hide();
}else{
	setCookie('user','zhs',30);
	var sjs=Math.random();
	if(getCookie('spot')=='yes'){
		if(sjs>0.95){
			$('.c2').show();
			// 分享
			$('.top li').eq(3).click(function  () {
				console.log(1111)
				$('.mask').show();
				$('.hehe img').show();

				$('.hehe').click(function  () {
					$('.hehe img').hide();
					$('.mask').hide();
				})
			})

			// 开回家
			$('.c2 .blue').click(function  () {
				window.open('gohome.html','_self');
			})

			// 随机数
			for (var i = 0; i < 3; i++) {
				var num=Math.floor(Math.random()*10);
				$('.c2 .box ul li').eq(i+2).html(num);
			};
		}else{
			$('.center .c1').show();
			$('.c1 .have').hide();
		}
	}else{
		if(sjs>0.2){
			$('.center .c1').show();
			$('.c1 .have').hide();
		}else{
			$('.c3').show();
			if(sjs>0.1){
				$('.c3 span').html(10);
				$('.c3 .imgs').get(0).src='images/y10.png';
			}
			else if(sjs>0.05){
				$('.c3 span').html(20);
				$('.c3 .imgs').get(0).src='images/y20.png';
			}else{
				$('.c3 span').html(30);
				$('.c3 .imgs').get(0).src='images/y30.png';
			}
		} 
	}
}	

// 抽奖测试
// if(getCookie('user')=='zhs'){
// 	$('.c1').show();
// 	$('.c1 .sorry').hide();
// }else{
	// setCookie('user','zhs',30);
	// var sjs=Math.random();
	// if(getCookie('spot')=='yes'){
	// 	if(sjs>0.5){
	// 		$('.c2').show();
	// 		// 分享
	// 		$('.top li').eq(3).click(function  () {
	// 			console.log(1111)
	// 			$('.mask').show();
	// 			$('.hehe img').show();

	// 			$('.hehe').click(function  () {
	// 				$('.hehe img').hide();
	// 				$('.mask').hide();
	// 			})
	// 		})

	// 		// 开回家
	// 		$('.c2 .blue').click(function  () {
	// 			window.open('gohome.html','_self');
	// 		})

	// 		// 随机数
	// 		for (var i = 0; i < 3; i++) {
	// 			var num=Math.floor(Math.random()*10);
	// 			$('.c2 .box ul li').eq(i+2).html(num);
	// 		};
	// 	}else{
	// 		$('.center .c1').show();
	// 		$('.c1 .have').hide();
	// 	}
	// }else{
	// 	if(sjs>0.8){
	// 		$('.center .c1').show();
	// 		$('.c1 .have').hide();
	// 	}else{
	// 		$('.c3').show();
	// 		if(sjs>0.6){
	// 			$('.c3 span').html(10);
	// 			$('.c3 .imgs').get(0).src='images/y10.png';
	// 		}
	// 		else if(sjs>0.4){
	// 			$('.c3 span').html(20);
	// 			$('.c3 .imgs').get(0).src='images/y20.png';
	// 		}else{
	// 			$('.c3 span').html(30);
	// 			$('.c3 .imgs').get(0).src='images/y30.png';
	// 		}
	// 	} 
	// }
// }	

// 返回
$('.top li').eq(1).click(function  () {
	window.open('index.html','_self');
})

// 提交
$('.c3 .blue').click(function  () {
	$('.mask').show();
	$('.imgss').hide();
	var reg=/^1[0-9]{10}$/g;
	if(reg.test($('.ipt').val())){		
		$('.sub').show();
		$('.sub .blue').click(function  () {
			window.open('index.html','_self');
		})
	}else{
		$('.fail').show();
		$('.fail .blue').eq(0).click(function  () {
			$('.ipt').val('');
			$('.mask').hide();
			$('.imgss').show();
			$('.fail').hide();
		})
		$('.fail .blue').eq(1).click(function  () {
			window.open('index.html','_self');			
		})
	}
})

