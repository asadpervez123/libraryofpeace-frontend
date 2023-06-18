$(document).ready(function () {
  // --------- Ready function start ---------- /////////
  // preloader
  $(".preloader").fadeOut("slow");

  // jquery nice select

  document.querySelector("select") && $("select").niceSelect();

  // marquee js
  document.querySelector(".marquee-this") &&
    $(".marquee-this").marquee({
      // disabled: true,
      duration: 80000,
      delayBeforeStart: 0,
      direction: "left",
      duplicated: true,
      startVisible: true,
    });

  // best book slider
  document.querySelector(".best-book-slider") &&
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

videoPlayBtn &&
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

// Year range slider
document.querySelector(".js-range-slider") &&
  (function () {
    var $range = $(".js-range-slider"),
      $from = $(".from"),
      $to = $(".to"),
      range,
      min = $range.data("min"),
      max = $range.data("max"),
      from,
      to;

    var updateValues = function () {
      $from.prop("value", from);
      $to.prop("value", to);
    };

    $range.ionRangeSlider({
      onChange: function (data) {
        from = data.from;
        to = data.to;
        updateValues();
      },
    });

    range = $range.data("ionRangeSlider");
    var updateRange = function () {
      range.update({
        from: from,
        to: to,
      });
    };

    $from.on("input", function () {
      from = +$(this).prop("value");
      if (from < min) {
        from = min;
      }
      if (from > to) {
        from = to;
      }
      updateValues();
      updateRange();
    });

    $to.on("input", function () {
      to = +$(this).prop("value");
      if (to > max) {
        to = max;
      }
      if (to < from) {
        to = from;
      }
      updateValues();
      updateRange();
    });
  })();

///////////////////////////////////////////////////////////////////
// *********   click to reset all select  elements ********** //
///////////////////////////////////////////////////////////////////

let resetFilterBtn = document.querySelector("#reset-filter-btn");
resetFilterBtn &&
  resetFilterBtn.addEventListener("click", (e) => {
    let inputs = document.querySelectorAll(".control.control--checkbox input");
    inputs.forEach((item) => {
      item.checked = false;
    });
  });

///////////////////////////////////////////////////////////////////
// *********   click select all to select all elements ********** //
///////////////////////////////////////////////////////////////////

let selectAllBtn = document.querySelector("#select-all");

selectAllBtn &&
  selectAllBtn.addEventListener("click", (e) => {
    let selectInput = selectAllBtn.querySelector("input");
    let form = selectAllBtn.parentElement;
    let inputs = form.querySelectorAll("input");

    inputs.forEach((item) => {
      selectInput.checked == true
        ? (item.checked = true)
        : (item.checked = false);
    });
  });

// percentage line width change

const percentageBox = document.querySelectorAll(".read-percentage-box");

percentageBox &&
  percentageBox.forEach((item) => {
    let percent = item.querySelector(".percent").innerHTML;
    let percentageLine = item.querySelector(".percentage-line");
    percentageLine
      ? (percentageLine.style.width = percent)
      : (percentageLine.style.width = "0%");
  });

///////////////////////////////////////////////////////////////////
// *********   click to add or remove bookmark on profile page  ********** //
///////////////////////////////////////////////////////////////////

let bookmarkBtns = document.querySelectorAll(".bookmark-btn");

bookmarkBtns &&
  bookmarkBtns.forEach((item) => {
    item.addEventListener("click", () => item.classList.toggle("active"));
  });

///////////////////////////////////////////////////////////////////
// *********   click to add or remove bookmark on pdf read page  ********** //
///////////////////////////////////////////////////////////////////

let bookmarkPdfBtns = document.querySelectorAll(".book-read-popup #book-mark");

bookmarkPdfBtns &&
  bookmarkPdfBtns.forEach((item) => {
    item.addEventListener("click", () => {
      let img = item.querySelector("img");
      let src1 = img.src.split("/")[5];
      if (src1 == "icons") {
        img.src = "assets/img/profile/bookmark.svg";
      } else {
        img.src = "assets/img/icons/bookmark.svg";
      }
    });
  });

// pagination functionality

// let paginationBox = document.querySelectorAll(".pagination-box .pagination");

// paginationBox &&
//   paginationBox.forEach((pagination) => {
//     let items = pagination.querySelectorAll("li");
//     items.forEach((item) => {
//       item.addEventListener("click", (e) => {
//         if (item.classList.contains("active")) {
//           return false;
//         } else {
//           if (
// /         !item.classList.contains("page-next") &&
//  /           !item.classList.contains("page-prev")
//           ) {
//             items.forEach((li) => li.classList.remove("active"));
//             item.classList.add("active");
//           }
//         }
//       });
//     });
//   });
