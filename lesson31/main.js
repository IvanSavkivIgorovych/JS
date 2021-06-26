$(document).ready(function () {
  //for switch tabs
  $(".container__li").click(function () {
    $(this).addClass("active").removeClass("disable");
    $(this).siblings().removeClass("active").addClass("disable");
    $(".tab")
      .css("display", "none")
      .eq($(this).index())
      .css("display", "block");
  });
});
