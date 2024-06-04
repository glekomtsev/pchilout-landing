import Masonry from "masonry-layout";

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
var elem = document.querySelector(".grid");
var msnry = new Masonry(elem, {
  itemSelector: ".grid-item",
  columnWidth: 160,
  columns: 3,
  horizontalOrder: false,
});
var msnry = new Masonry(".grid", {
  gutter: 20,
});
