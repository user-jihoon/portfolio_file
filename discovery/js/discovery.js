$(document).ready(function(){
	// alert("123");
	$(".banner_images").children(".banner_images img:gt(0)").stop().hide();
 	var current = 0;
 	function fadeChange(){
   
 	var next = (current + 1) % 7;
 	$(".banner_images").find("img").eq(current).stop().fadeOut();
 	$(".banner_images").find("img").eq(next).stop().fadeIn().addClass("open").siblings().removeClass("open");
 	$(".indicator li").stop().eq(next).addClass("on").siblings().removeClass("on");
 	
 	
 	 current = next;
 	 // console.log(next);
 	
 }//function fadeChange()
		
var timer = setInterval(fadeChange, 3000);


	
	
	//배너 좌,우 슬라이드 버튼
	var prev = 0;
	

		$(".slideMove_prev").click(function(){
			prev --;
	 		if (prev < 0) {prev=6}
	 		$(".banner_images img").stop().eq(prev).show().siblings().hide();
	 		$(".indicator ul li").eq(prev).addClass("on").siblings().removeClass("on");
	 		current = prev;
	 		console.log(prev);
		});//$(".slideMove_prev").click(function()
		$(".slideMove_right").click(function(){
			prev ++;
	 		if (prev > 6) {prev=0}
	 		$(".banner_images img").stop().eq(prev).show().siblings().hide();
	 		$(".indicator ul li").eq(prev).addClass("on").siblings().removeClass("on");

	 		current = prev;
	 		console.log(prev);
		});//$(".slideMove_prev").click(function()
			
		$(".main_slideMove_btn span").mouseenter(function(){
			clearInterval(timer);	
		}).mouseleave(function(){
			timer = setInterval(fadeChange, 3000);
		});//$(".slideMove_prev").mouseenter(function()


	/*배너 인디게이터*/

		$(".indicator ul li").click(function(){
		var i = $(this).index();
		$(".banner_images img").stop().eq(i).show().siblings().hide();
		$(this).stop().addClass("on").siblings().removeClass("on");
		current=i;

		});
		
		// 배너 인디게이터 마우스 이벤트
		$(".indicator > ul > li").mouseenter(function(){
			clearInterval(timer);
		}).mouseleave(function(){
			timer = setInterval(fadeChange, 3000);
		});

		// 배너 인디게이커 재생,정지 이벤트
		$(".banner_control").click(function(){
			$(this).stop().toggleClass("on");
			if ($(this).hasClass("on")) {
				clearInterval(timer);
			}else{
				timer = setInterval(fadeChange, 3000);
			}
		});
	// $(".slideMove_prev").click(function(){
	// 	var prev = current-1;
	// 	$(".banner_images").find("img").eq(prev).fadeIn().siblings().fadeOut();
	// 	timer = setInterval(fadeChange, 3000);
	// 	prev = current;
	// });

	// header search 클릭 이벤트
	$(".header_left > div > span").click(function(){
		$(".header_left > div > p").addClass("on");
	});
	$(".search_close , .search_closetext").click(function(){
		$(".header_left > div > p").removeClass("on");
	});

/*-------------------------모바일----------------------------*/		
$(".banner_mobile_images").children(".banner_mobile_images img:gt(0)").stop().hide();
 	var current1 = 0;
 	function fadeChange_mobile(){

   
 	var next1 = (current1 + 1) % 7;
 	$(".banner_mobile_images").find("img").eq(current1).stop().fadeOut();
 	$(".banner_mobile_images").find("img").eq(next1).stop().fadeIn().addClass("open").siblings().removeClass("open");
 	$(".mobile_indicator li").stop().eq(next1).addClass("on").siblings().removeClass("on");
 	
 	
 	 current1 = next1;
 	 // console.log(next);
 	
 }//function fadeChange()
		
var timer_mobile = setInterval(fadeChange_mobile, 3000);


	$(".mobile_indicator ul li").click(function(){
		var i = $(this).index();
		$(".banner_mobile_images img").stop().eq(i).show().siblings().hide();
		$(this).stop().addClass("on").siblings().removeClass("on");
		current1=i;

	});



/* 배너 왼,오른쪽 클릭 시 배너 슬라이드*/
 	var num = 0;
 	$(".rolling_left").click(function(){
 		num --;
 		if (num < 0) {num=4}
 		$(".fade img").eq(num).stop().fadeIn().siblings().fadeOut();
 		$(".slidebtn_ul li").eq(num).stop().addClass("css").siblings().removeClass("css");
 	});

 	$(".rolling_right").click(function(){
 		num ++;
 		if (num > 4) {num=0}
 		$(".fade img").eq(num).stop().fadeIn().siblings().fadeOut();
 		$(".slidebtn_ul li").eq(num).stop().addClass("css").siblings().removeClass("css");
 	});
   /* 배너 왼,오른쪽 클릭 시 배너 슬라이드*/
 	var num = 0;
 	$(".article_btn_left").click(function(){
 		num --;
 		if (num < 0) {num=8}
 		$(".article1_slide").eq(num).stop().fadeIn().siblings().fadeOut();
 	});

 	$(".article_btn_right").click(function(){
 		num ++;
 		if (num > 8) {num=0}
 		$(".article1_slide").eq(num).stop().fadeIn().siblings().fadeOut();
 	});



 	// 모바일
 	$(".mobile_open").click(function(){
 		$(".mobile_aside").stop().animate({"left":"0px"},600);

 		//html 스크롤휠 사용 금지
 		$('html, body').css({'overflow': 'hidden', 'height': '100%'});

 	});

 	$(".mobile_close").click(function(){
 		$(".mobile_aside").stop().animate({"left":"-300px"},600);
 		// 사이드바가 활성화 상태인 경우 html 스크롤휠 사용 금지
 		$('html, body').css({'overflow': 'visible', 'height': '100%'});
 		// $(this).css({"display","none"});
 	}); 

 	// 탑 배너
 	$(".top_banner p").click(function(){
 		$(".top_banner").stop().slideUp();
 		$("header").animate({"top":"0px"},300);
 	});

 	// 추석 연휴 배송 안내 배너
 	$(".notice p").click(function(){
 		$(".notice").fadeOut();
 	});

 	$("a").click(function(e){
 		e.preventDefault();
 	});

 	// 사이드바가 활성화 상태인 경우 html 스크롤휠 사용 금지
 // 	$('#wrap').on('scroll touchmove mousewheel', function(event) {
 //  	event.preventDefault();
 // 	 event.stopPropagation();
 // 	 return false;
	// });
	// $('.mobile_close').click('scroll touchmove mousewheel');

});