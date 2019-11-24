let mainNav = document.getElementById('js-menu');   
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click',
    function () {
    mainNav.classList.toggle("active");
});


//Slider
/*
var slider_content = document.getElementById('box-day');
var image = ['watch1-d','watch2-d','watch3-d','watch4-d'];

var i = 0;

//function for next slide

function nextImage() {
    
        slider_content.innerHTML = "<img src='https://raw.githubusercontent.com/ancapopescu6/timex_redesign/master/"+image[i]+".png'>";
    
    if (i<image.length-1) {
        i = i+1;
    } else {
        i = 0;
    }
}*/

// slick js carousel

 $(document).ready(function(){
      $('.box-day').slick(
        {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
      });
    });

