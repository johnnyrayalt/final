$(document).ready(function() {
  $('.add-clock form').submit(function(event) {
    event.preventDefault();

    var city = $('#city').val();
    $('.city-name').text(city);

    $('.each-clock').show();


    $('.each-clock').append('<p>' + '<span class="city-name"></span>' + '</p>' + '<div class="clock">' + '<div class="face">' + '<div class="hand second-hand">' + '</div' + '<div class="hand minute-hand">' + '</div>' + '<div class="hand hour-hand">' + '<div>' + '</div>' + '</div>');


  });
});
