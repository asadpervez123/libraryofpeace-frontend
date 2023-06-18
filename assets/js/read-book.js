function openPdfReader() {
  let readMenu = document.querySelector(".book-read-menu-section");
  let readArea = document.querySelector(".book-read-section");

  readArea.classList.add("active");
  readMenu.classList.add("active");

  readArea.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("book-wrapper") ||
      e.target.classList.contains("double-page")
    ) {
      readArea.classList.remove("active");
      readMenu.classList.remove("active");
    }
  });
}

function openClosePopup(popupTrigger, popup) {
  function openPopup() {
    document
      .getElementById("book-read-selection-popup")
      .classList.remove("active");
    popup.classList.add("active");
  }
  function closePopup() {
    popup.classList.remove("active");
  }
  popupTrigger.addEventListener("click", openPopup);
  window.addEventListener("click", function (event) {
    if (
      event.target !== popupTrigger &&
      !popupTrigger.contains(event.target) &&
      event.target !== popup &&
      !popup.contains(event.target)
    ) {
      closePopup();
    }
  });
}

function togglePdfMenu() {
  document
    .querySelector(".book-read-menu-section .content")
    .classList.toggle("active-toggle");
}
// bookmark add or remove
let bookmarkReaderViewBtn = document.querySelector(
  ".book-read-menu-section #book-mark"
);

bookmarkReaderViewBtn.addEventListener("click", () => {
  let img = bookmarkReaderViewBtn.querySelector("img");
  let src1 = img.src.split("/")[5];
  if (src1 == "icons") {
    img.src = "assets/img/profile/bookmark.svg";
  } else {
    img.src = "assets/img/icons/bookmark.svg";
  }
});
// double page book read

let doublePageBookReadBtn = document.querySelector("#book-read-double-page");

function openDoublePageMode() {
  {
    document
      .querySelector(".book-read-section .book-wrapper")
      .classList.toggle("d-none");
    document
      .querySelector(".book-read-section .book-section")
      .classList.toggle("d-none");
    document
      .querySelector(".book-read-menu-section .right .next-prev")
      .classList.toggle("d-none");
    setTimeout(() => {
      turnRight();
    }, 700);
  }
}
doublePageBookReadBtn.addEventListener("click", openDoublePageMode);

///////////////////////////////////////////////////////////////////
// *********   select reader view text to display popup ********** //
///////////////////////////////////////////////////////////////////

let readerViewArea = document.querySelector(".book-read-section");

document.addEventListener("mouseup", function (event) {
  let selection = window.getSelection();
  let selectedText = selection.toString().trim();
  let popup = document.getElementById("book-read-selection-popup");

  if (selectedText !== "" && readerViewArea.classList.contains("active")) {
    popup.style.top = event.pageY + "px";
    popup.style.left = event.clientX + "px";
    popup.classList.add("active");
  } else {
    popup.classList.remove("active");
  }
});

///////////////////////////////////////////////////////////////////
// *********   select reader view text to display popup buttons functionality ********** //
///////////////////////////////////////////////////////////////////
// translate button action to click handler
const popupTriggerTranslate = document.querySelector("#translateBtn");
const popupTranslate = document.querySelector("#book-read-translate-box");
openClosePopup(popupTriggerTranslate, popupTranslate);

// resource button action to click handler

const popupTriggerResource = document.querySelector("#sourceBtn");
const popupResource = document.querySelector("#book-read-resource-box");
openClosePopup(popupTriggerResource, popupResource);

// copybtn button action
document.getElementById("copyBtn").addEventListener("click", function () {
  let selectedText = window.getSelection().toString();
  navigator.clipboard.writeText(selectedText);
  BtnPopup.classList.remove("active");
});

// share tweet button action
document.getElementById("share-tweet").addEventListener("click", function () {
  BtnPopup.classList.remove("active");
  let selectedText = window.getSelection().toString();
  if (selectedText) {
    var tweetUrl =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(selectedText);
    window.open(tweetUrl, "_blank");
  }
});

///////////////////////////////////////////////////////////////////
// *********  translate box reverse direction  ********** //
///////////////////////////////////////////////////////////////////

document.querySelector("#reverse-btn").addEventListener("click", function () {
  if (
    document.querySelector(".translate-box .btns").style.flexDirection ==
    "row-reverse"
  ) {
    document.querySelector(".translate-box .btns").style.flexDirection = "row";
    document.querySelector(".translate-box .bottom-area").style.flexDirection =
      "column";
  } else {
    document.querySelector(".translate-box .btns").style.flexDirection =
      "row-reverse";
    document.querySelector(".translate-box .bottom-area").style.flexDirection =
      "column-reverse";
  }
});

///////////////////////////////////////////////////////////////////
// *********  text area text copy   ********** //
///////////////////////////////////////////////////////////////////
let textareas = document.querySelectorAll(".text-area-box");

textareas.forEach((item) => {
  let text =
    item.querySelector("textarea").value ||
    item.querySelector("textarea").placeholder;
  let img = item.querySelector("img");
  img.addEventListener("click", () => {
    navigator.clipboard.writeText(text);
  });
});

// zoom in and out button

document.addEventListener("DOMContentLoaded", function () {
  let zoomLevel = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150];
  let currentZoom = 9;

  document
    .querySelector(".book-read-menu-section #zoom-in-btn")
    .addEventListener("click", function () {
      if (currentZoom < zoomLevel.length - 1) {
        currentZoom++;
        updateZoom();
      }
    });

  document
    .querySelector(".book-read-menu-section #zoom-out-btn")
    .addEventListener("click", function () {
      if (currentZoom > 0) {
        currentZoom--;
        updateZoom();
      }
    });

  function updateZoom() {
    document.querySelector(".book-read-section .book-wrapper").style.zoom =
      zoomLevel[currentZoom] + "%";
    document.querySelector(".book-read-section .book-section").style.zoom =
      zoomLevel[currentZoom] + "%";
  }
});

// window resize add event on book read

window.addEventListener("resize", (e) => {
  let bookRead = document.querySelector(".book-read-section");
  if (window.matchMedia("(max-width: 580px)").matches) {
    // bookRead.classList.add("double-page");

    // if(bookRead.querySelector(".book-wrapper").classList.contains("d-none")){
    bookRead.querySelector(".book-wrapper").classList.remove("d-none");
  } else {
    bookRead.classList.remove("double-page");
  }
});

// left and right button click to change page

let right = document.querySelectorAll(".book-section .right");
let si = right.length;
let z = 1;
function turnRight() {
  if (!si <= 0) {
    if (si >= 1) {
      si--;
    } else {
      si = right.length - 1;
      function sttmot(i) {
        setTimeout(function () {
          right[i].style.zIndex = "auto";
        }, 300);
      }
      for (var i = 0; i < right.length; i++) {
        right[i].className = "right";
        sttmot(i);
        z = 1;
      }
    }
    right[si].classList.add("flip");
    z++;
    right[si].style.zIndex = z;
  }
}
function turnLeft() {
  if (si == right.length) {
    return;
  }
  if (si < right.length) {
    si++;
  } else {
    si = 1;
    for (var i = right.length - 1; i > 0; i--) {
      right[i].classList.add("flip");
      right[i].style.zIndex = right.length + 1 - i;
    }
  }
  right[si - 1].className = "right";
  setTimeout(function () {
    right[si - 1].style.zIndex = "auto";
  }, 350);
}
