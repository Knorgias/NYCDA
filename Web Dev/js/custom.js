var navPositionY = $('.menubar').offset().top;

function logScroll(){

console.log($(window).scrollTop());		
console.info ($('.square').offset().top);
  
  if ($(window).scrollTop() >= navPositionY){
     //console.info('DOWN square '+ squarePositionY+ ' window scroll:' +$(window).scrollTop() );
    $('.menubar')
      .css ('position','fixed')
      .css('bottom','0')
      .css ('left','0')
  }
  else{
     //console.info('UP square '+ squarePositionY+ ' window scroll:' +$(window).scrollTop() );
    $('.menubar')
     .css ('position','relative')
   
  }
}



 window.onscroll = logScroll;