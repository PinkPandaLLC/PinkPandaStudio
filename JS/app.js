// import bootstrap from "bootstrap";

// alert('linked);





// const contactbtn = document.getElementById('toggleContactButton');

// contactbtn.addEventListener('click', () => {
//     const form = document.getElementById('contactUsForm');

//     if (form.style.display === 'none') {
//         // displays the form
//         form.style.display = 'block';
//     } else {
//         // Hides the form
//         form.style.display = 'none';
//     }
// });

//******** 
//Page Buttons
//********

$("button").click(function(){
  let btnId = $(this).attr("id");
  console.log(btnId);
     if (btnId === 'hmbtn1'){
     location.href = 'studio.html';
     }
     else if(btnId === 'hmbtn2'){
     location.href = 'contact.html';
     }
     else if(btnId === 'btn3'){
     location.href = 'index.html';
     }
 });
 

 //********
 //Scroll hide header
 //********
 
 let scrollableElement = globalThis; //document.getElementById('scrollableElement');
 
 scrollableElement.addEventListener('wheel', checkScrollDirection);
 
 function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
         console.log('Up');
         $(".navbar").show(500);
         $(".header").show(500);
              
   }
   else {
       console.log('Down');
       $(".navbar").hide(500);
       $(".header").hide(500);
 
   }
 }
 
 function checkScrollDirectionIsUp(event) {
   if (event.wheelDelta) {
     return event.wheelDelta > 0;
   }
   return event.deltaY < 0;
 }

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
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
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




//  //Typewriter Animation
//  //
//  //
//  (function ($) {
//    function typeString($target, str, cursor, delay, cb) {
//      $target.html(function (_, html) {
//        return html + str[cursor];
//      });
     
//      if (cursor < str.length - 1) {
//        setTimeout(function () {
//          typeString($target, str, cursor + 1, delay, cb);
//        }, delay);
//      }
//      else {
//        cb();
//      }
//    }
//    $.fn.extend({
//      teletype: function (opts) {
//        var settings = $.extend({}, $.teletype.defaults, opts);
       
//        return $(this).each(function () {
//          (function loop($tar, idx) {
//            // type
//            typeString($tar, settings.text[idx], 0, settings.delay, function () {
             
//            });
         
//          }($(this), 0));
//        });
//      }
//    });
 
//    // plugin defaults  
//    $.extend({
//      teletype: {
//        defaults: {
//          delay: 100,
//          pause: 5000,
//          text: []
//        }
//      }
//    });
//  }(jQuery));
 
//  $('#target').teletype({
//    text: [
//      'Professional Website Development'
//    ]
//  });
 
//  $('#cursor').teletype({
//    text: ['_', ' '],
//    delay: 0,
//    pause: 500
//  });