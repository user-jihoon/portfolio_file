$(document).ready(function(){
	// alert("123");

	$("body,html").stop().animate({"scrollTop":0},1500,"swing");

	$(window).scroll(function(){
		var scroll = $(this).scrollTop();

		for(var i=0; i<5; i++){
			//스크롤값과 박스의 z축 연동
			//문자형 숫자를 정수로 바꾸는 것이 = parseInt
			$("section>article").eq(i).css({"transform":"translateZ("  + parseInt((-5000*i)+scroll) + "px)"});
			// $("section>article").eq(i).css({"transform":"translateZ("  + (-5000*i)+scroll + "px)"});
			//특정 스크롤 구간에서 스크롤 네비게이션과 박스 활성화
			if (scroll>=i*5000&&scroll<(i+1)*5000) {
				$(".scrollNavi li").removeClass();
				$(".scrollNavi li").eq(i).addClass("on");
				$("article").removeClass();
				$("article").eq(i).addClass("on");
			}
		}

	});	

	// 사이드 메뉴 누르면 메인 피자 이미지 바뀜
		$(".scrollNavi li").click(function(){
			var a = $(this).index();
			$("body,html").stop().animate({"scrollTop":5000*a},1500,"swing");
			// $("article").removeClass();
			// $("article").eq(a).addClass("on");
			$(".choice_menu").stop().eq(a).addClass("on").siblings().removeClass("on");
			$(".final_price > div").stop().eq(a).addClass("on").siblings().removeClass("on");
		});
// section // section// section// section// section// section// section // section
		// $(".scrollNavi > li").click(function(){
		// 	var scrollNavi_index = $(this).index();
		// 	$(".choice_menu").eq(scrollNavi_index).addClass("on").siblings().removeClass("on");

		// 	console.log(section_index);
		// });

// header // header // header // header // header // header // header // header
			  var $nav_li = $("header > nav > ul > li"),
			  	  $nav_a = $("header > nav > ul > li > a");
			  var $headerHeight = $("header").outerHeight(),	// height = 90px
			  	  $navHeight = $("header > nav").outerHeight(); // height = 150px	  


			  // 헤더
			  $("header").mouseenter(function(){
			  	$("header > nav").stop().addClass("on");
			  }).mouseleave(function(){
			  	// $("header > nav").stop().removeClass("on");
			  	// 정보창 열었을 때 html 밖으로 나갈 시 nav에 on클라스 빠지는 현상 때문에 넣음
			  	if ($(".information > ul > li").hasClass("on")) {
			  		$("header > nav").stop().addClass("on");
			  	}else{
			  		$("header > nav").stop().removeClass("on");
			  	}
			  });

			  //헤더 네비게이션 마우스 이벤트
			  $nav_a.mouseenter(function(){
			  	var i = $(this).parent("li").index(),
			  		$li = i;
			  	$(this).stop().addClass("on");
			 	$("header").stop().animate({height:$navHeight},300);

			 	$nav_li.eq(i).find(".sub_nav").addClass("on");
			 	// $nav_li.eq(i).find(".sub_nav").slideDown();
			 

			 	console.log(i);

			  }).mouseleave(function(){
			  	var i = $(this).parent("li").index(),
			  		$li = i;
			  	$(this).stop().removeClass("on");
			  	$("header").stop().animate({height:"7vh"},300);
			  	$nav_li.eq(i).find(".sub_nav").removeClass("on");
			  	// $nav_li.eq(i).find(".sub_nav").slideUp();

			  });

			  // $("header > nav > ul > li").mouseenter(function(){
			  // 	$(this).stop().find("a").addClass("on"); // border-bottom
			  // 	$("header").stop().animate({height:"150px"},300);
			  // }).mouseleave(function(){
			  // 	$(this).stop().find("a").removeClass("on");
			  // 	$("header").stop().animate({height:"90px"},300);
			  // });


			  // 헤더 서브 네비게이션 마우스 이벤트
			  $(".sub_nav").mouseenter(function(){
			  		var parent_li_index = $(this).parent("li").index();
			  		console.log(parent_li_index);
			  		$nav_a.stop().eq(parent_li_index).addClass("on");
			  		$("header").stop().animate({height:$navHeight},300);
			  		$(this).stop().addClass("on");

			  }).mouseleave(function(){
			  		var parent_li_index = $(this).parent("li").index();
			  		$nav_a.stop().eq(parent_li_index).removeClass("on");
			  		$("header").stop().animate({height:"7vh"},300);
			  		$(this).stop().removeClass("on");
			  });

			  // 헤더 햄버거 버튼 이벤트
			  $(".hamburger").click(function(){
			  	$(this).stop().toggleClass("on").siblings().removeClass("on");

			  	if ($(this).hasClass("on")) {
			  		$(".sub_page").stop().slideDown(300);
			  		$(".sub_page > div").eq(2).show().siblings().hide();
			  	}else{
			  		$(".sub_page").stop().slideUp(300);
			  		$(".ham_page").stop().slideUp();
			  	}
			  });

			  // 햄버거 서브 페이지 안에 span text 이벤트
			  $(".ham_page div > p span").mouseenter(function(){
			  	var $strong = $(this).prevAll("strong");
			  		$strong.stop().addClass("on");

			  }).mouseleave(function(){
			  	var $strong = $(this).prevAll("strong");
			  		$strong.stop().removeClass("on");
			  });

			  // 서브페이지 호버시 네비게이션 바 클라스 추가 ---> 61행에서 해결함
			  // $(".sub_page").mouseenter(function(){
			  // 	$("nav").stop().addClass("on");
			  // }).mouseleave(function(){
			  // 	$("nav").stop().removeClass("on");
			  // });

			  // 유저페이지에서 입력필드 클릭시 on 유저페이지를 닫아도 on되어있는 상태를 해제함
			  // $(".information > p").click(function(){
			  // 	if ($(this).hasClass("")) {
			  // 		$(".user_page > div > span").stop().removeClass("on");
			  // 		$(".user_page > div > span").stop().css({borderBottom:"2px solid #aaa"});
			  // 	}
			  // });


// 유저 페이지 입력필드 클릭시 on 클라스 추가 // 유저 페이지 입력필드 클릭시 on 클라스 추가
		$(".user_page > div > span").click(function(){
			var user_span_idx = $(this).index();
			$(this).stop().css({borderBottom:"none"});
			$(this).stop().addClass("on");

			// if ($(".user").hasClass("on")) {
			// 	$(this).stop().css({borderBottom:"none"});
			// 	$(this).stop().addClass("on");				
			// }else if ($(".user").hasClass()) {
			// 	$(this).stop().css({borderBottom:"2px solid #aaa"});
			// 	$(this).stop().removeClass("on");
			// }
		});

		$(".user").click(function(){
			$(this).stop().toggleClass("on").siblings().removeClass("on");

			if ($(this).hasClass("on")) {
				$(".sub_page").stop().slideDown();
				$(".sub_page > div").eq(0).show().siblings().hide();

			}else{
				$(".sub_page").stop().slideUp();
				$(".user_page").stop().slideUp();

				// 유저페이지에서 입력필드 클릭시 on 유저페이지를 닫아도 on되어있는 상태를 해제함
				$(".user_page > div > span").stop().css({borderBottom:"2px solid #aaa"});
				$(".user_page > div > span").stop().removeClass("on");
				// 유저페이지를 닫아도 체크박스에 체크 되어있는 것을 해체시킴
				$("input[name=user_checkbox]").prop("checked", false);
			}
		});

// 장바구니 페이지 안에 button // 장바구니 페이지 안에 button // 장바구니 페이지 안에 button
		$(".basket_button").mousedown(function(){
			$(this).stop().addClass("on");
		}).mouseup(function(){
			$(this).stop().removeClass("on");
		});

		$(".shopping_basket").click(function(){
			$(this).stop().toggleClass("on").siblings().removeClass("on");

			if ($(this).hasClass("on")) {
				$(".sub_page").stop().slideDown();
				$(".sub_page > div").eq(1).show().siblings().hide();


			}else{
				$(".sub_page").stop().slideUp();
				$(".basket_page").stop().slideUp();
			}
		});




// 사이즈 선택 클릭 이벤트 // 사이즈 선택 클릭 이벤트 // 사이즈 선택 클릭 이벤트
		$(".size_choice > p").click(function(){
			$(this).stop().addClass("on").siblings().removeClass("on");
		});

// 엣지 선택 이벤트 // 엣지 선택 이벤트 // 엣지 선택 이벤트 // 엣지 선택 이벤트 
		$(".edge > p").click(function(){
			var i = $(this).index(),
			    edge_text = $(this).text(),
			    closest = $(this).closest(".edge"),
			    closest1 = closest.closest(".add_edge"),
			    closest2 = closest1.closest(".choice_menu"),
			    closest3 = closest2.index(),
			    closest4 = closest3+1;

			// 블랙알리오스테이크 엣지
			// if ($(this).index()==0) {
			// 	$("section > article").eq(0).css({background:"url(images/pizza1_1.png) no-repeat center",backgroundSize:"contain"});

			// 		$(".price.on ul li .final_edge").text("("+edge_text+")");
			// }else if ($(this).index()==1) {
			// 	$("section > article").eq(0).css({background:"url(images/pizza1_2.png) no-repeat center",backgroundSize:"contain"});

			// 	$(".price.on ul li .final_edge").text("("+edge_text+")");
			// }else if ($(this).index()==2) {
			// 	$("section > article").eq(0).css({background:"url(images/pizza1_3.png) no-repeat center",backgroundSize:"contain"});

			// 	$(".price.on ul li .final_edge").text("("+edge_text+")");
			// }    


			// 와 진짜 이걸 생각을 못해서 1시간 37분 거리네...
// 각 피자의 엣지 부분 이미지 넣기 // 각 피자의 엣지 부분 이미지 넣기
			if ($(this).index()==0 && closest2.index() == closest3) {
				$("section > article").eq(closest3).css({background:"url(images/pizza"+closest4+"_1.png) no-repeat center",backgroundSize:"contain"});

					$(".price.on ul li .final_edge").text("("+edge_text+")");
			}else if ($(this).index()==1 && closest2.index() == closest3) {
				$("section > article").eq(closest3).css({background:"url(images/pizza"+closest4+"_2.png) no-repeat center",backgroundSize:"contain"});

				$(".price.on ul li .final_edge").text("("+edge_text+")");
			}else if ($(this).index()==2 && closest2.index() == closest3) {
				$("section > article").eq(closest3).css({background:"url(images/pizza"+closest4+"_3.png) no-repeat center",backgroundSize:"contain"});

				$(".price.on ul li .final_edge").text("("+edge_text+")");
			}


			// 티본&쉬림프 엣지
			// if ($(this).index()==0 && closest2.index() == closest3) {
			// 	$("section > article").eq(closest2).css({background:"url(images/pizza2_1.png) no-repeat center",backgroundSize:"contain"});

			// 		$(".price.on ul li .final_edge").text("("+edge_text+")");
			// }else if ($(this).index()==1 && closest2.index() == closest3) {
			// 	$("section > article").eq(closest2).css({background:"url(images/pizza2_2.png) no-repeat center",backgroundSize:"contain"});

			// 	$(".price.on ul li .final_edge").text("("+edge_text+")");
			// }else if ($(this).index()==2 && closest2.index() == closest3) {
			// 	$("section > article").eq(closest2).css({background:"url(images/pizza2_3.png) no-repeat center",backgroundSize:"contain"});

			// 	$(".price.on ul li .final_edge").text("("+edge_text+")");
			// }



			console.log(closest2);
		});

// 총 가격 클릭시 장바구니 숫자 올라감.
		$(".price > ul > li:last-child").click(function(e){
			e.preventDefault();
			var basket_text = $(".shopping_basket > span").text(),
				basket_num = parseInt(basket_text, 10);
				basket_num++;
				if (basket_num>10) {
					alert("장바구니 한도 초과!! (10판까지 주문가능합니다.)");
					num==10;
					basket_num;

				}else if (basket_num>0) {
					$(".shopping_basket > span").css({background:"#ba1a23",fontWeight:"bold"});
				}
				$(".shopping_basket > span").text(basket_num);

				// $(this).css({display:"none"});
		});

// 피자 수량 선텍 // 피자 수량 선텍 // 피자 수량 선텍 // 피자 수량 선텍 // 피자 수량 선텍
		 $(".pizza_quantity > .plus").click(function(e){
			    e.preventDefault();
			    var p3_text = $(this).prev(".pizza_quantity_num").text();
			    var num = parseInt(p3_text, 10),
			    	size_on_class = $(".choice_menu.on").find(".size_choice"),
			    	size_on_class1 = size_on_class.find("p.on"),
			    	size_on_class2 = size_on_class1.find("span").eq(1).text().replace(/[^0-9]/g,''),
			    	size_price = parseInt(size_on_class2);


			    	// size_on_class = $(".choice_menu.on").find(".size_choice").find("p.on").eq(1).text().replace(/[^0-9]/g,'')
			    num++;
			    if(num>10){
			       alert("피자는 10판까지 주문이 가능합니다.");
			      num=10;

			     }else if (num<9) {

			     	// 토핑 포함 가격을 고정을 시키지 못해 이슈.
			     	// 어쩔 수 없이 사이즈별로 값을 지정해서 수량을 올릴 수 밖에 없음.
			     	$(".price.on .total_price span").text(num*size_price);
			     }
			    $(this).prev(".pizza_quantity_num").text(num);
			    

			  });

		 // 총 가격의 값을 천단위에 콤마를 찍을려고 했으나 실패...
		 // var ii = $(".price.on").find("ul"),
		 // 	iii = ii.find("li").eq(3),
		 // 	$iiii = iii.find("span");
		 // $iiii.on(function(){
		 // 	 var qq = $(this).text(),
		 // 	 	 qqq = qq.replace(/[^0-9]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		 // 	 	 $(this).text(qqq);
		 // });

			   //감소값
		 $(".pizza_quantity > .minus").click(function(e){
			    e.preventDefault();
			    var p3_text = $(this).next(".pizza_quantity_num").text();
			    var num = parseInt(p3_text, 10),
			    size_on_class = $(".choice_menu.on").find(".size_choice"),
			    	size_on_class1 = size_on_class.find("p.on"),
			    	size_on_class2 = size_on_class1.find("span").eq(1).text().replace(/[^0-9]/g,''),
			    	size_price = parseInt(size_on_class2);
			    num--;
			    if(num<=1){
			      	num=1;
			      	//총 가격
			     	 $(".price.on .total_price span").text(num*size_price);
			    }else if (num > 0) {
			    	//총 가격
			       	$(".price.on .total_price span").text(num*size_price);
			    }
			    $(this).next(".pizza_quantity_num").text(num);

			    console.log(num);
			  });



// 토핑 추가 - div에 이미지 넣기 // 토핑 추가 - div에 이미지 넣기 // 토핑 추가 - div에 이미지 넣기
		var $topping_parent1 = $(".choice_menu.on .topping_slide > div");
			// topping_parent2 = topping_parent1.next(".topping_slide"),
			// $topping_parent3 = topping_parent2.next("div");
		$(".add_topping.on > .topping_slide > div").each(function(idx){
			var $div_img = $(".add_topping.on > .topping_slide > div"),
				idx_p = idx+1;

			//background: #eee url(../images/topping1_1.png);
			//background-position: center top;
			//background-repeat: no-repeat;
			$div_img[idx].style.background = "#eee url(images/topping1_"+idx_p+".png)";
			$div_img[idx].style.backgroundPosition = "center -20px";
			$div_img[idx].style.backgroundRepeat = "no-repeat";
				// console.log($div_img);
				// console.log(idx_p);
		});

// 토핑 추가 - slide이벤트 // 토핑 추가 - slide이벤트 // 토핑 추가 - slide이벤트 
		 var toppingNum = 0,
		 	 div_5 = 768,
		 	 $topping_btn = $(".add_topping > .prev_right"),
		 	 $topping_prev = $topping_btn.find(".prev"),
		 	 $topping_right = $topping_btn.find(".right");

			$topping_right.click(function(){
				if (toppingNum<2) {
					toppingNum++;
					$topping_prev.removeClass("on"); //오른쪽 버튼 누르면 왼쪽버튼 켜짐
				}else{
					toppingNum=3;// 6이상시 --> 0
					$topping_right.addClass("on");

				}
				$(".topping_slide").stop().animate({left:"-"+toppingNum*div_5+"px"},300);
				console.log(toppingNum);

				// $(".topping_slide").

			});
			$topping_prev.click(function(){
				toppingNum--;
				if (toppingNum<1) { //0미만 일때 5번으로
					toppingNum=0;
					$topping_prev.addClass("on");
					$topping_right.removeClass("on");
				}else{
					$topping_prev.removeClass("on");
				}
				$(".topping_slide").stop().animate({left:"-"+toppingNum*div_5+"px"},300);
			});


			//체크박스 2개이상시 alert 경고 메세지
			// $(".topping_slide div").click(function(){
			// 	var checkbox_length = $("input:checkbox[name=checkbox]:checked").length;
			// 		if (checkbox_length>2) {
			// 			alert("토핑은 최대 2개까지만 가능합니다.");
			// 			$(this).find("#checkbox").prop('disabled',false);
			// 		}
			// 		console.log(checkbox_length);
			// });


			 $("input[name='checkbox']").change(function(){
				var checkbox_length = $("input:checkbox[name=checkbox]:checked").length,
					checkbox_length_price = checkbox_length*1000,
					total_price = $(".price.on .total_price span").text().replace(/[^0-9]/g,''),//문자형 숫자
			 		total_parseint = parseInt(total_price),
			 		checkbox_length_0 = total_parseint,
			 		checkbox_length_1 = total_parseint+1000,
			 		checkbox_length_2 = total_parseint+1000;
				if (checkbox_length >2) {
				alert("토핑은 최대 2개까지만 가능합니다.");
				this.checked =false
				}else if (checkbox_length == 0) {
					$(".price.on .total_price span").text(checkbox_length_0);
				}else if (checkbox_length == 1) {
					$(".price.on .total_price span").text(checkbox_length_1);
				}else if (checkbox_length == 2) {
					$(".price.on .total_price span").text(checkbox_length_2);
				}
				
			});



									
									// 사이드 선택
									// 사이드 선택
									// 사이드 선택 - 이미지 넣기
			$(".side_slide > div").each(function(idx){
			var $div_img = $(".side_slide > div"),
				idx_p = idx+1;

			//background: #eee url(../images/topping1_1.png);
			//background-position: center top;
			//background-repeat: no-repeat;
			$div_img[idx].style.background = "#eee url(images/sideimg1_"+idx_p+".png)";
			$div_img[idx].style.backgroundPosition = "center -12px";
			$div_img[idx].style.backgroundRepeat = "no-repeat";
			$div_img[idx].style.backgroundSize = "82%";
				// console.log($div_img);
				// console.log(idx_p);
			});

			// 사이드 선택 - 증가,감소
			 //증가값
			  $(".side_choice .side_up").click(function(e){
			    e.preventDefault();
			    var p3_text = $(this).prev(".side_num").text(),
			    	num = parseInt(p3_text, 10),
			    	total_price = $(".price.on .total_price span").text().replace(/[^0-9]/g,''),
			 		total_parseint = parseInt(total_price); // 총 가격 숫자
				var side_text = $(this).parent("p"),
			     	 side_text2 = side_text.prevAll(".side_text").eq(0).text(),
			     	 side_price = side_text.prevAll("p:nth-of-type(2)"),
			     	 side_price1 = side_price.find("span").text().replace(/[^0-9]/g,''),
			     	 $side = $(".price.on ul li:nth-of-type(2)"),
			     	 $side_span = $side.find("span:nth-of-type(2)");			 		
			    num++;
			    if(num>2){
			       alert("피자 1판당 콤보박스는 2개 또는 할인 사이드 메뉴는 3개 선택 가능합니다.");
			      num=2;
			      //numberValue++;
			    }else if (num <3) {
			    	$(".price.on .total_price span").text(1*side_price1+total_parseint);
			    }
			    $(this).prev(".side_num").text(num);

			     
			     	


			     	console.log(side_price1);
			     	 $(".price.on > ul > li:nth-of-type(2)").find("span:nth-of-type(2)").text(side_text2);

			  });

			   //감소값
			  $(".side_choice .side_minus").click(function(e){
			    e.preventDefault();
			    var p3_text = $(this).next(".side_num").text(),
			    	num = parseInt(p3_text, 10),
			    	total_price = $(".price.on .total_price span").text().replace(/[^0-9]/g,''),
			 		total_parseint = parseInt(total_price);
				var side_text = $(this).parent("p"),
			     	 side_text2 = side_text.prevAll(".side_text").eq(0).text(),
			     	 side_price = side_text.prevAll("p:nth-of-type(2)"),
			     	 side_price1 = side_price.find("span").text().replace(/[^0-9]/g,''),
			     	 $side = $(".price.on ul li:nth-of-type(2)"),
			     	 $side_span = $side.find("span:nth-of-type(2)");			 		
			    num--;
			    if(num<0){
			      num=0;
			      	//총 가격 변경
			      	$(".price.on .total_price span").text(total_parseint-num*side_price1);
			    }else if (num<2) {
			    	//총 가격 변경
			    	$(".price.on .total_price span").text(total_parseint-side_price1);
			    }
			    $(this).next(".side_num").text(num);

			    // total태그 안에 클릭한 세트의 이름을 표시
			    $(".price.on > ul > li:nth-of-type(2)").find("span:nth-of-type(2)").text("");
			  });

			  // 사이드 선택 - 슬라이드
			   var  $side_btn = $(".side_choice > .prev_right"),
		 	 		$side_prev = $side_btn.find(".prev"),
		 	 		$side_right = $side_btn.find(".right");
			  $(".side_choice > .prev_right > .prev").click(function(){
			  	toppingNum--;
				if (toppingNum<1) {
					toppingNum=0;
					$side_prev.addClass("on");
					$side_right.removeClass("on");
				}else{
					$side_right.removeClass("on");
				}
				$(".side_slide").stop().animate({left:"-"+toppingNum*div_5+"px"},300);
			  });
			  $(".side_choice > .prev_right > .right").click(function(){
			  	if (toppingNum<2) {
					toppingNum++;
					$side_prev.removeClass("on");
				}else{
					toppingNum=3;
					$side_right.addClass("on");
				}
				$(".side_slide").stop().animate({left:"-"+toppingNum*div_5+"px"},300);
			  });



			  						// 음료
			  						// 음료
			// 음료 - 이미지 넣기
			$(".drink_slide > div").each(function(idx){
				var $div_img = $(".drink_slide > div"),
					idx_p = idx+1;

				$div_img[idx].style.background = "#eee url(images/drink1_"+idx_p+".png)";
				$div_img[idx].style.backgroundPosition = "center 7px";
				$div_img[idx].style.backgroundRepeat = "no-repeat";
				$div_img[idx].style.backgroundSize = "64%";
			});				  						

			// 음료 - 증가
			 $(".add_drink .side_up").click(function(e){
			    e.preventDefault();
			    var p3_text = $(this).prev(".side_num").text(),
			    	num = parseInt(p3_text, 10),
					total_price = $(".price.on .total_price span").text().replace(/[^0-9]/g,''),
			 		total_parseint = parseInt(total_price); // 총 가격 숫자
			 	var drink_text = $(this).parent("p"),
			     	 drink_text2 = drink_text.prevAll(".drink_text").eq(0).text(),
			     	 drink_price = drink_text.prevAll("p:nth-of-type(2)").text().replace(/[^0-9]/g,''),// 해당 음료의 가격
			     	 $drink = $(".price.on ul li:nth-of-type(3)"),
			     	 $drink_span = $drink.find("span:nth-of-type(2)");	
			    	
			    num++;
			    if(num>10){
			       alert("사이드 & 음료메뉴 10개까지 주문 할수 있습니다.");
			      num=10;
			    }else if (num < 9) {
			    	$(".price.on .total_price span").text(1*drink_price+total_parseint);
			    }
			    $(this).prev(".side_num").text(num);

			     


			     	 $(".price.on > ul > li:nth-of-type(3)").find("span:nth-of-type(2)").text(drink_text2); // 선택한 음료&기타에 표시

			      console.log(drink_price); 


			  });

			   //감소값
			  $(".add_drink .side_minus").click(function(e){
			    e.preventDefault();
			    var p3_text = $(this).next(".side_num").text(),
			    	num = parseInt(p3_text, 10),
			    	total_price = $(".price.on .total_price span").text().replace(/[^0-9]/g,''),
			 		total_parseint = parseInt(total_price);
			 	var drink_text = $(this).parent("p"),
			     	 drink_text2 = drink_text.prevAll(".drink_text").eq(0).text(),
			     	 drink_price = drink_text.prevAll("p:nth-of-type(2)").text().replace(/[^0-9]/g,''),// 해당 음료의 가격
			     	 $drink = $(".price.on ul li:nth-of-type(3)"),
			     	 $drink_span = $drink.find("span:nth-of-type(2)");	
			    num--;
			    if(num<0){
			      num=0;
			      	$(".price.on .total_price span").text(total_parseint-num*drink_price);
			    }else if (num<10) {
			       	$(".price.on .total_price span").text(total_parseint-drink_price);
			    }
			    $(this).next(".side_num").text(num);

			     	 $(".price.on > ul > li:nth-of-type(3)").find("span:nth-of-type(2)").text("");
			  });

			  // 음료 - 슬라이드
			  	var $drink_btn = $(".add_drink > .prev_right"),
		 	 		$drink_prev = $drink_btn.find(".prev"),
		 	 		$drink_right = $drink_btn.find(".right");
			   $(".add_drink > .prev_right > .prev").click(function(){
			  	toppingNum--;
				if (toppingNum<1) {
					toppingNum=0;
					$drink_right.removeClass("on");
					$drink_prev.addClass("on");
				}else{
					$drink_prev.addClass("on");
				}
				$(".drink_slide").stop().animate({left:"-"+toppingNum*div_5+"px"},300);
			  });
			  $(".add_drink > .prev_right > .right").click(function(){
			  	if (toppingNum<1) {
					toppingNum++;
					
				}else{
					toppingNum=2;
					$drink_prev.removeClass("on");
					$drink_right.addClass("on");
				}
				$(".drink_slide").stop().animate({left:"-"+toppingNum*div_5+"px"},300);
			  });

			 

			  var choice_menu_on = $(".choice_menu.on > .pizza_add"),
			  	  choice_menu_on_div = choice_menu_on.find("p").children("span");
			  $(".pizza_add > p > span").click(function(){
			  		var i = $(this).index();
			  		console.log(i);

			  		$(this).stop().addClass("on").siblings().removeClass("on");
			  		$(".choice_menu.on > .pizza_add > div").stop().eq(i).addClass("on").siblings().removeClass("on");
			  });



// final_price // final_price // final_price // final_price // final_price




// 총 가격 // 총 가격 // 총 가격 // 총 가격 // 총 가격 // 총 가격 // 총 가격 // 총 가격 
			// var total_price = $(".price.on .total_price span").text().replace(/[^0-9]/g,''),
			//  	total_parseint = parseInt(total_price); // 총 가격 숫자

			 	// total_price = $(".price.on .total_price span").text().replace(/[^0-9]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			// 사이즈 선택 클릭시 총 가격 번경 완료		
			var $size1 = $(".choice_menu"),
			 	$size2 = $size1.find(".size_choice"),
			 	$size3 = $size2.find("p");

			$size3.click(function(){
			   var total_price = $(".price .total_price span").text().replace(/[^0-9]/g,''),
			 		total_parseint = parseInt(total_price),
			   	   size_price= $(this).find("span").eq(1).text().replace(/[^0-9]/g,''),
			   	   size_parseint = parseInt(size_price); // 사이즈 가격 숫자만

			   	   $(this).addClass("on");
			   	$(".price.on .total_price > span").text(size_price);
			   console.log(size_price);
			});
			// 토핑 선택 클릭시 총 가격 번경 완료
			var $topping1 = $(".choice_menu.on"),
			 	$topping2 = $topping1.find(".pizza_add"),
			 	$topping3 = $topping2.find(".add_topping.on"),
			 	$topping4 = $topping3.find(".topping_slide"),
			 	$topping5 = $topping4.find("div"),
			 	$topping6 = $topping5.find("p:nth-of-type(2)");

			$topping6.click(function(){

				// 체크박스에 체크가 되면 텍스트의 숫자만 가져온다.
				var total_price = $(".price.on .total_price span").text().replace(/[^0-9]/g,''),//문자형 숫자
			 		total_parseint = parseInt(total_price), // 숫자형
					topping_price = $(this).find("input:checkbox[name=checkbox]:checked").prev("p").text().replace(/[^0-9]/g,''),
					topping_parseint = parseInt(topping_price),
					topping_total = topping_parseint+total_parseint;
					
				


				$(".price.on .total_price").text("총 1개 "+topping_total+"원 담기");
				console.log(topping_price);
				
				// 토핑 2개 추가시 총 가격 오류 이슈!!!!!!!!!!!!!!!!!!!!!
			});

			

			// $(".price.on .total_price span").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});