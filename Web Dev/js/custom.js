 //Make menu bar fixed after scroll
var navPositionY = $('.menubar').offset().top;

function logScroll() {

  if ($(window).scrollTop() >= navPositionY) {
    //console.info('DOWN square '+ squarePositionY+ ' window scroll:' +$(window).scrollTop() );
    $('.menubar')
      .css('position', 'fixed')
      .css('top', '0')
      .css('left', '0')
      .css('width', '100%')
  } else {
    //console.info('UP square '+ squarePositionY+ ' window scroll:' +$(window).scrollTop() );
    $('.menubar')
      .css('position', 'relative')

  }
}

window.onscroll = logScroll;
//Make menu bar fixed after scroll-END

 //Expand-collapse images
 var currentImage;
 var counter = 0;

 $( ".galleryImage" ).click(function(event) {
   //console.info (e);
   if(counter%2 == 0){
      $(event.target)
      .css('position','fixed')
      .css('z-index', '2')
      .css('cursor', 'pointer')

      .animate({
         width:"70%",
         height:"70%",
         margin:0,
         top:0,
         left:0,

       }, 900)
      .clearQueue();
      counter += 1;
  } else {
      $(event.target)
      .css('position', 'relative')
      .css('z-index', '1')
      .css('cursor', 'pointer')

      .animate({
        width:"250px",
        height: "250px",
      }, 900);
      .clearQueue();
      counter += 1;
  }
 });
 //Expand-collapse images-END

 //Experimental

 //Experimental-END
