//Scale cover photo//
$(document).ready(function() {
   var windowHeight = $(window).height();
   var $imageWrapper = $('.resizable');
   $imageWrapper.height( windowHeight );
    });

// Change the cover photo on window resize//
$(window).resize(function() {
   var windowHeight = $(window).height();
   var $imageWrapper = $('.resizable');
   $imageWrapper.height( windowHeight );
});



//Remove Logo On Scroll//
$(document).ready(function() {
  $(window).scroll(function() {
   var height = $('.cycle').height()-60,
       scroll = $(this).scrollTop();
   if (scroll > (height)){
       $(".logo").css("visibility","hidden");
       $(".nav").css("margin-top","-90px");
   } else {
       $(".logo").css("visibility","visible");
       $(".nav").css("margin-top","0px");
   }
});
});




//Homepage Slideshow//

var images = [], x = -1;
images[0] = "images/gotb.png";
images[1] = "images/formal.png";
images[2] = "images/gotb2.png";
images[3] = "images/brothers.png";

function displayNextImage() {
  if($(".cycle").is(":visible")) {
      x = (x === images.length - 1) ? 0 : x + 1;
    $(".cycle").fadeOut("1000", function() {
       $(".cycle").css("background-image", "url("+images[x]+")").fadeIn(1000);
    });
}
}

$(document).ready(function startTimer() {
      setInterval(displayNextImage, 8000);
});



//Toggling Boxes//

function toggleGotbOverlay(){
  if ($('#gotbBox').css('display')=="block") {
    $('#gotbBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#gotbBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#gotbBox').css('height', height);
    $('#gotbBox').css('width', width);
    $("html, body").scrollTop($('#gotbBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

function toggleTgbOverlay(){
  if ($('#tgbBox').css('display')=="block") {
    $('#tgbBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#tgbBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#tgbBox').css('height', height);
    $('#tgbBox').css('width', width);
    $("html, body").scrollTop($('#tgbBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



//underline scroll//

  $(window).scroll(function() {

   var hT = $('#fill1').offset().top,
       wS = $(this).scrollTop();
   if (wS > hT-20){
       $(".n1").css("text-decoration","underline");    
       $(".n2").css("text-decoration","none");    
       $(".n3").css("text-decoration","none");    
       $(".n4").css("text-decoration","none");    
       $(".n5").css("text-decoration","none");    
} else {
       $(".n1").css("text-decoration","none");
   }

       hT = $('#fill2').offset().top,
       wS = $(this).scrollTop();
   if (wS > hT-20){
       $(".n2").css("text-decoration","underline");    
       $(".n1").css("text-decoration","none");    
       $(".n3").css("text-decoration","none");    
       $(".n4").css("text-decoration","none");    
       $(".n5").css("text-decoration","none");   
   } else {
       $(".n2").css("text-decoration","none");
   }

       hT = $('#fill3').offset().top,
       wS = $(this).scrollTop();
   if (wS > hT-20) {
       $(".n3").css("text-decoration","underline");    
       $(".n1").css("text-decoration","none");    
       $(".n2").css("text-decoration","none");    
       $(".n4").css("text-decoration","none");    
       $(".n5").css("text-decoration","none");   
   } else {
       $(".n3").css("text-decoration","none");
   }

       hT = $('#fill4').offset().top,
       wS = $(this).scrollTop();
   if (wS > hT-20) {
       $(".n4").css("text-decoration","underline");    
       $(".n1").css("text-decoration","none");    
       $(".n2").css("text-decoration","none");    
       $(".n3").css("text-decoration","none");    
       $(".n5").css("text-decoration","none");   
   } else {
       $(".n4").css("text-decoration","none");
   }
       hT = $('#fill5').offset().top,
       wS = $(this).scrollTop();
   if (wS > hT-20) {
       $(".n5").css("text-decoration","underline");    
       $(".n1").css("text-decoration","none");    
       $(".n2").css("text-decoration","none");    
       $(".n3").css("text-decoration","none");    
       $(".n4").css("text-decoration","none");   
   } else {
       $(".n5").css("text-decoration","none");
   }

});