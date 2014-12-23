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

//GOTB Slideshow//
var imgs = [], x=-1;
imgs[0] = "images/gotb.png";
imgs[1] = "images/gotb2.png";
imgs[2] = "images/gotb3.png";
imgs[3] = "images/gotb4.png";
imgs[4] = "images/gotb5.png";
imgs[5] = "images/gotb6.png";

function displayNextImage() {
  if($(".cycle").is(":visible")) {
      x = (x === images.length - 1) ? 0 : x + 1;
    $(".cycle").fadeOut("1000", function() {
       $(".cycle").css("background-image", "url("+images[x]+")").fadeIn(1000);
    });
}
  x = (x === images.length - 1) ? 0 : x + 1;
  $("#gotbBox .pic").fadeOut("1000", function() {
    $(this).attr("src", imgs[x]).fadeIn(1000);
  });
}

$(document).ready(function startTimer() {
      setInterval(displayNextImage, 8000);
});


//Pretty Scroll//
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
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
    $('#gotbBox .pic').css('height', height/2);
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

function toggleBbbsOverlay(){
  if ($('#bbbsBox').css('display')=="block") {
    $('#bbbsBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#bbbsBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#bbbsBox').css('height', height);
    $('#bbbsBox').css('width', width);
    $("html, body").scrollTop($('#bbbsBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

function toggleCommOverlay(){
  if ($('#commBox').css('display')=="block") {
    $('#commBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#commBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#commBox').css('height', height);
    $('#commBox').css('width', width);
    $("html, body").scrollTop($('#commBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

function toggleRflOverlay(){
  if ($('#rflBox').css('display')=="block") {
    $('#rflBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#rflBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#rflBox').css('height', height);
    $('#rflBox').css('width', width);
    $("html, body").scrollTop($('#rflBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

function toggleMtwOverlay(){
  if ($('#mtwBox').css('display')=="block") {
    $('#mtwBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#mtwBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#mtwBox').css('height', height);
    $('#mtwBox').css('width', width);
    $("html, body").scrollTop($('#mtwBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

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