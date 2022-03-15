$(document).ready(function(){

	//size = 20 = article의 갯수
	var numAc = $("article").size();
	// var numAc = $("article").length;
	// console.log(numAc);

	var article_width1 = $("article").width();
	var article_width2 = $("article").innerWidth();
	var article_width3 = $("article").outerWidth();
	var article_width4 = $("article").outerWidth(true);

	console.log(article_width1);
	console.log(article_width2);
	console.log(article_width3);
	console.log(article_width4);
	// 3960
	var widSec = article_width4*numAc;
	console.log(widSec);
	// p 사이즈 만큼 section의 width 값을 더 해준다.
	var widTotal = widSec+1000;

	$("section").width(widTotal);


	// section의 width값을 body의 height값으로 적용 시킨다.
	$("body").height(widSec);
	//맨처음 왼쪽에서 오른쪽으로 이동
	$("html,body").animate({"scrollTop":widSec},600);

	$(window).on("scroll",function(){
		var scroll = $(this).scrollTop();
		$("section").stop().animate({"left":-scroll},600);

		console.log(scroll);
	});
	

	// alert("123");
	$("article h2").on("click",function(e){
		e.preventDefault();

		// index = 19 = image20
		//         this(article h2).parent(article).index()
		var index = $(this).parent().index()-1;
		//      this(article h2)에 동생 <a>태그에 속성 href 값을 = src
		var src = $(this).children("a").attr("href");

		//          article_width*19
		var posAc = article_width4*index; // 20행

		$("article").removeClass("on");
		$(this).parent().addClass("on");
		$("article p img").attr({"src":""});
		$(this).siblings("p").children("img").attr({"src":src});

		$("html,body").scrollTop(posAc);

		console.log(index);
		console.log(article_width4);
	});

	// close - click시 article -> removeClass("on")
	$("span").on("click",function(){
		$("article").removeClass("on");
	});

	$("#nevi li").on("click",function(e){
		e.preventDefault();
		// i = 0,1,2,3
		var i = $(this).index();
		var posNavi = 1000*i;

		$("#nevi li, article").removeClass();
		$(this).addClass("on");

		$("html,body").stop().scrollTop(posNavi);
	});
});