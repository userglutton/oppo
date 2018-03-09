$(function(){
	/*初始化*/
	var num=$('.box_img ul li a').size();
	var index=0;//自动轮播
	var temp=0;//解决鼠标经无法正常播放
	var timer=null;
	for(var i=1;i<=num;i++){
		$('.box_tab').append("<a href='javascript:void;'></a>");
	}
	$('.box_img ul li').eq(0).show();
	$('.box_tab a').eq(0).addClass('active');

    /*功能部分*/
    //1.经过操作
	$('.box_tab a').mouseover(function(){
		var temp=$(this).index();
		index=temp;
		$(this).addClass('active').siblings().removeClass('active');
		var i=$(this).index();
		$('.box_img ul li').eq(i).stop().fadeIn().siblings().fadeOut();
	});

	//2.自动轮播
	timer=window.setInterval(move,1500);
	function move(){
		index++;
		if(index==num){
			index=0;
		}
		$('.box_img ul li').eq(index).fadeIn().siblings().fadeOut();
	    $('.box_tab a').eq(index).addClass('active').siblings().removeClass('active');
	}
	//鼠标经过图片停止，离开继续
	$('.box_img').hover(function(){
		clearInterval(timer);
	},function(){
		timer=window.setInterval(move,1200);
	});
});