$(document).ready(function(){
  $('.center').slick({
    centerMode: true,
    centerPadding: '220px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
    // var slider = tns({
    //   container: '.my-slider',
    //   mouseDrag: true,
    //   slideBy: "page",
    //   // controlsContainer: "#slider-control",
    //   // controls: false,
    //   gutter: 10,
    //   edgePadding: 20,
    //   lazyload: true,
    //   swipeAngle: false,
    //   speed: 400,
    //   responsive: {
    //     350: {
    //       items: 1
    //     },
    //     500: {
    //       items: 2
    //     },
    //     800: {
    //       items: 3
    //     }
    //   },
    // });
});