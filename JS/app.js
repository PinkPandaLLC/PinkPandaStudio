//******** 
//Page Buttons
//********

$("button").click(function(){
  let btnId = $(this).attr("id");
  console.log(btnId);
     if (btnId === 'hm_studiobtn'){
     location.href = 'studio.html';
     }
     else if(btnId === 'hm_learnBtn'){
     location.href = 'services.html';
     }
     else if(btnId === 'hm_aboutBtn'){
       location.href = 'about.html';
      }
      else if(btnId === 'hm_ppwBtn'){
        location.href = '404.html';
      }
     else if(btnId === 'hm_showCasebtn'){
      location.href = 'studio.html';
      }
 });
 

 //********
 //Scroll hide header
 //********

 $(document).ready(function() {
        
 
  $(document).scroll(function() {
      
      var mywindow = $(window);
      var mypos = mywindow.scrollTop();
      var up = false;
      var newscroll;
      var phonesize = $( window ).width();
 
        if ( phonesize >= 1366)
          
        mywindow.scroll (function () {

        newscroll = mywindow.scrollTop();

            if (newscroll > (mypos) && !up) {
                $('header').fadeOut();
                up = !up;
            } else if(newscroll < (mypos) && up) {
                $('header').fadeIn();
                up = !up;
            } 
            mypos = newscroll;
        
        });
      });
    });


//****************
//Return to Top button
//****************
    //Get the button
    let topButton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
    scrollFunction();
    };

    function scrollFunction() {
    if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
    ) {
    topButton.style.display = "block";
    } else {
    topButton.style.display = "none";
    }
    }
    // When the user clicks on the button, scroll to the top of the document
    topButton.addEventListener("click", backToTop);

    function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $("header").show(500);
    }



//****************
//Typewriter Animation
//****************
$(document).ready 
 (function ($) {
   function typeString($target, str, cursor, delay, cb) {
     $target.html(function (_, html) {
       return html + str[cursor];
     });
     
     if (cursor < str.length - 1) {
       setTimeout(function () {
         typeString($target, str, cursor + 1, delay, cb);
       }, delay);
     }
     else {
       cb();
     }
   }
   $.fn.extend({
     teletype: function (opts) {
       var settings = $.extend({}, $.teletype.defaults, opts);
       
       return $(this).each(function () {
         (function loop($tar, idx) {
           // type
           typeString($tar, settings.text[idx], 0, settings.delay, function () {
             
           });
         
         }($(this), 0));
       });
     }
   });
 
   // plugin defaults  
   $.extend({
     teletype: {
       defaults: {
         delay: 100,
         pause: 5000,
         text: []
       }
     }
   });
 }(jQuery));
 
 $('#target').teletype({
   text: [
     'Professional Web Development'
   ]
 });
 
 $('#cursor').teletype({
   text: ['_', ' '],
   delay: 0,
   pause: 500}
   );

 
//****************
//Home Page Card Swap
//****************
$( document ).ready(
$(".clickCard").on('click tap', function(e){   
    e.preventDefault();
    $('.showCard').css('z-index', '0');
    $('.showCard.activeC').css('z-index', '3');
    $('.showCard').removeClass('activeC');
    $($(this).attr('href')).addClass('activeC');
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#cardService").offset().top
    }, 0);
}));

//****************
// Hiding Textarea label when text is present in box
//****************
$( "textarea" ).click(function() {

  $(".st_labelTA").addClass( "hide" );

  $("#floatingTextarea").blur(function(){

    $(".st_labelTA").removeClass( "hide" );

  });

    $("#floatingTextarea").focus(function(){

   

    $(".st_labelTA").addClass( "hide" );

  });

});

// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    images.style.width = 'fit-content';
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
