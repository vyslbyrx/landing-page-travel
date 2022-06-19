const swiper = new Swiper('#commentSlider', {
    // Optional parameters
    direction: 'vertical',
    slidesPerView: 2,
    spaceBetween: 150,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.js--comment-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  var manufacturer = new Swiper(".js--manufacturer", {
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });