import $ from "jquery";
import  "slick-carousel";

$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    easing: "linear",
    fade: true,
    touchThreshold: 20,
  });
});
