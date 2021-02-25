$(document).ready(function () {
    const navBurger = document.querySelector('.nav__movil-burger')
    navBurger.classList.remove('activ')
    navBurger.addEventListener('click', function(){
        this.classList.toggle('activ');
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 5,
        // autoplay: true,
        // smartSpeed: 1000,
        // autoplayTimeout:2000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
            }
        }
    })
});
console.log("ddddd");