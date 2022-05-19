jQuery(document).ready(function ($) {
  //480px以上の場合
  if (window.matchMedia("(max-width: 480px)").matches) {
    $(function () {
      $(".slider").slick({
        autoplay: true,
        dots: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
        prevArrow: '<span class="slick-arrow_prev">←</span>',
        nextArrow: '<span class="slick-arrow_next">→</span>',
      });
    });
  } else {
    $(function () {
      $(".slider").slick({
        autoplay: true,
        dots: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
        prevArrow: '<span class="slick-arrow_prev">←</span>',
        nextArrow: '<span class="slick-arrow_next">→</span>',
      });
    });
  }
});
