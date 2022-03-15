$(document).ready(function(){



	//메인 배너 fade이벤트
	var timer = setInterval(banner_fade,3000),
		current_index = 0,
		banner_length = $(".banner > p").length;

		console.log(banner_length);

	function banner_fade(){
		var next_index = (current_index+1) % banner_length;

		$(".banner > p").eq(current_index).fadeOut();
		$(".banner > p").eq(next_index).fadeIn();

		current_index = next_index;

	}	

	// 배너 로그인 이벤트
	$(".login > p > span").click(function(){
		$(this).stop().addClass("on").siblings().removeClass("on");
	});

	// 메뉴 이벤트
	$(".menu > ul > li").click(function(){
		$(this).stop().addClass("on").siblings().removeClass("on");

		// console.log(menu_text);
		
		if ($(this).hasClass("on")) {
			$(this).stop().find("ul").slideDown();
			$(this).stop().siblings().find("ul").slideUp();
		}else{
			$(this).stop().find("ul").slideUp();
		}
	});
	$(".menu > ul > li > p").click(function(){
		var menu_text = $(this).text();
		$(".choice_menu > span:nth-of-type(1)").text(menu_text);
	});

	// 네비게이션 햄버거메뉴 클릭 이벤트
	$(".header_nav > ul > li").click(function(){

		$(this).stop().addClass("on").siblings().removeClass("on");

		if ($(this).index() == 0) { //메뉴
			$(".banner").stop().fadeOut();
			$(".menu").stop().fadeIn();
			$("section").stop().fadeIn();

			// 모바일
			$(".mobile_youtube").stop().css({display:"none"});
			$(".mobile_banner").stop().css({display:"none"});
			$(".mobile_news").stop().css({display:"none"});

			if ($("body").hasClass("tablet")) {
				$("aside").css({display:"none"});
			}
		}else if ($(this).index() == 1) { //마이페이지
			$("#wrap").css({filter:"brightness(0.5)"});
			$(".my_page_login").stop().addClass("on");
		}
	});

	$(".my_page_close").click(function(){
		$(".my_page_login").removeClass("on");
		$("#wrap").css({filter:"none"});
		$("nav > ul > li").removeClass("on");
	});

	// 메뉴 추가 클릭 이벤트
	$(".add_to_cart").click(function(){
		$("#wrap").css({filter:"brightness(0.5)"});
		$(".my_page_login").stop().addClass("on");
	});
	// $("nav > ul > li:nth-of-type(1)").click(function(){
	// 	$(".banner").stop().fadeOut();
	// 	$(".menu").stop().fadeIn();
	// 	$("section").stop().fadeIn();
	// });



	//메뉴에서 서브메뉴 이벤트
	$(".sub_menu > li").click(function(){
		var sub_menu_text = $(this).text();
		var index = $(this).index();

		console.log(index);

		$(".sub_menu > li").stop().removeClass("on");
		$(this).stop().addClass("on").siblings().removeClass("on");

		$(".choice_menu > span:nth-of-type(2)").text(" "+sub_menu_text);

		$("section > article").stop().eq(index).addClass("on").siblings().removeClass("on");
	});

	//아침메뉴에 서브메뉴 클릭 이벤트
	$(".breakfast_menu > ul > li").click(function(){
		var breakfast_menu_index = $(this).index(),
			index_plus_5 = breakfast_menu_index+6;

		console.log(index_plus_5);

		$("section > article").stop().eq(index_plus_5).addClass("on").siblings().removeClass("on");
	});

	$(window).resize(function(){
		var window_width = $(this).width();
		console.log(window_width);
		if (window_width < 1140 && window_width > 770) {
			$("body").addClass("tablet");
		}else{
			$("body").removeClass();
		}
	});



	// 모바일 버전 // 모바일 버전 // 모바일 버전 // 모바일 버전 // 모바일 버전

	//햄버거 버튼 클릭 후 나오는 사이드 메뉴
	// $(".mobile_hamburger").click(function(){
		

	// });

	//모바일 배너 fade 이벤트
	var mobile_timer = setInterval(mobile_banner_fade,3000),
		mobile_current = 0
		mobile_length = $(".mobile_banner > p").length;

		console.log(banner_length);

	function mobile_banner_fade(){
		var mobile_next_index = (mobile_current+1) % mobile_length;

		$(".mobile_banner > p").eq(mobile_current).fadeOut();
		$(".mobile_banner > p").eq(mobile_next_index).fadeIn();

		mobile_current = mobile_next_index;

	}

	//모바일 햄버거 버튼
	$(".mobile_hamburger").click(function(){
		$(this).stop().toggleClass("on");

		if ($(this).hasClass("on")) {
			$(".mobile_side_menu").stop().animate({left:"0%"},"swing");
		}else{
			$(".mobile_side_menu").stop().animate({left:"-100%"},"swing");
		}
	});

	//모바일 장바구니 버튼
	$(".mobile_basket , .order_inquiry").click(function(){
		$(".my_page_login").stop().addClass("on");
	});

	//햄버거 버튼 클릭 후 사이드메뉴 이벤트
	$(".mobile_side_menu > ul > li").click(function(){
		$(".mobile_hamburger").removeClass("on");
		$(".mobile_side_menu").stop().animate({left:"-100%"},"swing");

		if ($(this).index() == 0) {
			$(".mobile_youtube").stop().hide();
			$(".mobile_banner").stop().hide();
			$(".mobile_news").stop().hide();

			// pc버전
			$(".banner").stop().css({display:"none"});
			$(".header_nav > ul > li:nth-of-type(1)").stop().addClass("on");

			$(".menu").stop().fadeIn();
			$("section").stop().fadeIn();
		}

	});


	//모바일 소식, 로그인 클릭 이벤트
	$(".mobile_news > p > span").click(function(){
		$(this).stop().addClass("on").siblings().removeClass("on");

		if ($(this).index() == 0) {
			$(".news").stop().show();
			$(".mobile_login").stop().hide();
		}else if ($(this).index() == 1) {
			$(".mobile_login").stop().show();
			$(".news").stop().hide();
		}
	});



});