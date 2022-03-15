$(document).ready(function(){
		
		$(".show").delay(200).animate({opacity:1},500);
		$(".show1").delay(2000).animate({opacity:1},500);
		$(".p").delay(400).animate({opacity:1},500);
		// $(".a_text2").delay(800).animate({opacity:1},500);

		$(".A").delay(800).animate({opacity:1},500);
		// $(".a_text3").delay(1300).animate({opacity:1},500);

		$(".M").delay(1200).animate({opacity:1},500);
		// $(".a_text4").delay(1800).animate({opacity:1},500);

		$(".S").delay(1600).animate({opacity:1},500);
		// $(".a_text5").delay(2300).animate({opacity:1},500);
		
		$(".article2 > p:nth-of-type(4)").click(function(){
			$(this).toggleClass("on");
			if ($(this).hasClass("on")) {
				// $("#video").attr("controls","1"); //다시
				$("#video").get(0).play();//재생
			}else{
				$("#video").get(0).pause();//정지
			}
			
		});

		$(".article3 > p:nth-of-type(5)").click(function(){
			$(this).toggleClass("on");
			if ($(this).hasClass("on")) {
				// $("#video").attr("controls","1"); //다시
				$("#video2").get(0).play();//재생
			}else{
				$("#video2").get(0).pause();//정지
			}
			
		});


		// 팸스 피칭 이미지 넣기
		// $(".pitching_img > div").each(function(idx){
		// 	var $this = $(".pitching_img > div"),
		// 		index = idx+1;

		// 		console.log(idx);
		// 		$p_img[idx].style.background = "url(images/p_img"+index+".jpg)";
		// 		$p_img[idx].style.backgroundSize = "cover";

		// 		$this[idx].style.border = "1px solid #000";

		// });
		// $(".pitching_img > div").each(function(i){
		// 	var $ttt = $(".pitching_img > div"),
		// 		index = idx+1;

		// 		$ttt[i].style.border = "1px solid #000";
		// });


		//팸스그라운드 표 td클릭시 이벤트 //팸스그라운드 표 td클릭시 이벤트
		$("td > span").click(function(){
			// var $div = $(this).parent("div").index();
				
			var ind = $(this).attr("class"),
				idx = parseInt(ind),
				index = idx-1;
				console.log(index);
			$(this).stop().toggleClass("on");
			if ($(this).hasClass("on")) {
				$(".pitching_img").stop().show();
				$(".pitching_img > div").stop().eq(index).show();
			}else{
				$(".pitching_img").stop().hide();
				$(".pitching_img > div").stop().eq(index).hide();
			}
		});
		$(".close").click(function(){
			$(".pitching_img").stop().hide();
				$(".pitching_img > div").stop().hide();
		});

		$(".pams_online_dating > .pams_od_application").click(function(){
			alert("신청기간이 마감되었습니다.");
		});

		//04번 협력 마감
		$(".i_enrollment").click(function(){
			alert("마감되었습니다.");
		});
		$(".b_enrollment").click(function(){
			alert("마감되었습니다.");
		});


		// 미리보기 팸스그라운드 부스 // 미리보기 팸스그라운드 부스
		$(".article5 > div.article5_div > p:nth-of-type(3)").click(function(){
			//팸스그라운드 부스 보기 <태그>
			$(".preview").stop().addClass("on");
			$(".pams_booth_preview").stop().addClass("on");
		});
		$(".pams_booth_preview > p:nth-of-type(1) > span").click(function(){
			var idx = $(this).index();
			$(this).stop().addClass("on").siblings().removeClass("on");

			if ($(this).hasClass("on")) {
				$(".pams_booth_preview > p:nth-of-type(2) > span").stop().eq(idx).addClass("on").siblings().removeClass("on");
			}
		});


		//notice //notice //notice //notice
		$(".period > p > span").click(function(){
			var idx = $(this).index(),
				idx_plus = idx+1;
				// .preview > div 4개.
							//div.eq(0) = 팸스그라운드 부스 보기
							//div.eq(1) = 유의사항, span.eq(0) <--eq(1)
							//div.eq(2) = 결제방법, span.eq(1) <--eq(2)
							//div.eq(3) = 취소 및 환불규정, span.eq(2) <--eq(3)
			$(".preview").stop().addClass("on");
			$(".preview > div").stop().eq(idx_plus).addClass("on").siblings().removeClass("on");
		});

		// 닫기 버튼 공용 // 닫기 버튼 공용 // 닫기 버튼 공용
		$(".preview > div > .preview_close").click(function(){
			$(".preview").removeClass("on");
			$(this).stop().parent("div").removeClass("on")
		});

		// $("header > ul > li:nth-of-type(1)").text(scrollTop);
		// console.log(scrollTop);
		$(window).scroll(function () {
			var scrollValue = $(document).scrollTop(),
				scrolltop = $(window).scrollTop();
			console.log(scrollValue);
			if ($(document).scrollTop()>0 && $(document).scrollTop()<article2) {
				$("header > ul > li:nth-of-type(1)").addClass("on").siblings().removeClass("on");
			}else if ($(document).scrollTop()>=article2 && $(document).scrollTop()<article3) {
				$("header > ul > li:nth-of-type(2)").addClass("on").siblings().removeClass("on");
			}else if ($(document).scrollTop()>=article3 && $(document).scrollTop()<article4) {
				$("header > ul > li:nth-of-type(3)").addClass("on").siblings().removeClass("on");
			}else if ($(document).scrollTop()>=article4 && $(document).scrollTop()<article5) {
				$("header > ul > li:nth-of-type(4)").addClass("on").siblings().removeClass("on");
			}else if ($(document).scrollTop()>=article5 && $(document).scrollTop()<14715) {
				$("header > ul > li:nth-of-type(5)").addClass("on").siblings().removeClass("on");
			}else if (scrolltop >= $(document).height() - $(window).height() - 100) {
				$(".figure").stop().addClass("on");
				$(".logo").stop().css({display:"none"});
			}else{
				$(".figure").stop().removeClass("on");
				$(".logo").stop().css({display:"block"});
			}
		});

		// $("header > ul > li:nth-of-type(1)").click(function(){
		// 	$(window).scrollTop(983);
		// });
		$("header > ul > li").each(function(){
			var idex = $(this).index();
			// if ($(this).eq(0)) {
			// 	$("header > ul > li:nth-of-type(1)").click(function(){
			// 		$(window).scrollTop(0);
			// 	});
			// }else if ($(this).eq(1)) {
			// 	$("header > ul > li:nth-of-type(2)").click(function(){
			// 		$(window).scrollTop(983);
			// 	});
			// }else if ($(this).eq(2)) {
				
			// }else if ($(this).eq(3)) {
				
			// }else if ($(this).eq(4)) {
			// 	// $("header > ul > li:nth-of-type(5)").click(function(){
			// 	// 	$(window).scrollTop(983);
			// 	// });
			// }
		});

		var article1 = $(".article1").position().top,//top:0
			article2 = $(".article2").position().top,//top:770
			article3 = $(".article3").position().top,//top:2678
			article4 = $(".article4").position().top,//top:4849
			article5 = $(".article5").position().top;//top:13109

			console.log(article1);
			console.log(article2);
			console.log(article3);
			console.log(article4);
			console.log(article5);

		$("header > ul > li").click(function(){
			var idex = $(this).index();

			if ($(this).index() == 0) {
				// $(window).scrollTop(0);
				$("html,body").animate({scrollTop:article1+1},500,"swing");
				$(this).addClass("on").siblings().removeClass("on");
			}else if ($(this).index() == 1) {
				// $(window).scrollTop(983);
				$("html,body").animate({scrollTop:article2+1},500,"swing");
				$(this).addClass("on").siblings().removeClass("on");
			}else if ($(this).index() == 2) {
				// $(window).scrollTop(3470);
				$("html,body").animate({scrollTop:article3+1},500,"swing");
				$(this).addClass("on").siblings().removeClass("on");
			}else if ($(this).index() == 3) {
				// $(window).scrollTop(6087);
				$("html,body").animate({scrollTop:article4+1},500,"swing");
				$(this).addClass("on").siblings().removeClass("on");
			}else if ($(this).index() == 4) {
				// $(window).scrollTop(13410);
				$("html,body").animate({scrollTop:article5+1},500,"swing");
				$(this).addClass("on").siblings().removeClass("on");
			}		
		});

		// $("header > ul > li").click(function(){
		// 	var idex = $(this).index();

		// 	if ($(this).index() == 0) {
		// 		// $(window).scrollTop(0);
		// 		$("html,body").animate({scrollTop:article1},500,"swing");
		// 		$(this).addClass("on").siblings().removeClass("on");
		// 	}else if ($(this).index() == 1) {
		// 		// $(window).scrollTop(983);
		// 		$("html,body").animate({scrollTop:0},500,"swing");
		// 		$(this).addClass("on").siblings().removeClass("on");
		// 	}else if ($(this).index() == 2) {
		// 		// $(window).scrollTop(3470);
		// 		$("html,body").animate({scrollTop:0},500,"swing");
		// 		$(this).addClass("on").siblings().removeClass("on");
		// 	}else if ($(this).index() == 3) {
		// 		// $(window).scrollTop(6087);
		// 		$("html,body").animate({scrollTop:0},500,"swing");
		// 		$(this).addClass("on").siblings().removeClass("on");
		// 	}else if ($(this).index() == 4) {
		// 		// $(window).scrollTop(13410);
		// 		$("html,body").animate({scrollTop:0},500,"swing");
		// 		$(this).addClass("on").siblings().removeClass("on");
		// 	}		
		// });






		//모바일 버전 햄버거 버튼
		$(".mobile_hamburger").click(function(){
			$(this).stop().toggleClass("on");
			
			if ($(this).hasClass("on")) {
				$(".mobile_header").stop().addClass("on");
			}else{
				$(".mobile_header").stop().removeClass("on");
			}
		});


		$("header").addClass("pc");
		$(window).resize(function(){
			var window_width = $(this).width();
			if (window_width < 775) {
				$("header").addClass("pc");
			}else{
				$("header").addClass("mobile");
				$("header").removeClass("mobile");
			}
			console.log(window_width);
		});


		

		$(".mobile_nav > li").click(function(){
			var mobile_nav_idx = $(this).index();
			$(".mobile_header").stop().removeClass("on");
			$(".mobile_hamburger").stop().removeClass("on");

			if (mobile_nav_idx == 0) {
				$("html").stop().animate({scrollTop:article1},500,"swing");
			}else if (mobile_nav_idx == 1) {
				$("html").stop().animate({scrollTop:article2-100},500,"swing");
			}else if (mobile_nav_idx == 2) {
				$("html").stop().animate({scrollTop:article3-100},500,"swing");
			}else if (mobile_nav_idx == 3) {
				$("html").stop().animate({scrollTop:article4-100},500,"swing");
			}else if (mobile_nav_idx == 4) {
				$("html").stop().animate({scrollTop:article5-100},500,"swing");
			}
		});

});