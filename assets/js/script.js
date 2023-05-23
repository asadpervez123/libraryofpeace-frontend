$(document).ready(function () {
  // --------- Ready function start ---------- /////////
  // preloader
  $(".preloader").fadeOut("slow");

  // marquee js
  $(".marquee-this").marquee({
    // disabled: true,
    duration: 80000,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
    startVisible: true,
  });

  // best book slider
  new Swiper(".best-book-slider", {
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      400: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 1,
      },
    },
    autoplay: {
      delay: 1500,
    },
    navigation: {
      disabled: true,
      clickable: true,
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // --------- Ready function end ---------- /////////
});

// click to play and pause about section video functionality
let videoPlayBtn = document.querySelector("#video-play-btn");

videoPlayBtn.addEventListener("click", () => {
  let icon = document.querySelector("#video-play-btn i");
  let video = document.querySelector("#about-video");
  if (icon.classList.contains("fa-play")) {
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    video.play();
  } else {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
    video.pause();
  }
});
