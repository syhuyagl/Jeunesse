$(document).ready(function () {
  function disableScroll() {
    var ycoord = $(window).scrollTop();
    $(".c-header__overlay").data("ycoord", ycoord);
    ycoord = ycoord * -1;
    $("body")
      .css("position", "fixed")
      .css("left", "0px")
      .css("right", "0px")
      .css("top", ycoord + "px");
  }
  function enableScroll() {
    $("body")
      .css("position", "")
      .css("left", "auto")
      .css("right", "auto")
      .css("top", "auto");
    $(window).scrollTop($(".c-header__overlay").data("ycoord"));
  }
  $(".c-header__menu").click(function () {
    $(this).toggleClass("is-active");
    $(".c-header__overlay").toggleClass("c-header__overlay--active");
    if ($(".c-header__overlay").hasClass("c-header__overlay--active")) {
      disableScroll();
      $(".c-header__overlay").css('transition', 'transform 0.4s');
    } else {
      enableScroll();
    }
  });
  var phone1 = $(".c-phone__phone1");
  var phone2 = $(".c-phone__phone2");
  function setPhoneLink(phoneLink, phoneNumber) {
    if ($(window).width() <= 1024) {
      phoneLink.attr("href", "tel:" + phoneNumber);
    } else {
      phoneLink.removeAttr("href").on("click", function (e) {
        e.preventDefault();
      });
    }
  }
  setPhoneLink(phone1, "075-722-1555");
  setPhoneLink(phone2, "075-723-3355");
  $("nav a").click(function () {
    var href = $(this).attr("href");
    if ($(".c-header__overlay").hasClass("c-header__overlay--active")) {
      $(".c-header__overlay").removeClass("c-header__overlay--active");
      $(".c-header__menu").removeClass("is-active");
      enableScroll();
    }
    $("html, body").animate(
      {
        scrollTop: $(href).offset().top - 120,
      },
      "1000"
    );
  });
});
