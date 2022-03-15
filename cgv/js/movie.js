$(document).ready(function(){

		$(window).scroll(function(){
		let scroll_bottom =$(window).scrollTop() + $(window).height();//스크롤바텀값
		let premiere_top = $(".movie_premiere").position().top,
			event_top = $(".event").position().top,
			membership_top = $(".membership").position().top;
		let section_height = $("section").height();

// 방식1: $(".movie_premiere figure").stop().animate({transform:"translateY(0px)",opacity:"1"},500);
// 방식2: $(".movie_premiere div").stop().addClass("on");

// 방식1로 하니 렉이 걸려서 어쩔 수 없이 방식2로 바꿈.

			if (premiere_top+100 <= scroll_bottom && event_top > scroll_bottom){
				$(".movie_premiere div").stop().addClass("on");
			}else if (event_top+100 <= scroll_bottom && membership_top > scroll_bottom){
				$(".event_list").stop().addClass("on");
			}else if (membership_top <= scroll_bottom && section_height > scroll_bottom){
				$(".membership div").stop().addClass("on");
			}

		console.log("스크롤바텀 값:"+scroll_bottom);//얘가 적확함.
		console.log(premiere_top);
		console.log(event_top);
		console.log("섹션의 높이"+section_height);
		console.log("멤버쉽 탑 값:"+membership_top+", 스크롤 바텀:"+scroll_bottom);
		});

		function opacity(){
			$(".movie").stop().css({opacity:".4"});
		}

		$(".movie").click(function(){
			let $this = $(this);
			$(this).stop().addClass("click").siblings().removeClass("click");
			$(this).stop().css({width:"60%"});
			$(this).stop().siblings().css({width:"13.34%"});//13.3333% --> 13.34%

			$("video").each(function(){
				$(this).get(0).pause();
				$(this).get(0).currentTime = 0;
				$(this).css({objectFit: "cover"});

				if ($(".movie").hasClass("click")) {
					$this.stop().find("video").get(0).play();
					$this.stop().find("img").hide();
					$this.stop().siblings().find("img").show();
					$this.stop().css({opacity:"1"}).siblings().css({opacity:".4"});
				}else{
					opacity();
				}
			});

		});

		$(document).click(function (e){
		  var $movie = $(".movies .movie");
		  if($movie.has(e.target).length === 0){
		    $movie.removeClass("click");
		    $movie.stop().find("img").show();
			$movie.stop().css({width:"25%"});
			opacity();

		    $("video").each(function(){
				$(this).get(0).pause();
				$(this).get(0).currentTime = 0;
			});
		  }		

		});

		function each(){
			$("video").each(function(){
				$(this).get(0).pause();
				$(this).get(0).currentTime = 0;

				$(".movie").removeClass("click").css({width:"25%"});
				$(".movie").find("img").show();
			});
		}
		$(".prev").click(function(){
			$(".movie:last-child").stop().prependTo(".movies");
			$(".movies").stop().css({left:-25+"%"});
			$(".movies").stop().animate({left:0+"%"});
			opacity();
			each();
		});
		$(".next").click(function(){
			$(".movies").stop().animate({left:-25+"%"},function(){
				$(".movie:first-child").stop().appendTo(".movies");
				$(".movies").stop().css({left:"0%"});
			});
			opacity();
			each();
		});

		//.nav_user
		$(".search").click(function(){
			$("#search_bar").stop().addClass("on").focus();
		});
		$("#search_bar").blur(function(){
			$(this).removeClass("on");
		});
		$(".login, .quick_reservation").click(function(){
			alert("로그인이 필요한 서비스입니다.");
		});
		

		$(".movie").mouseenter(function(){
			$(this).stop().css({opacity:"1"});
			
		});
		$(".movie").mouseleave(function(){
			$(this).stop().css({opacity:".4"});

			if ($(".movie").hasClass("click")){
				$(".movie.click").stop().css({opacity:"1"});
			}
		});


});