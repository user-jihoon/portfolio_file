$(document).ready(function(){
	// alert("123");

	$(".banner_control div a").click(function(e){
		e.preventDefault();
	});
	$(".article10 a").click(function(e){
		e.preventDefault();
	});
	$(".sns a").click(function(e){
		e.preventDefault();
	});
						//배너 fadeIn 이벤트



var timer = setInterval(fadeChange,3000);
$(".banner").children(".banner_img:gt(0)").stop().hide();
 	var current = 0;
 	function fadeChange(){
   
 	var next = (current + 1) % 3;
 	$(".banner").stop().find(".banner_img").eq(current).fadeOut();
 	$(".banner").stop().find(".banner_img").eq(next).fadeIn().addClass("open").siblings().removeClass("open");
 	$(".banner_control").stop().children().eq(next).addClass("on").siblings().removeClass("on");
 	
 	 current = next;
 	
 }//function fadeChange()
		


// $(".banner").mouseenter(function(){
// 	clearInterval(timer);
// }).mouseleave(function(){
// 	timer = setInterval(fadeChange,3000);	
// });

		

		                		//배너 컨트롤

		$(".banner_control div").click(function(){
			var index = $(this).index();
			$(".banner_img").eq(index).stop().fadeIn().siblings(".banner_img").fadeOut();
			$(this).stop().addClass("on").siblings().removeClass("on");
			current=index;
		});



	// 탑 버튼 제이쿼리
$(window).scroll( function() {
 if($(document).scrollTop() < 50){
	  
	$('.to_top').hide();
	  }else{
	  	$('.to_top').show(400);
	  } 
	});

	$(".to_top").click(function(){
		$(window).scrollTop(0);
	});


			//article5 좌,우 버튼 동작 이벤트
 	var num = 0;
 	$(".mobile_button_left").click(function(){
 		num --;
 		if (num < 0) {num=3}
 		$(".img_article5 ul li").eq(num).stop().fadeIn().siblings().fadeOut();
 	});

 	$(".mobile_button_right").click(function(){
 		num ++;
 		if (num > 3) {num=0}
 		$(".img_article5 ul li").eq(num).stop().fadeIn().siblings().fadeOut();
 	});



 	// $(".mobile-menu-open button").on("click",function(){
		// 	$(".side_layout").animate({"left":"0px"},600);
		// 	$(".mobile-menu-close").animate({"left":"500px"},600).css({"opacity":"1"});
		// });

		// $(".mobile-menu-close button").on("click",function(){
		// 	$(".side_layout").animate({"left":"-500px"},600);
		// 	$(".mobile-menu-close").animate({"left":"0px"},600).css({"opacity":"0"});
			
		// });

	

	// 모바일 상태 햄버거 버튼 	
 	$(".mobile_open_btn").click(function(){
 		$(".side_layout").animate({"left":"0px"},600);
 		$(".mobile_close_btn").addClass("on");


 		//사이드메뉴 닫기 버튼이 fixed인데 웹과 모바일 위치가 다르기 때문에 설정
 		var side_layout = $(".side_layout").width();
 		console.log(side_layout);
 		$(".mobile_close_btn").stop().css({left:side_layout-38+"px"}).animate({opacity:"1"},1000);

 	});

	$(".mobile_close_btn").click(function(){
		$(".side_layout").animate({"left":"-500px"},600);
		$(this).removeClass("on").css({opacity:0});
	});



		// 카운트 다운 
    var num = 60 * 3; // 몇분을 설정할지의 대한 변수 선언
    var myVar;
    function time(){
        myVar = setInterval(alertFunc, 1000); 
    }
    time();
 
    function alertFunc() {
        var min = num / 60; 
        min = Math.floor(min);
         
        var sec = num - (60 * min);
        // console.log(min)
        // console.log(sec)
 
        var $input = $('.input').val(min + ':' + sec).css({"color":"#00008B"});
 
        if(num == 0){
            clearInterval(myVar) // num 이 0초가 되었을대 clearInterval로 타이머 종료
        }
        num--;
    }

    $("#wrap div:nth-of-type(1) button").click(function(){
    	$("#wrap div:nth-of-type(2)").css({"opacity":"1"});
    });


    

});





// <iframe id="iframeHero1102480" width="100%" height="5000px" frameborder="0" data-src="https://www.youtube.com/embed/SQrITI-aAXA?enablejsapi=1&amp;loop=1&amp;playlist=SQrITI-aAXA" src="https://www.youtube.com/embed/SQrITI-aAXA?enablejsapi=1&amp;loop=1&amp;playlist=SQrITI-aAXA" style="overflow: hidden;position: absolute;top: 50%;margin-top: -2500px;"></iframe>