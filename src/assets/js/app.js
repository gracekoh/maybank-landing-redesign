$(document).foundation();

$(document).ready(function(){
      $('.hero-carousel').slick({
        dots: true
      });

$(".tinted-image").hover(function() {
  $(this).children( '.overlay-text' ).addClass('overlay-text-hover'); // add class when mouseover happen
}, function() {
  $(this).children( '.overlay-text' ).removeClass('overlay-text-hover'); // remove class when mouseout happen
});

window.sr = ScrollReveal();
sr.reveal('#apply-account', { delay: 300, scale: 0.9 });
sr.reveal('#apply-creditcard', { delay: 600, scale: 0.9 });
sr.reveal('#m2u-tips', { delay: 800, scale: 0.9 });



    });
