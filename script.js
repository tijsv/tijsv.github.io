$(function(){

  AOS.init({
    offset: 50,
    duration: 1000,
    easing: 'ease',
    delay: 250,
  });

  function fixed(){
    $('.absolute').css('position','fixed').css('background-color','rgba(251,255,185,1)').css('top','-100px').css('opacity','0');
    $('.absolute').animate({
      top:'0px',
      opacity:'1',
    },400);
  };

  function absolute(){
    $('.absolute').animate({
      top:'-100px',
      opacity:'0',
    },400);
    $('.absolute').css('position','absolute');
    setTimeout(function(){
      $('.absolute').css('background-color','rgba(255,255,255,0)');
    },400);
    $('.absolute').animate({
      top:'0px',
      opacity:'1',
    },400);
  };

  var count = 0;
  $(window).scroll(function() {
    if ( $(window).scrollTop() > 300 & count === 0 ) { 
      fixed();
      count = count + 1;
    } else if ( $(window).scrollTop() === 0 & count === 1 ) {
      absolute();
      count = count - 1;
    }
  });


  // menu icon animation on click

  $('.menu-icon').on('click', function(){
    $('.menu-icon').toggleClass("animate-line");
    if ($('.header ul').css('opacity') == 0) {
      $('.header ul').animate({
        opacity: 1,
        paddingLeft: 20,
      },500);
    } else {
      $('.header ul').animate({
        opacity: 0,
        paddingLeft: 0,
      },500);
    }
  });

});



