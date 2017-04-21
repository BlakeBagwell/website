$(function() {

  $('.clickable').on('click', function() {
    $('.key').toggleClass("hide");
  });

  $('.key').on('click', function() {
    $(this).find('.details').toggleClass("hide");
    console.log('Hello');
  });

  $('.clickable').click(function() {
    $('.blake-object').toggleClass("flexcolumn");
    // $('.blake-object').toggleClass("flexrow");

  });



});
