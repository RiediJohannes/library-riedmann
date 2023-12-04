$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});


// clear the shopping cart
$("#clear-button").click(() => {
  $(".clear-target").each((i, obj) => {
    $(obj).empty();
  });

  // reset the total price
  $("#total-price").text("0,00€");

  // unfocus the clear button
  $("#clear-button").blur();

  // disable every buy button
  $(".buy-button").each(function () {
    $(this).prop("disabled", true);
  });
});


$(".buy-button").each(function () {
  let button = $(this); // raw dom element
  button.on("click", function() {
    document.location.href = "index.html";
  });
});