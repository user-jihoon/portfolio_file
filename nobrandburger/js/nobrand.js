$(document).ready(function(){
	$("nav ul:nth-of-type(1) li").click(function(){
			let idx = $(this).index();
			console.log(idx);

			$(".main_bg").hide();
			$("article").eq(idx).show().siblings().hide();
			$(this).addClass("on").siblings().removeClass("on");
			$("nav ul:nth-of-type(2) li").removeClass("on");

			if(idx === 0){
				$("#wrap").stop().animate({top:"100%",left:"100%"}).css({bottom:"unset",right:"unset"});
			}else if (idx === 1) {
				$("#wrap").stop().animate({top:"100%",right:"100%"}).css({bottom:"unset",left:"unset"});
				$(".menu_page").show();
				$(".menu_page div ul.on").css({animationDelay:"1.5s"});
			}
		});
		$("nav ul:nth-of-type(2) li").click(function(){
			let idx_plus2 = $(this).index()+2;

			$(".main_bg").hide();
			$("article").eq(idx_plus2).show().siblings().hide();
			$(this).addClass("on").siblings().removeClass("on");
			$("nav ul:nth-of-type(1) li").removeClass("on");

			if (idx_plus2 === 2) {
				$("#wrap").stop().animate({bottom:"100%",left:"100%"}).css({top:"unset",right:"unset"});
				$(".store_page").show();
			}else if (idx_plus2 === 3) {
				$("#wrap").stop().animate({bottom:"100%",right:"100%"}).css({top:"unset",left:"unset"});
				$(".event_page").show();
			}	
		});


		$(".menu_type li").click(function(){
			let menu_idx = $(this).index();

			$(this).stop().addClass("on").siblings().removeClass("on");	

			$(".menu_page > div > div ul").stop().eq(menu_idx).addClass("on").siblings().removeClass("on");

			$(".menu_page div ul.on").css({animationDelay:".1s"});

		});
					

		// $("ul:nth-of-type(1) li").click(function(){
		// 	let idx = $(this).index();
		// 	console.log(idx);
		// 	if(idx === 0){
		// 		$("#wrap").stop().animate({inset:"100% 0px 0px 100%"});
		// 	}else if (idx === 1) {
		// 		$("#wrap").stop().animate({inset:"100% 100% 0px 0px"});
		// 	}
		// });
		// $("ul:nth-of-type(2) li").click(function(){
		// 	let idx_plus2 = $(this).index()+2;
		// 	if (idx_plus2 === 2) {
		// 		$("#wrap").stop().animate({inset:"0px 0px 100% 100%"});
		// 	}else if (idx_plus2 === 3) {
		// 		$("#wrap").stop().animate({inset:"0px 100% 100% 0px"});
		// 	}
		// });



		$(document).on("mousemove", function(event) {
			  var window_height = $(this).height();
			  var window_width = $(this).width();
			  var mouseXpos = event.clientX;
			  var mouseYpos = event.clientY;
			  var YrotateDeg = (window_width / 2 - mouseXpos) * 0.01;
			  var XrotateDeg = (window_height / 2 - mouseYpos) * -0.01;

			$(".main_bg").css({transform:"translate3d("+-YrotateDeg+"px,"+-XrotateDeg+"px,0px)"});

		});
});