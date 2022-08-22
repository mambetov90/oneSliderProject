(() => {
  const carousel = $(".carousel-reviews-content");
  const menuBtn = document.querySelector('.nav__toggleBtn');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link');

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
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            },
        },
    ],
  });

  const activeLink = () => {
    const currentLocation = window.location.hash.substring(1);

    navLinks.forEach(link => {
      const targetLink = link.dataset.target;
      if (currentLocation === targetLink) {
        link.classList.add('active');
      }
    })
  }

  activeLink();


  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    nav.classList.toggle('nav_open');
    document.body.classList.toggle('noscroll');
  })

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      removeActive();
      event.target.classList.add('active');
      nav.classList.remove('nav_open');
      document.body.classList.remove('noscroll');
    })
  })

  const removeActive = () => {
    navLinks.forEach(link => {
      link.classList.remove('active');
    })
  }

  const scrollTo = el => {
    if (el) {
      const top = window.scrollY + el.getBoundingClientRect().top
      window.scrollTo({ top: top, behavior: "smooth" })
    }
  }

// wrap in a domReady type callback if needed
  scrollTo(document.querySelector(window.location.hash))

})();
