$(document).ready(function(){

	$(".menu > li").mouseenter(function(){
		let menu_index = $(this).index();
		console.log(menu_index);
		$(this).addClass("on").siblings().removeClass("on");
		$(".sub_menu").show();
		$(".sub_menu > ul").eq(menu_index).addClass("on").siblings().removeClass("on");
	});
	$(".sub_menu").mouseleave(function(){
		$(".menu > li").removeClass("on");
		$(".sub_menu").hide();
		$(".sub_menu > ul").removeClass("on");
	});

	$(".sports > li > ul > li").mouseenter(function(){
		$(this).addClass("on").siblings().removeClass("on");
	}).mouseleave(function(){
		$(".sports > li > ul > li").removeClass("on");
	});

	//모바일 햄버거 버튼
	$(".mobile_menu").click(function(){
		$(this).stop().toggleClass("click");
		if ($(this).hasClass("click")) {
			$(".mobile_sub_menu ").addClass("on");
		}else{
			$(".mobile_sub_menu ").removeClass("on");
		}
	});

	$(".uil-search").click(function(){
		$(".search_bar").show();
	});

	$(".search_bar_close_btn").click(function(){
		$(".search_bar").hide();
	});

	$(".shopping > li:nth-of-type(2)").click(function(){
		alert("장바구니에 담긴 상품이 없습니다.");
	});


	if ($(this).width() < 769) {
			$("body").stop().removeClass().addClass("mobile");
			$(".popular_item div p").stop().css({left:0,top:0});
		}else{
			$("body").stop().removeClass().addClass("pc");
			$(".popular_item div p").stop().css({left:0,top:0});
		}

	$(window).resize(function(){
		if ($(this).width() < 769) {
			$("body").stop().removeClass().addClass("mobile");
		}else{
			$("body").stop().removeClass().addClass("pc");
		}
	});

	let current = 0,
		$collaboration_p = $(".collaboration > p"),
		p_length = $(".collaboration > p").length;
	let timer = setInterval(collaboration,3000);

	function collaboration(){
		let next_current = (current+1)%3;

		$collaboration_p.eq(current).fadeOut();
		$collaboration_p.eq(next_current).fadeIn();

		current = next_current;
	}

	

	let collaboration_height = $(".collaboration h4").outerHeight(true),
		p_height = $(".collaboration p.block").height();
	let $collaboration_height = collaboration_height+p_height;
	console.log(collaboration_height);
	console.log(p_height);

	$(window).on("load",function(){
		let collaboration_height = $(".collaboration h4").outerHeight(true),
			p_height = $(".collaboration p.block").height();
		let $collaboration_height = collaboration_height+p_height;
		$(".collaboration").stop().height($collaboration_height);
	});
	// $(".collaboration").height($collaboration_height);
	$(window).resize(function(){
		let collaboration_height = $(".collaboration h4").outerHeight(true),
		p_height = $(".collaboration p.block").height();
		let $collaboration_height = collaboration_height+p_height;
		$(".collaboration").height($collaboration_height);



	});



	


	// 2021.06.14// 2021.06.14// 2021.06.14// 2021.06.14// 2021.06.14
	// 2021.06.14// 2021.06.14// 2021.06.14// 2021.06.14// 2021.06.14
	// 2021.06.14// 2021.06.14// 2021.06.14// 2021.06.14// 2021.06.14
	// 2021.06.14// 2021.06.14// 2021.06.14// 2021.06.14// 2021.06.14
	// 2021.06.14// 2021.06.14// 2021.06.14// 2021.06.14// 2021.06.14

	// height값을 구해야 모바일 버전에서 슬라이드 버튼을 클릭시 height만큼 정확하게 이동 할 수 있기 때문에 높이 값을 구해야 한다.


	$(".popular_item button").blur(function(){
		$(this).addClass("click");
	});



	// 인기 상품
	let popular_item_p_height = $(".popular_item p").outerHeight();

	console.log(popular_item_p_height);


	$(".popular_item div").height(popular_item_p_height);

	$(window).resize(function(){
		let popular_item_p_height = $(".popular_item p").outerHeight();

		if ($("body").hasClass("pc")) {
			$(".popular_item div").height(280);
			$(".popular_item div p").stop().css({left:0,top:0});
			num=0;//초기화를 안하면 이미 기억하고 있는 num때문에 꼬인다.
			$(".prev_btn").addClass("btn_hide");
			$(".right_btn").removeClass("btn_hide");
		}else if ($("body").hasClass("mobile")) {
			$(".popular_item div").height(popular_item_p_height);
			$(".popular_item div p").stop().css({left:0,top:0});
			num=0;
			$(".prev_btn").addClass("btn_hide");
			$(".right_btn").removeClass("btn_hide");
		}

	});


	let num = 0;
	let popular_item_p_width = $(".popular_item p").outerWidth(true);//262.5px
	console.log(popular_item_p_width);

	// let popular_item_p_height = $(".popular_item p").outerHeight();

	$(".prev_btn").click(function(){
		if ($("body").hasClass("pc")) {
			num--;
			if (num < 1){
				num=0;
				$(this).addClass("btn_hide");
				// $(".rigth_btn").re
			}else{
				$(".right_btn").removeClass("btn_hide");
			}
			$(".popular_item div p").stop().animate({left:"-"+num*741+"px"});
		}else if ($("body").hasClass("mobile")) {
			let popular_item_p_height_plus = popular_item_p_height+6;
			num--;
			if(num < 1){
				num=0;
				$(this).addClass("btn_hide");
			}else{
				$(".right_btn").removeClass("btn_hide");
			}
		$(".popular_item div p").stop().css({top:"-"+num*280+"px"});
		}

		console.log(num);
	});

	$(".right_btn").click(function(){
		if ($("body").hasClass("pc")) {
			num++;
			if(num > 2){
				num=3;
				$(this).addClass("btn_hide");
			}else{
				$(".prev_btn").removeClass("btn_hide");
			}
		$(".popular_item div p").stop().animate({left:"-"+num*741+"px"});
		}else if ($("body").hasClass("mobile")) {
			let popular_item_p_height_plus = popular_item_p_height+6;
			num++;
			if(num > 4){
				num=5;
				$(this).addClass("btn_hide");
			}else{
				$(".prev_btn").removeClass("btn_hide");
			}
		$(".popular_item div p").stop().css({top:"-"+num*280+"px"});
		}

		console.log(num);
	});



});