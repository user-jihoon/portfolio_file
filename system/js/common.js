$(document).ready(function(){
	// alert("123");

	$("nav li").on("click",function(){
		$(".btnMenu").fadeIn();
		$("section").removeClass("on");
		$("nav").removeClass("on");
		$(".hamburger").removeClass("on");
		$(".article1_1").removeClass("on");
		$(".article1_2").removeClass("on");
		$(".article1_3").removeClass("on");
		$(".article1_4").removeClass("on");
		
		var i = $(this).index();
		$("section > article").removeClass("on");
		$("section > article").eq(i).addClass("on");
	});

		// 헤더 햄버거 버튼 
		$(".hamburger").click(function() {
 	 		$(this).stop().toggleClass("on");
 	 		$("section").toggleClass("on");
			$("nav").toggleClass("on");
		});

		// 브랜드 click 
		$(".brand").click(function(){
			$("section > article").removeClass("on");
			$(".article1_1").stop().addClass("on");
		});

		// 매장 click
		$(".all_store").click(function(){
			$("section > article").removeClass("on");
			$(".article1_2").stop().addClass("on");
		});

		// 매장 --> 브랜드매장,아울렛매장 
		$(".store > p").click(function(){
			i = $(this).index();
			$(this).stop().addClass("on").siblings().removeClass("on");
			$(".table").stop().eq(i).addClass("on").siblings().removeClass("on");
		});

		// 캠페인 click
		$(".campaign").click(function(){
			$("section > article").removeClass("on");
			$(".article1_4").stop().addClass("on");
		});

		// 룩북 click
		$(".lookbook").click(function(){
			$("section > article").removeClass("on");
			$(".article1_3").stop().addClass("on");
		});
		// $(".ul > li").mouseenter(function(){
		// 	$(this).stop().find(".sub_ul").slideDown();
		// })
		// .mouseleave(function(){
		// 	$(this).stop().find(".sub_ul").slideUp();
		// });
		$(".ul > li").click(function(){
			var $ulli = $(".ul > li");
			$(this).stop().toggleClass("on");
			if ($ulli.hasClass("on")) {
				$(this).find(".sub_ul").slideDown();
			}else{
				$(this).find(".sub_ul").slideUp();
			}
		});


		// article2 옷 전체메뉴 click 이벤트
		$(".article2_menu > .fashion").click(function(){
			var i = $(this).index(),
				i1 = i+1;

			$(this).stop().addClass("bold").siblings().removeClass("bold");
			$(".article2 > h3 > span").eq(i).addClass("on").siblings().removeClass();
			console.log(i);

			$(".dress_contents ul").eq(i1).addClass("on").siblings().removeClass("on");

			var dressC = $(".dress_contents ul.on > li:last-child").index(),
				dressC_plus = dressC+1;

				$(".dress_count").text(dressC_plus);
			console.log(dressC_plus);

		});

		// article2 옷 메뉴 초기화 이벤트
		$(".seset").click(function(){
			$(".fashion").removeClass("bold");
			$(".article2 > h3 > span").removeClass("on");
			$(".dress_contents > ul").eq(0).addClass("on").siblings().removeClass("on");
			var first_Count = $(".dress_contents > ul.on > li:last-child").index(),
				first_Count_plus = first_Count+1;
			$(".dress_count").text(first_Count_plus);

		});

		// 정렬순 서브메뉴 이벤트
		$(".article2_menu > ul > li").click(function(){
			$(this).stop().toggleClass("on");
			// $(this).stop().find(".article2_subul")
			if ($(this).hasClass("on")) {
				$(".article2_subul").slideDown();
			} else{
				$(".article2_subul").slideUp();
			}
		});

		// article2 정렬순 텍스트 변경
		var $article2menu_ul_li = $(".article2_menu > ul > li")
			$article2menu_ul_li_span = $article2menu_ul_li.find("span").text();
		$(".article2_subul > li").click(function(){
			var newText = $(this).text();
			$(".article2_menu > ul > li > span").text(newText);
		});

		// article2의 컨텐츠 갯수를 span text()에 넣어서 표시.

		var $dresscount = $(".dress ul > li:last-child").index(),
			dressCounts = $dresscount+1;
		$(".dress_count").text(dressCounts);
		// article2 컨텐츠 하트 click 이벤트
		$(".heart").click(function(){

			$(this).stop().toggleClass("on");
			
			// 각각의 li들의 하트들을 누를 때마다 숫자가 카운트 됨.
			if ($(".heart.on")) {
				// basketCount += 1;
				var basket_p = $(".heart.on").length;
				$('.shopping_basket').text(basket_p);

				console.log(basket_p);
				
				
			} else if ($(".heart")) {
				// basketCount -= 1;
				var basket_m = $(".heart").length;
				    // basket_mm;
				$('.shopping_basket').text(basket_m);

				console.log(basket_m);
			}

		});
			

			// lengt = $(".heart").lenth;
			// console.log(lengt);

		// setInterval(heart,0);
		// function heart(){
		// 	i = $(".heart.on").length;
		// 	$(".shopping_basket").text(i);
		// 	console.log(i);

		// }


		// article2 컨텐츠 사진들 넣기

		//22.02.21
		let dress_height = $(".dress").height()-5; //.dress의 높이 값에서 마진 top값을 빼준다.
		let span_height = dress_height*0.05; //dress_height값에서 5%를 구해주면 span의 값이 된다. 이 값을 span태그의 line-height 값으로 넣어준다. //22.02.21

		$(".dress_contents > ul > li > span").css({lineHeight:span_height+"px"});
		// console.log(span_hei);
		$(".dress_contents > .all_dress > li > p").each(function(idx){
			var $dressImg = $(".dress_contents > .all_dress > li > p"),
				Idx = idx+1;
			$dressImg[idx].style.background = "url(system/img"+Idx+".jpg) no-repeat center top";
			$(this).css({height:"75%",backgroundSize:"cover"});
			// $(this).eq(idx).css({background:"url("+"../system/article2/img"+idx+");"''});
			// $(this).eq(idx).css({background:"url(../system/article2/img3.jpg)"});
			
			// if ($(this).mouseenter()) {
			// $dressImg[idx].style.background = "url(system/img"+Idx+"_1"+".jpg)";
			// $(this).css({height:"444px"});
			// }

			$(this).mouseenter(function(){
				$dressImg[idx].style.background = "url(system/img"+Idx+"_1"+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});
				$(this).find(".size").addClass("on");
			}).mouseleave(function(){
				$dressImg[idx].style.background = "url(system/img"+Idx+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});
				$(this).find(".size").removeClass("on");
			});

		});

		// 아우터 이미지 넣기
		$(".dress_contents > .outer > li > p").each(function(Oidx){
			var $outer = $(".dress_contents > .outer > li > p"),
				outer_idx = Oidx+1;
				$outer[Oidx].style.background = "url(system/outer"+outer_idx+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});

				$(this).mouseenter(function(){
				$outer[Oidx].style.background = "url(system/outer"+outer_idx+"_1"+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});
				$(this).find(".size").addClass("on");
			}).mouseleave(function(){
				$outer[Oidx].style.background = "url(system/outer"+outer_idx+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});
				$(this).find(".size").removeClass("on");
			});

		});

		// 탑 이미지 넣기
		$(".dress_contents > .top > li > p").each(function(Tidx){
			var $top = $(".dress_contents > .top > li > p"),
				top_idx = Tidx+1;
				$top[Tidx].style.background = "url(system/top"+top_idx+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});

				$(this).mouseenter(function(){
				$top[Tidx].style.background = "url(system/top"+top_idx+"_1"+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});
				$(this).find(".size").addClass("on");
			}).mouseleave(function(){
				$top[Tidx].style.background = "url(system/top"+top_idx+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});
				$(this).find(".size").removeClass("on");
			});

		});

		// 팬츠 이미지 넣기
		$(".dress_contents > .pants > li > p").each(function(Pidx){
			var $pants = $(".dress_contents > .pants > li > p"),
				pants_idx = Pidx+1;
				$pants[Pidx].style.background = "url(system/pants"+pants_idx+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});

				$(this).mouseenter(function(){
				$pants[Pidx].style.background = "url(system/pants"+pants_idx+"_1"+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});
				$(this).find(".size").addClass("on");
			}).mouseleave(function(){
				$pants[Pidx].style.background = "url(system/pants"+pants_idx+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});
				$(this).find(".size").removeClass("on");
			});

		});

		// 패션잡화 이미지 넣기
		$(".dress_contents > .fashion_acc > li > p").each(function(Fidx){
			var $fashion_acc = $(".dress_contents > .fashion_acc > li > p"),
				fashion_acc_idx = Fidx+1;
				$fashion_acc[Fidx].style.background = "url(system/fashion_acc"+fashion_acc_idx+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});

				$(this).mouseenter(function(){
				$fashion_acc[Fidx].style.background = "url(system/fashion_acc"+fashion_acc_idx+"_1"+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});
				$(this).find(".size").addClass("on");
			}).mouseleave(function(){
				$fashion_acc[Fidx].style.background = "url(system/fashion_acc"+fashion_acc_idx+".jpg) no-repeat center top";
				$(this).css({height:"75%",backgroundSize:"cover"});
				$(this).find(".size").removeClass("on");
			});

		});



		// article2 메뉴에 검색 버튼 이벤트
		$(".search_img").click(function(){
			$(".search").toggleClass("on");
			$(this).toggleClass("on");
		});

		$(".article2_prev_btn").click(function(){
			//맨 마지막 li가 첫번째로 오게함.
			$(".dress_contents ul.on > li").eq(-1).insertBefore(".dress_contents > ul.on > li:first-child");
			return false
		});
		$(".article2_right_btn").click(function(){
			//맨 첫번째 li가 맨 뒤로 감.
			$(".dress_contents ul.on > li").eq(0).insertAfter(".dress_contents > ul.on > li:last-child");
			return false
			// $(".dress_contents > ul > li").stop().animate({right:"294px"},300);
		});

		

		// 이벤트 제이쿼리

		// 밑 << < 1 2 > >> 이벤트
		$(".ongoing_event > .number > .num").click(function(){
			var num = $(this).index(),
			    num_idx = num-2;
			console.log(num_idx);
			$(".on_events").stop().eq(num_idx).addClass("on").siblings().removeClass("on");
			$(this).stop().addClass("on").siblings().removeClass("on");
		});
		$(".past_event > .number > .num").click(function(){
			var num = $(this).index(),
			    num_idx = num-2;
			$(".off_events").stop().eq(num_idx).addClass("on").siblings().removeClass("on");
			$(this).stop().addClass("on").siblings().removeClass("on");
		});

		// 진행중인 이벤트,지난 이벤트
		$(".events > span").click(function(){
			var e = $(this).index();
			$(this).stop().addClass("on").siblings().removeClass("on");
			$(".article3 > div > div").stop().eq(e).addClass("on").siblings().removeClass("on");
		});


});