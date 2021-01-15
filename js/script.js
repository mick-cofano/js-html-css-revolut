
$(document).ready(function() {

$('.dropdown-pos-relative').click(function(){
  $('.dropdown').hide();
  $(this).children('ul').show();
});

$('ul li').click(function(){
  $('ul li a').removeClass('black');
  $(this).children('a').addClass('black');
});

// $(document).click( function(event){
//   $(".dropdown").hide();
// });


});
