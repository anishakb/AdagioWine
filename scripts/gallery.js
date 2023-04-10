
    jQuery(function($) {

        $(".main-carousel").slick({
            slidesToShow: 4,
            dots: true,
            arrows: true,
            draggable: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                    slidesToShow: 1,
                    infinite: true,
                    mobileFirst: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 2,
                    infinite: true,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                    slidesToShow: 3,
                    infinite: true,
                    }
                },
            ]
        });
    
    });