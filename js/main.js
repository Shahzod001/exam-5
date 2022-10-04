$('.carusel-js').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    variableWidth: true,
    autoplay:true,
    autoplaySpeed:3000,
    infinite: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});