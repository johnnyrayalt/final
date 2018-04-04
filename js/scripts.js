var repeater;

function thisIsHowWeDoIt() {
  var apiKey = 'AIzaSyCR8q1smm7vsqqCHDluskwWxRgXwqq24f8';
  var coordinates = '25.7823907,-80.2994991';
  var now = new Date();
  var timestamp = now.getTime()/1000 + now.getTimezoneOffset() * 60;
  var apiCall = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + coordinates + '&timestamp=' + timestamp + '&key=' + apiKey;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', apiCall);
  xhr.onload = function currentTime(){
    if (xhr.status === 200){
      var output = JSON.parse(xhr.responseText);
      console.log(output.status);
      if (output.status === 'OK') {
        var offsets = output.dstOffset * 1000 + output.rawOffset * 1000;
        var newDate = new Date(timestamp * 1000 + offsets);
        var refreshDate = new Date();
        var millisecondsElapsed = refreshDate - now;
        newDate.setMilliseconds(newDate.getMilliseconds() + millisecondsElapsed);
        setInterval(function(){
            var secondHand = document.querySelector('.second-hand');
            var seconds = newDate.getSeconds();
            var secondsDegrees = ((seconds / 60) * 360) + 90;
            secondHand.style.transform = `rotate(${secondsDegrees}deg`;

            var minuteHand = document.querySelector('.minute-hand');
            var minutes = newDate.getMinutes();
            var minutesDegrees = ((minutes / 60) * 360) + 90;
            minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

            var hourHand = document.querySelector('.hour-hand');
            var hour = newDate.getHours();
            var hourDegrees = ((hour / 12) * 360) + 90;
            hourHand.style.transform = `rotate(${hourDegrees}deg)`;

        }, 1000);
        console.log(newDate.toTimeString());
      };
    } else {
        alert('Request failed.  Returned status of ' + xhr.status)
    };
  };
  xhr.send()
  repeater = setTimeout(thisIsHowWeDoIt, 1000);
};
thisIsHowWeDoIt();
$(document).ready(function() {



  $('.add-clock form').submit(function(event) {
    event.preventDefault();

    var city = $('#city').val();


    $('.each-clock').append('<p>' + '<span class="city-name"></span>' + '</p>' + '<div class="clock">' + '<div class="face">' + '<div class="hand second-hand">' + '</div' + '<div class="hand minute-hand">' + '</div>' + '<div class="hand hour-hand">' + '<div>' + '</div>' + '</div>');

$('.city-name').text(city);
  });

});
