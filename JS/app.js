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
 });
 

 //********
 //Scroll hide header
 //********

 $(document).ready(function() {
        
  var load_flag = true;
  $(document).scroll(function() {
      
      var mywindow = $(window);
      var mypos = mywindow.scrollTop();
      var up = false;
      var newscroll;

      mywindow.scroll(function () {
          newscroll = mywindow.scrollTop();
          if (newscroll > (mypos) && !up) {
              $('header').fadeOut();
              up = !up;
              console.log(up);
          } else if(newscroll < (mypos) && up) {
              $('header').fadeIn();
              up = !up;
          }
          mypos = newscroll;
      });
  });
});
//************
// legacy Scroll Hide Animation 5-31-2022
//************

// $(window).scroll(function checkScrollDirection(event) {

//   let scrollableElement = globalThis; //document.getElementById('scrollableElement');

//   }
//   scrollableElement.addEventListener('wheel', checkScrollDirection);

//   if (checkScrollDirectionIsUp(event)) {
//          console.log('Up');
//          $('header').show(500);

              
//    }
//    else {
//        console.log('Down');
//        $('header').show(500);
 
//    }
//  })
 
//  function checkScrollDirectionIsUp(event) {
//    if (event.wheelDelta) {
//      return event.wheelDelta > 0;
//    }
//    return event.deltaY < 0;
//  }

  //********
 //Return to Top button
 //********
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
    $(".navbar").show(500);
    $(".header").show(500);
    }




 //Typewriter Animation
 //
 //
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


//********
//Home Page Card Fill Automation
//********

$(".clickCard").on('click tap', function(e){   
    e.preventDefault();
    $('.showCard').css('z-index', '0');
    $('.showCard.activeC').css('z-index', '3');
    $('.showCard').removeClass('activeC');
    $($(this).attr('href')).addClass('activeC');
});
