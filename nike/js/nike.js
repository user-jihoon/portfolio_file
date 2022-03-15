$(document).ready(function(){

	if ($(window).width()>=1024){
		$("body").addClass("pc");
	}else if ($(window).width()>=768 && $(window).width()<=1023){
		$("body").addClass("tablet");
	}else{
		$("body").addClass("mobile");
	}

	$(window).resize(function(){
		if ($(window).width()>=1024){
			$("body").removeClass().addClass("pc");
			$("header h1").stop().show();
			$(".hamburger").stop().hide();
			$(".search_btn").stop().hide();
			$("nav").stop().show();

			if ($(".search").hasClass("on")) {
				$("header").stop().css({top:"0px"});
				$(".hamburger").stop().hide();
				$(".search_btn").stop().hide();
			}else{
				$("header").stop().css({top:"30px"});
			}
			$(".menu_mobile").stop().hide();
			$('html, body').css({'overflow': 'visible', 'height': '100%'});
			$("header").stop().css({filter:"unset",background:"#fff"});
			$("section").stop().css({filter:"unset",background:"unset"});
			
		}else if ($(window).width()>=768 && $(window).width()<=1023){
			$("body").removeClass().addClass("tablet");
			$("header").stop().css({top:"0px"});
			$("nav").stop().hide();
			

			if ($(".search").hasClass("on")) {
				$(".hamburger").stop().hide();
				$(".search_btn").stop().hide();
				$("header h1").stop().hide();						
			}else{
				$(".hamburger").stop().show();
				$(".search_btn").stop().show();	
			}
		}else{
			$("body").removeClass().addClass("mobile");
		}

	});


	// 네비게이션
	$(".nav_menu li").mouseenter(function(){
		$(this).stop().addClass("on").siblings().removeClass("on");

		let menu_li_idx = $(this).index();
		// $(".nav_menu_item div").stop().eq(menu_li_idx).addClass("on").siblings().removeClass("on");

		$(".nav_menu_item div").stop().eq(menu_li_idx).slideDown(250).show().siblings().hide();

		$("section").stop().addClass("on");
	}).mouseleave(function(){
		// $(".nav_menu li").stop().removeClass("on");

	});

	//서브 네비게이션
	$(".nav_menu_item div").mouseleave(function(){
		$(".nav_menu li").stop().removeClass("on");
		$(".nav_menu_item div").stop().slideUp(100);
		$("section").stop().removeClass("on");

		$(".nike_service").mouseenter(function(){
			$(".nav_menu li").stop().removeClass("on");	
			$(".nav_menu_item div").stop().slideUp(100);
			$("section").stop().removeClass("on");				
		});
	});
	
	$(".nav_menu_item div > ul > li").mouseenter(function(){
		$(this).stop().siblings().animate({opacity:".5"},100);
	}).mouseleave(function(){
		$(".nav_menu_item div > ul > li").stop().css({opacity:"1"});
	});

	//검색 버튼
	$(".search, .search_btn").click(function(){
		$("nav").stop().hide();
		$("header").stop().css({position:"fixed"});
		$("header").stop().addClass("on").animate({top:"0"});
		$(".search").stop().addClass("on");
		$(".search_word").stop().show();

		if ($("header").hasClass("on")) {
			$(".chose_item").hide();
			$(".shopping_basket").hide();
			$(".hamburger").hide();
			$(".search_btn").stop().hide();
			$(".close").fadeIn();
			$("section").stop().addClass("on");
		}

		if ($("body").hasClass("tablet") || $("body").hasClass("mobile")) {
			$("header h1").stop().hide();
		}else{
			$("header h1").stop().show();
		}
	});

	//검색의 닫기 버튼
	$(".close").click(function(){
		
		$(".search").stop().removeClass("on");
		$(".search_word").stop().hide();

		$(".chose_item").show();
		$(".shopping_basket").show();
		$(".close").hide();
		$("section").stop().removeClass("on");

		if ($("body").hasClass("pc")) {
			$("header").stop().removeClass("on").css({position:"fixed",top:"30px"});
			$("nav").stop().show();
		}else{
			$("header").stop().removeClass("on").css({position:"fixed",top:"0px"});
			$("header h1").stop().show();
			$(".hamburger").show();
			$(".search_btn").stop().show();
		}
	});



	// article 5번째 슬라이드
	let i = 0;
	$(".prev").click(function(){
		i--;
		if (i<0) {i=7;}
		$(".nike_slide figure").stop().eq(i).addClass("on").siblings().removeClass("on");

		$(".slide_button b").text(i+1);
	});
	$(".next").click(function(){
		i++;
		if (i>7) {i=0;}
		$(".nike_slide figure").stop().eq(i).addClass("on").siblings().removeClass("on");
		$(".slide_button b").text(i+1);
	});

	// 햄버거 버튼
	$(".hamburger").click(function(){
		$(".menu_mobile").stop().show();
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
		$("header").stop().css({filter:"blur(5px)",background:"rgba(255,255,255,.1)"});
		$("section").stop().css({filter:"blur(5px)",background:"rgba(255,255,255,.1)"});
	});


	// 모바일 네비게이션
	$(".menu_mobile_ul > li").click(function(){
		$(this).stop().toggleClass("slidedown").siblings().removeClass();
		$(".menu_mobile > ul > li > ul").stop().slideUp();
		// $(this).stop().find("ul").slideDown();

		if ($(this).hasClass("slidedown")) {
			$(this).stop().find("ul").slideDown();					
		}else{
			// $(".menu_mobile > ul > li > ul").stop().slideUp();
		}
	});
	$(".menu_mobile_ul > li > ul > li").click(function(e){
		e.stopPropagation();
	});

	// 모바일 네비게이션 닫기 버튼
	$(".menu_mobile_close").click(function(){
		$(".menu_mobile").stop().hide();
		$('html, body').css({'overflow': 'visible', 'height': '100%'});
		$("header").stop().css({filter:"unset",background:"#fff"});
		$("section").stop().css({filter:"unset",background:"unset"});
	});

});