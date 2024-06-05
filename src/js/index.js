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
