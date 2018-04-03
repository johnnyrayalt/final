
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);
}
setInterval(setDate, 1000);

setDate();


$(document).ready(function() {
  $('.add-clock form').submit(function(event) {
    event.preventDefault();

    var city = $('#city').val();


    $('.each-clock').append('<p>' + '<span class="city-name"></span>' + '</p>' + '<div class="clock">' + '<div class="face">' + '<div class="hand second-hand">' + '</div' + '<div class="hand minute-hand">' + '</div>' + '<div class="hand hour-hand">' + '<div>' + '</div>' + '</div>');

$('.city-name').text(city);
  });
});
