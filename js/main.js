$(function(){
$('#main_navbar').bootnavbar();
/* ============================ start slider============================ */
var swiper = new Swiper('.first-swiper', {
    spaceBetween: 30,
    pagination: {
      el: '.first-swiper .swiper-pagination',
      clickable: true,
    },
    keyboard: {
        enabled: true,
      },
      on: {
        slideChangeTransitionStart: function () {
          $('.first-swiper .special-header').hide(0);
          $('.first-swiper .content').hide(0);
          $('.first-swiper .special-pargraph').hide(0);
          $('.first-swiper .special-buttom').hide(0);
          $('.first-swiper .special-header').removeClass('aos-init').removeClass('aos-animate');
          $('.first-swiper .content').removeClass('aos-init').removeClass('aos-animate');
          $('.first-swiper .special-pargraph').removeClass('aos-init').removeClass('aos-animate');
          $('.first-swiper .special-buttom').removeClass('aos-init').removeClass('aos-animate');
          $('.first-swiper .swiper-slide-next').removeClass('showdiv');
          $('.first-swiper .swiper-slide-prev').removeClass('showdiv');

        },
        slideChangeTransitionEnd: function () {
          $('.first-swiper .special-header').show(0);
          $('.first-swiper .content').show(0);
          $('.first-swiper .special-pargraph').show(0);
          $('.first-swiper .special-buttom').show(0);
          $('.first-swiper .swiper-slide-active').addClass('showdiv');
          AOS.init();
        },
      } 
  });
  /* ============================ end slider============================ */
  /* ============================ start AOS============================ */
    AOS.init();
  /* ============================ end Aos============================ */
  /* ============================ start About-us ============================ */
  //create pop with image
  let ourGallery = document.querySelectorAll(".container-img img");
  ourGallery.forEach(img =>{
    img.parentElement.addEventListener("click",(e)=>{
      let overlay = document.createElement("div");
      //add class to overlay
      overlay.className= 'popup-overlay';
      //append overlay to body
      document.body.appendChild(overlay);
      
      //add src to phott
      if(img.dataset.videolink == null){
        //create img in popup box
      let photo = document.createElement("img");
      photo.src = img.src;
      //add image to popupbox
      overlay.appendChild(photo);
      }else{
        let photo = document.createElement("iframe");
        photo.setAttribute('src',img.dataset.videolink);
        photo.setAttribute('id','ytplayer');
        photo.setAttribute('type','text/html');
        photo.setAttribute('frameborder','0');
        photo.setAttribute('allowfullscreen','1');
        photo.classList.add('Institutional-video');
        overlay.appendChild(photo);
      }
      
      //create close span
      let closebutton = document.createElement("span");
      //create span Text
      let closebuttontext = document.createTextNode("x");
      //append text to close button
      closebutton.appendChild(closebuttontext);
      //add class to close buttom
      closebutton.className = 'close-button';
      closebutton.classList.add('text-secondary');
      //add colse button to popup box
      overlay.appendChild(closebutton);
      if(img.alt !== null){
        //Create heading 
        let imageHeadingo = document.createElement("h5");
        //crate image text
        let imgtxt = document.createTextNode(img.alt);
        //add text to heading
        imageHeadingo.appendChild(imgtxt);
        //append the heading to popup box
        imageHeadingo.className= 'footer-popup';
        overlay.appendChild(imageHeadingo);
      }
    });
  });
  //close popup
  document.addEventListener("click", function(e){
    if(e.target.classList.contains('close-button')){
      //remove popup
      e.target.parentNode.remove();
      
    }
    });
     /* ============================ end About-us ============================ */
    /*  ================================ start Testimonials =========================== */
    var swiper2 = new Swiper('.second-swiper', {
      slidesPerView: 5,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.second-swiper .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
    
        960: {
          slidesPerView: 5,
          spaceBetween: 30
        },
        720: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
    
      }
    });

    /*  ================================ end Testimonials =========================== */

    /*======================================== scorll function =====================================*/
    var position = $(window).scrollTop();
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if(scroll > position && scroll >= $('#our-services').offset().top) {
            $('.button-to-top').hide(500);
            $('nav').removeClass('shadow');
            $('nav').hide();
           } else if(scroll == 0){
            $('nav').removeClass('shadow');
            $('nav').css('position','fixed');
           }else if(scroll <= $('#our-services').offset().top){
            $('.button-to-top').hide();
            $('nav').addClass('shadow');
           }
          else {
            $('.button-to-top').show(500);
            $('nav').addClass('shadow');
            $('nav').show();
          }
          position = scroll;
          
      });
      $(".button-to-top").click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
      });
     /* navbar click */   
      let links = document.querySelectorAll('.customlist>li');
      links.forEach(link=>{
        link.addEventListener('click',function(e){
          e.preventDefault();
          
            $('html, body').animate({scrollTop: $(link.dataset.omar).offset().top}, 1000);
        })
      });
      let contactUsButtom = document.querySelectorAll('.contact-click');
      contactUsButtom.forEach(link=>{
        link.addEventListener('click',function(e){
          e.preventDefault();
            $('html, body').animate({scrollTop: $(link.dataset.link).offset().top}, 1000);
        })
      });

    
  })
