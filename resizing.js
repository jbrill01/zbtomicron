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
images[0] = "gotb.png";
images[1] = "formal.png";
images[2] = "gotb2.png";
images[3] = "brothers.png";

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
