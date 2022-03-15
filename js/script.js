// alert(13);
$(document).ready(function(){

  if($(this).width()<=767){
    $("body").stop().removeClass();
    $("body").stop().addClass("mobile");
  }else{
    $("body").stop().removeClass();
    $("body").stop().addClass("pc tablet");
  }

  $(window).resize(function(){
    if($(this).width()<=767){
      $("body").stop().removeClass();
      $("body").stop().addClass("mobile");
    }else{
      $("body").stop().removeClass();
      $("body").stop().addClass("pc tablet");
    }
  });


  let typingIdx=0; 
  let typingTxt = "안녕하세요. 끊임없이 노력하는 강지훈입니다. "; 
  typingTxt=typingTxt.split("");
    
  let tyInt = setInterval(typing,150);   
  function typing(){ 
  if(typingIdx<typingTxt.length){  
    $(".text").append(typingTxt[typingIdx]);
    typingIdx++; 
    } else{  
    clearInterval(tyInt); 
    } 
  }  

  $(window).scroll(function(){
    let scroll_top = $(this).scrollTop();
    let scroll_bottom = $(this).scrollTop()+$(window).height();

    console.log(scroll_bottom);

    $(".portfolio_wrap").each(function(){
      let this_top = $(this).offset().top;

      if(scroll_top > this_top-170){
        $(this).stop().addClass("on");
      }else{
        // $(this).stop().removeClass("on"); 
      }
    });
    
    $("article").each(function(){
      let article_top = $(this).offset().top;
      if(scroll_bottom > article_top){
        $(this).stop().addClass("on");
      }
    });

  });
  
  $("nav ul li").click(function(){
    let window_height = $(window).height();
    let li_idx = $(this).index();
    let article_T = $("article").eq(li_idx).offset().top;

    $("html").stop().animate({scrollTop:article_T});

      if(li_idx == 2){
        let skill_height = (window_height - $("#skills").outerHeight(true)) /2;
            $("html").stop().animate({scrollTop:article_T-skill_height});
      }

    $("#hamburger").stop().removeClass("on");
    $(".mobile_nav").stop().removeClass("on");
  });

  $("#hamburger").click(function(){
    $(this).stop().toggleClass("on");
    if($(this).hasClass("on")){
      $(".mobile_nav").stop().addClass("on");
    }else{
      $(".mobile_nav").stop().removeClass("on");
    }
    
  });

});