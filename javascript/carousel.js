(() => {
  const carousel = $(".carousel-reviews-content");

  carousel.slick({
    infinite: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 32,
    dots: false,
    prevArrow:
      "<img class='carousel__arrow carousel__arrow_prev' src='images/prev.svg'>",
    nextArrow:
      "<img class='carousel__arrow carousel__arrow_next' src='images/next.svg'>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            },
        },
    ],
  });
})();
