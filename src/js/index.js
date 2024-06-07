import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

// Галерея и лайтбоксы от Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// Мобильная навигация
// import mobileNav from "./modules/mobile-nav.js";
// mobileNav();

//Masonry
document.addEventListener("DOMContentLoaded", function() {
  var elem = document.querySelector(".grid");

  // Убедитесь, что все изображения загружены перед инициализацией Masonry
  imagesLoaded(elem, function() {
    var msnry = new Masonry(elem, {
      itemSelector: ".grid-item",
      columnWidth: 160,
      cloumns: 3,
      gutter: 25,
      horizontalOrder: false,
    });
  });
});

//Show More
document.addEventListener("DOMContentLoaded", () => {
  const showMoreButton = document.getElementById("show-more");
  const reviewsGrid = document.querySelector(".grid");
  const gradientGrid = document.querySelector(".gradient");
  let rowsShown = 3;

  showMoreButton.addEventListener("click", () => {
    rowsShown += 3;
    reviewsGrid.style.maxHeight = `${rowsShown * 200}px`; // Высота одного ряда 200px

    if (reviewsGrid.scrollHeight <= reviewsGrid.clientHeight) {
      showMoreButton.style.display = "none";
      gradientGrid.style.display = "none";
    }
  });
});

//Questions
const btnPlus = document.querySelectorAll(".questions__item-plus");
const textQuestion = document.querySelectorAll(".questions__item-text");

btnPlus.forEach(function(button, index) {
  button.addEventListener("click", function() {
    textQuestion[index].classList.toggle("none");
    button.classList.toggle("rotate");
  });
});
