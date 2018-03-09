$(function(){
	$(document).scroll(function(){
		var y=$(document).scrollTop();
		if(y>400){
			$("#backTop").fadeIn(500);//显示滑块
		}else{
			$("#backTop").fadeOut(500);//隐藏滑块
		}
	});
	$("#backTop").click(function(){
		var y=$(document).scrollTop();
		var timer=null;
		timer=setInterval(function(){
			y=y-y*0.07;
			if(y<5){
				clearInterval(timer);
				y=0;
			}
			$(document).scrollTop(y);
		},50);
	})
});