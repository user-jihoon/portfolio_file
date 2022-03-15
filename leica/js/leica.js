$(document).ready(function(){

	if ($(this).width() < 770 && $(this).width()>505) {
		$("body").stop().removeClass().addClass("tablet");
	}else if ($(this).width() < 501) {
		$("body").stop().removeClass().addClass("mobile");
	}else{
		$("body").stop().removeClass().addClass("pc");
	}



	$(window).on("load",function(){
		var article1_p_img = $("article:nth-of-type(1) img").height();
		var	article2_p_height = $("article:nth-of-type(2) p").height();
		var	article3_p_height = $("article:nth-of-type(3) li").height();
		var	article4_p_height = $("article:nth-of-type(4) p").height();

		$("article:nth-of-type(1) > div").stop().css({height:article1_p_img+"px"});	
		$("article:nth-of-type(2) > div").stop().css({height:article2_p_height+"px"});
		$("article:nth-of-type(3) > div").stop().css({height:article3_p_height+"px"});
		$("article:nth-of-type(4) > div").stop().css({height:article4_p_height+"px"});


		// 2021.09.13 // 2021.09.13 // 2021.09.13 // 2021.09.13 
		var article1_p_img = $("article:nth-of-type(1) > div > p > img").height();
		var $mobile_div = $("article:nth-of-type(1) > div > p > img");

//21.09.14 //21.09.14 //21.09.14 //21.09.14 //21.09.14
		if ($("body").hasClass("pc")){
			$(".main_banner_img1").attr("src", "images/slide_1.jpg");
			$(".main_banner_img2").attr("src", "images/slide_2.jpg");
			$(".main_banner_img3").attr("src", "images/slide_3.jpg");
			$(".main_banner_img4").attr("src", "images/slide_4.jpg");
		}else if ($("body").hasClass("tablet")) {
			$(".main_banner_img1").attr("src", "images/slide_1.jpg");
			$(".main_banner_img2").attr("src", "images/slide_2.jpg");
			$(".main_banner_img3").attr("src", "images/slide_3.jpg");
			$(".main_banner_img4").attr("src", "images/slide_4.jpg");
		}else if ($("body").hasClass("mobile")) {
			$(".main_banner_img1").attr("src", "images/Top_main_mo_5.jpg");
			$(".main_banner_img2").attr("src", "images/Top_main_mo_4.jpg");
			$(".main_banner_img3").attr("src", "images/Top_main_mo_3.jpg");
			$(".main_banner_img4").attr("src", "images/Top_main_mo_2.jpg");

			$("article:nth-of-type(2)").stop().addClass("on");
			$("article:nth-of-type(1) > div").stop().css({height:"530px"});
			$("article:nth-of-type(2) > div").stop().css({height:"294px"});
		}

	});
	
	$("article:nth-of-type(1) > div").height($("article:nth-of-type(1) img").height());
	$("article:nth-of-type(2) > div").height($("article:nth-of-type(2) img").height());
	$("article:nth-of-type(3) > div").height($("article:nth-of-type(3) img").height());
	$("article:nth-of-type(4) > div").height($("article:nth-of-type(4) img").height());


	console.log($("article:nth-of-type(2) p").height());

	
	$(window).resize(function(){

		$("article:nth-of-type(1) > div").height($("article:nth-of-type(1) img").height());
		$("article:nth-of-type(2) > div").height($("article:nth-of-type(2) img").height());
		$("article:nth-of-type(3) > div").height($("article:nth-of-type(3) img").height());
		$("article:nth-of-type(4) > div").height($("article:nth-of-type(4) img").height());


		var $mobile_div = $("article:nth-of-type(1) > div > p > img");
		// 리사이즈 시 pc,tablet,mobile 클라스 추가
		if ($(this).width() < 770 && $(this).width()>505) {
			$("body").stop().removeClass().addClass("tablet");

// 방법 1. each이벤트로 변경 이미지 분배
			// $("article:nth-of-type(1) > div > p > img").each(function(i){

			// 	var $mobile_div = $("article:nth-of-type(1) > div > p > img"),
			// 		index = i+1;
			// 		$mobile_div.stop().eq(i).attr("src", "images/slide_"+index+".jpg");

					
			// });

// 방법 2. 각 img태그 별 class을 넣어 변경 이미지 분배

//결론 방법1번은 리사이즈 할 때 마다 이미지가 계속해서 변경이 되어, 이미지 슬라이드랑 	반비례로 가동 했기 때문에. 어쩔 수 없시 방법 2번으로 각각 분배를 할 수 밖에 없었다.
			$(".main_banner_img1").attr("src", "images/slide_1.jpg");
			$(".main_banner_img2").attr("src", "images/slide_2.jpg");
			$(".main_banner_img3").attr("src", "images/slide_3.jpg");
			$(".main_banner_img4").attr("src", "images/slide_4.jpg");
			
		}else if ($(this).width() < 501) {
			$("body").stop().removeClass().addClass("mobile");			
			$("article:nth-of-type(1) > div").stop().css({height:"530px"});
			$("article:nth-of-type(2)").stop().addClass("on");
			$("article:nth-of-type(2) > div").stop().css({height:"294px"});

			$(".main_banner_img1").attr("src", "images/Top_main_mo_5.jpg");
			$(".main_banner_img2").attr("src", "images/Top_main_mo_4.jpg");
			$(".main_banner_img3").attr("src", "images/Top_main_mo_3.jpg");
			$(".main_banner_img4").attr("src", "images/Top_main_mo_2.jpg");

		}else{
			$("body").removeClass().addClass("pc");
			$(".main_banner_img1").attr("src", "images/slide_1.jpg");
			$(".main_banner_img2").attr("src", "images/slide_2.jpg");
			$(".main_banner_img3").attr("src", "images/slide_3.jpg");
			$(".main_banner_img4").attr("src", "images/slide_4.jpg");
		}

	});//$(window).resize(function(){
	
	if ($("body").hasClass("mobile")) {
		var article1_p_img = $("article:nth-of-type(1) > div > p > img").height();
		var $mobile_div = $("article:nth-of-type(1) > div > p > img");
		$("article:nth-of-type(1) > div").stop().css({height:"530px"});
		$("article:nth-of-type(2) > div").stop().css({height:"294px"});
		
		$(".main_banner_img1").attr("src", "images/Top_main_mo_5.jpg");
		$(".main_banner_img2").attr("src", "images/Top_main_mo_4.jpg");
		$(".main_banner_img3").attr("src", "images/Top_main_mo_3.jpg");
		$(".main_banner_img4").attr("src", "images/Top_main_mo_2.jpg");

	}
	
 	// 2번째 article p태그 호버 이벤트
 	$("article:nth-of-type(4) > div > p").mouseenter(function(){
 		$(this).stop().addClass("hover");
 	}).mouseleave(function(){
 		$(this).stop().removeClass("hover");
 	});


	// 햄버거 버튼 
	$(".hamburger").click(function(){
		$(this).stop().toggleClass("on");
		if ($(this).hasClass("on")) {
			$(".sub_menu_page").stop().addClass("show");
		}else{
			$(".sub_menu_page").stop().removeClass("show");
		}
	});


	// 서브 페이지
	$(".sub_menu_page > ul > li").mouseenter(function(){
		$(this).stop().siblings().animate({opacity:".5"});
	}).mouseleave(function(){
		$(".sub_menu_page > ul > li").stop().css({opacity:"1"});
	});

	// 로고
	// $("header > h1").mouseenter(function(){
	// 	$(this).stop().addClass("on");
	// }).mouseleave(function(){
	// 	$(this).stop().removeClass("on");
	// });



	// 메인 슬라이드 이벤트
	var banner_length = $(".main_banner div p ").length;

	var timer = setInterval(banner_slide,3500);

	function banner_slide(){
		$(".main_banner > div").stop().animate({left:-100+"%"}, function(){

			$(".main_banner > div > p:first-child").stop().appendTo(".main_banner > div");
			$(".main_banner > div").stop().css({left:0+"%"});
			$(".main_banner > div > p").eq(0).addClass("on").siblings().removeClass("on");

		});

	}
	
	function timeron(){
		var timer = setInterval(banner_slide,3500);
	}
	function timeroff(){
		clearInterval(timer);
	}


	var window_height = $("article:nth-of-type(1)").height();
		article2_top = $("article:nth-of-type(2)").offset().top;
		
	console.log(window_height);

	$(window).scroll(function(){
		var window_scrolltop = $(window).scrollTop();
		console.log(window_scrolltop);
		var article2_top = $("article:nth-of-type(2)").position().top/2*3;
		console.log(article2_top);
		
		if (window_scrolltop > $("article:nth-of-type(1)").height()/2){
			$("header > h1").stop().addClass("on");
			$("article:nth-of-type(2)").stop().addClass("on");
		}else if (window_scrolltop > $("article:nth-of-type(4)").position().top) {
			$("article:nth-of-type(5)").stop().addClass("on");
		}else{
			$("header > h1").stop().removeClass("on");
			// $("article:nth-of-type(1)").stop().removeClass("on");
			// $("article:nth-of-type(2)").stop().removeClass("on");
		}

		if (window_scrolltop > article2_top) {
			$("article:nth-of-type(4)").stop().addClass("on");
		}
		if (window_scrolltop > $("article:nth-of-type(4)").position().top) {
			$("article:nth-of-type(5)").stop().addClass("on");
		}

	});


	var qweq1 = $("article:nth-of-type(4)").position().top;
		console.log(qweq1);




	var qweqwe = $("article:nth-of-type(3) > div > p").eq(0).outerWidth(true);
	console.log(qweqwe);

	$("article:nth-of-type(3) > div").stop().css({overflow:"hidden"});


	

	// article 3번째 - p태그 left값 각각 분배
	// $(".article3 > div > ul >li").each(function(idx){

	// 	var article3_li = $(".article3 > div > ul > li");

	// 	// article3_li[idx].style.left = idx*20+"%";

	// 	if ($("body").hasClass("pc")) {
	// 		article3_li[idx].style.left = idx*20+"%";			
	// 	}

	// 	if ($("body").hasClass("tablet")) {
	// 		article3_li[idx].style.left = idx*25+"%";
	// 	}

	// });

	var article3_timer = setInterval(article3_slide,3500);
	var $article3_li = $(".article3 li");

	function article3_slide(){

		if ($("body").hasClass("pc")) {
		$(".article3 > div > ul").stop().animate({left:-20+"%"}, function(){
			$(".article3 > div > ul > li:first-child").stop().appendTo(".article3 > div > ul");
			$(".article3 > div > ul").stop().css({left:0+"%"});
		});

		}else if ($("body").hasClass("tablet")) {
			$(".article3 > div > ul").stop().animate({left:-25+"%"}, function(){
				$(".article3 > div > ul > li:first-child").stop().appendTo(".article3 > div > ul");
				$(".article3 > div > ul").stop().css({left:0+"%"});
			});		
		}else{
			$(".article3 > div > ul").stop().animate({left:-50+"%"}, function(){
				$(".article3 > div > ul > li:first-child").stop().appendTo(".article3 > div > ul");
				$(".article3 > div > ul").stop().css({left:0+"%"});
			});	
		}
	}
	
	function article3_timeron(){
		var article3_timer = setInterval(article3_slide,3500);
	}
	function article3_timeroff(){
		clearInterval(article3_timer);
	}

	
	// var $article3_li = $("article:nth-of-type(3) > div > ul > li");

	// $article3_li.each(function(idx){
	// 	var $article3_li = $("article:nth-of-type(3) > div > ul > li");

	// });


	// footer 모바일 nav click 이벤트
	$(".mobile_footer_nav > ul > li").click(function(){
		// $(this).stop().addClass("on").siblings().removeClass("on");
		$(this).stop().toggleClass("on");

		if ($(this).hasClass("on")) {

			$(this).stop().find(".footer_sub_ul").slideDown();
			$(this).stop().siblings().removeClass("on").find(".footer_sub_ul").slideUp();
		}else{
			$(this).stop().find(".footer_sub_ul").slideUp();
		}
	});


	if ($(this).width() < 501) {
		$(".main_banner_img1").attr("src", "images/Top_main_mo_5.jpg");
		$(".main_banner_img2").attr("src", "images/Top_main_mo_4.jpg");
		$(".main_banner_img3").attr("src", "images/Top_main_mo_3.jpg");
		$(".main_banner_img4").attr("src", "images/Top_main_mo_2.jpg");
	}else{
		$(".main_banner_img1").attr("src", "images/slide_1.jpg");
		$(".main_banner_img2").attr("src", "images/slide_2.jpg");
		$(".main_banner_img3").attr("src", "images/slide_3.jpg");
		$(".main_banner_img4").attr("src", "images/slide_4.jpg");
	}



});