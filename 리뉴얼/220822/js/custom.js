$(document).ready(function(){

//slide menu
  $('nav ul.gnb > li').mouseenter(function(){
    $(this).children('div.submenu').stop().slideDown();
  })
  $('nav ul.gnb > li').mouseleave(function(){
    $(this).children('div.submenu').stop().slideUp();
  })
//image slide
setInterval(function(){
  $('figure ul').animate({
    top : '-300px'
  },600,function(){
    $('figure ul').append($('figure ul li').eq(0));
    $('figure ul').css({top:0});
  });
},3000);

//gararry
$('div.nav ul.gnb li').mouseenter(function(){
  $('div.nav ul.gnb li ul').stop().slideDown();
});
$('div.nav ul.gnb li').mouseleave(function(){
  $('div.nav ul.gnb li ul').stop().slideUp();
});
//gararry 슬라이드
setInterval(function(){
  $('section article.gallery ul').animate({
    left:'-1200px'
  },600,function(){
    $('div#slide ul').append($('section article.gallery ul li').eq(0));
    $('div#slide ul').css({left:0})
  })
},3000);
//popup
$('article.notice ul li.pop').click(function(){
  $('div#popup_wrap').fadeIn();
})
$('div#popup div.close').click(function(){
  $('div#popup_wrap').fadeOut();
})

});