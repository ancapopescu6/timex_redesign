
var mainNav = document.getElementById('js-menu');   
var navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click',
    function () {
    mainNav.classList.toggle("active");
});


// toggle btn

function myToggle() {
   
    var boxNight = document.getElementById('box-night');
    var boxDay = document.getElementById('box-day');
    
    if (boxNight.style.display === 'flex') {
        boxNight.style.display = 'none';
        boxDay.style.display = 'flex';
    } else {
        boxNight.style.display = 'flex';
        boxDay.style.display = 'none';
    }
}
