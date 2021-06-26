$(document).ready(function () {
  $(".work__slider").slick({
    // autoplay: true,
    // autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><div class='news__scroll'><div class='news__arrow'></div></div></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><div class='news__scroll'><div class='news__arrow'></div></div></button>",
  });
});
