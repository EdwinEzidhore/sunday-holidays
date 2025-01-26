$('.carousel-testimony').owlCarousel({
    loop:true,
    margin:10,
	nav: false,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


$('.carousel-cabs').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dots:false,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})