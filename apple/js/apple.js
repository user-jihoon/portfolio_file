$(document).ready(function(){
	// alert("123");
	$(".footer_nav > ul > li").addClass("arrow");

	var section_bottom = $(document).height()-$(window).height()-$(window).scrollTop();

	console.log(section_bottom);

	// $("footer").css({top:section_bottom+"px"});

	// var footer_ul_li = $("footer > ul > li");

	// 모바일 버전 햄버거 버튼
	$(".nav_hamburger").click(function(){
		$(this).stop().toggleClass("on");

		if ($(this).hasClass("on")) {
			$(".mobile_nav").stop().slideDown();
			$(".nav_basket").stop().addClass("hide");
			
			$(".nav_basket").stop().removeClass("on");
			$(".shopping_basket").stop().css({display:"none"});
		}else{
			$(".mobile_nav").stop().slideUp();
			$(".nav_basket").stop().removeClass("hide");
		}
	});

	// 네비게이션 search 클릭 이벤트
	$(".search").click(function(){
		$(".search_input").stop().addClass("on");
		$(".fast_link").stop().addClass("on");
		$(".nav_basket").stop().removeClass("on");
		$(".shopping_basket").stop().hide();
	});
	$(".search_close").click(function(){
		$(".search_input").stop().removeClass("on");
		$(".fast_link").stop().removeClass("on");
	});

	// 네비게이션 장바구니 클릭 이벤트
	$(".nav_basket").click(function(){
		$(this).stop().toggleClass("on");

		if ($(this).hasClass("on")) {
			$(".shopping_basket").stop().slideDown();
		}else{
			$(".shopping_basket").stop().slideUp();
		}
	});


	// 5가지 상큼한 마감
	var timer = setInterval(color_fade,2000),
		$color = $(".five_color_iphone12 > ul > li"),
		color_length = $color.length,
		currentindex = 0;

		console.log(color_length);

	function color_fade(){
		var next_index = (currentindex+1)%color_length;

		$color.eq(currentindex).fadeOut();
		$color.eq(next_index).fadeIn();

		currentindex = next_index;

		if (next_index == 0) {
			$(".color_text").stop().css({color:"#3948b1"});
			// $(".five_color_iphone12").stop().css({background:"#aecbd9"});
		}else if (next_index == 1) {
			$(".color_text").stop().css({color:"#50976a"});
			// $(".five_color_iphone12").stop().css({background:"#e2f4de"});
		}else if (next_index == 2) {
			$(".color_text").stop().css({color:"#da463c"});
			// $(".five_color_iphone12").stop().css({background:"#ff9e9d"});
		}else if (next_index == 3) {
			$(".color_text").stop().css({color:"#ff784b"});
			// $(".five_color_iphone12").stop().css({background:"#fcf6f0"});
		}else if (next_index == 4) {
			$(".color_text").stop().css({color:"#1d1d1f"});
			// $(".five_color_iphone12").stop().css({background:"#9c99a4"});
		}
		
	}


	var music_timer = setInterval(airpods_max_color,2000),
		$airpods_max = $(".airpobs_max > ul > li"),
	    airpobs_max_length = $airpods_max.length,
	    airpobs_max_currentindex = 0;
	// music.html에 메인 article 헤드셋 페이드 이벤트
	function airpods_max_color(){
		var airpods_max_next_index = (airpobs_max_currentindex+1)%airpobs_max_length;

		$airpods_max.eq(airpobs_max_currentindex).fadeOut();
		$airpods_max.eq(airpods_max_next_index).fadeIn();

		airpobs_max_currentindex = airpods_max_next_index;
		
	}

	// 고객지원 html --> 메인 article 지원 검색 click 이벤트
	$(".support > div:nth-of-type(2) > div > p > input").click(function(){
		$(".support > div:nth-of-type(2) > div > ul").stop().addClass("on");

	});
	// 고객지원 html --> 메인 article 지원 검색 blur 이벤트
	$(".support > div:nth-of-type(2) > div > p > input").blur(function(){
		$(".support > div:nth-of-type(2) > div > ul").stop().removeClass("on");
		// $("body").addClass("on");
	});



	// 푸터 네비게이션 slide이벤트
	$(".footer_nav > ul > li").click(function(){
		$(this).stop().toggleClass("on");

		if ($(this).hasClass("on")) {
			$(this).stop().siblings().removeClass("on");
			$(this).stop().find(".footer_sub_ul").slideDown();
			$(this).stop().siblings().find(".footer_sub_ul").slideUp();

			// <script src="js/jquery-animate-css-rotate-scale.js"></script> 연결해서 사용
			$(this).stop().find("span").animate({rotate:"180deg"});
			$(this).stop().siblings().find("span").animate({rotate:"0deg"});
		}else{
			$(this).stop().find(".footer_sub_ul").slideUp();

			// <script src="js/jquery-animate-css-rotate-scale.js"></script> 연결해서 사용	
			$(this).stop().find("span").animate({rotate:"0deg"});
		}
	});
});