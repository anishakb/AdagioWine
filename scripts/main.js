jQuery(function($) {

    var windowWidth =$("body").width();

    /*
    |----------------------------------------------------------------
    | Hide/Show Header
    |----------------------------------------------------------------
    */
    // var didScroll;
    // var lastScrollTop = 0;
    // var delta = 5;
    // var navbarHeight = $('header').outerHeight();

    // $(window).scroll(function(event){
    //     didScroll = true;
    // });

    // function hasScrolled() {
    //     var st = $(this).scrollTop();

    //     if(Math.abs(lastScrollTop - st) <= delta) {
    //       return;
    //     }

    //     if (st > lastScrollTop && st > navbarHeight){
    //         $('header').removeClass('header-down').addClass('header-up');
    //     } 
    //     else {
    //         if(st + $(window).height() < $(document).height()) {
    //             $('header').removeClass('header-up').addClass('header-down');
    //         }
    //     }
    //     lastScrollTop = st;
    // }

    // setInterval(function() {
    //     if(didScroll) {
    //         hasScrolled();
    //         didScroll = false;
    //     }
    // }, 250);

    /*
    |--------------------------------------------------------
    | Navigation
    |--------------------------------------------------------
    */

    const targetElement = document.querySelector(".gn");
    bodyScrollLock.disableBodyScroll(targetElement);
    bodyScrollLock.enableBodyScroll(targetElement);

 
   $(".gn-trigger").on("click", function(event){
        event.preventDefault();
        if($(this).hasClass("is-active")){
            $(this).removeClass("is-active");
            $(".gn").slideUp();
            bodyScrollLock.enableBodyScroll(targetElement);
        } else {
            $(this).addClass("is-active"); 
            $(".gn").slideDown();
            bodyScrollLock.disableBodyScroll(targetElement);
        }
   });

   $(window).resize(function() {
    windowWidth =$("body").width();
    if(windowWidth > 676 && $(".gn-trigger").hasClass("is-activate")) {
        setTimeout(function(){
        $(".gn-trigger").removeClass("is-active");
        $(".gn").slideUp(0);
        }, 200);
        bodyScrollLock.enableBodyScroll(targetElement);

            }
        });
   });
   /*
    |----------------------------------------------------------------
    | Smooth scroll
    |----------------------------------------------------------------
    */

   $("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){
          window.location.hash = hash;
        });
    } 
});

    /*
    |--------------------------------------------------------
    | Lightbox
    |--------------------------------------------------------
    */

   jQuery(function($) {
    var lightbox = new SimpleLightbox('.gallery a',);

});


    /*
    |--------------------------------------------------------
    | masonry
    |--------------------------------------------------------
    */
    jQuery(function($) {
        $('.grid').masonry({ 
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer',       
          })
    
    $grid.imagesLoades().progress(function(){
      $grid.masonry();
    });
    });

/*
|------------------------------------------
|  Go to Top Button
|------------------------------------------
*/


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



    