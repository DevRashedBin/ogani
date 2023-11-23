// mixitup
var mixer = mixitup('.filter');
// mixitup


// owl
$(document).ready(function(){
$(".banner_products_slider").owlCarousel({
    loop: true,
    margin: 35,
    items: 4,
    dots: false,
    nav: true,
    navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {

        0: {
            items: 1,
        },

        480: {
            items: 2,
            margin: 20,
        },

        768: {
            items: 3,
        },

        992: {
            items: 4,
        }
    }
    });
});

$(document).ready(function(){
$(".product_slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
    smartSpeed: 1200,
    autoHeight: false,
    });
});
// owl
    

// wow js

wow = new WOW(
                  {
                  boxClass:     'wow',      // default
                  animateClass: 'animated', // default
                  offset:       0,          // default
                  mobile:       true,       // default
                  live:         true        // default
                }
                )
                wow.init();





                // load more

                $(function () {
                    $(".featured_products").slice(0, 4).show();
                    $("body").on('click touchstart', '.load-more', function (e) {
                        e.preventDefault();
                        $(".featured_products:hidden").slice(0, 4).slideDown();
                        if ($(".featured_products:hidden").length == 0) {
                            $(".load-more").css('visibility', 'hidden');
                        }
                        $('html,body').animate({
                            scrollTop: $(this).offset().top
                        }, 1000);
                    });
                });

                // load more