$(document).ready(function(){

    $(".navigation-btn").on("click", function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
      });


      $('.slick-image-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });


      $(".package-hmevt").on("click", function(){
        $(".package-page").removeClass("dsp-none");
        $(".image-slider-section").addClass("dsp-none");
      });
      
      $(".home-hmevt").on("click", function(){
        $(".package-page").addClass("dsp-none");
        $(".image-slider-section").removeClass("dsp-none");
      });
      $(".logo-hmevt").on("click", function(){
        $(".package-page").addClass("dsp-none");
        $(".image-slider-section").removeClass("dsp-none");
      });
    
  });

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}