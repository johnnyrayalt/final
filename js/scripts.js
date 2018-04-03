const secondHand = document.querySelector('.second-hand');

var apiKey = 'AIzaSyDv6XtpbavCdNyXqw3RNXkF_yJx4UXS1R4';
function setDate(cityId, coordinates) {
  var container = document.getElementById(cityId);
  var now = new Date();
  var timestamp = now.getTime()/1000 + now.getTimezoneOffset() * 60;
  var apiCall = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + coordinates + '&timestamp=' + timestamp + '&key=' + apiKey;

  var xhr = new XMLHttpRequest();
  xhr.open('GET', apiCall);
  xhr.onload = function(){
    if (xhr.status === 200){
      var output = JSON.parse(xhr.responseText);
      console.log(output.status);
      if (output.status == 'OK'){
        var offsets = output.dstOffset * 1000 + output.rawOffset * 1000;
        var newDate = new Date(timestamp * 1000 + offsets);
        var refreshDate = new Date();
        var millisecondsElapsed = refreshDate - now;
        newDate.setMilliseconds(newDate.getMilliseconds() + millisecondsElapsed);
        setInterval(function(){
          newDate.setSeconds(newDate.getSeconds()+1)
          console.log(newDate.toLocaleTimeString());
        }, 1000);
        console.log(now.toLocaleTimeString() + 'hi');
      };
    } else {
        alert('Request failed.  Returned status of ' + xhr.status)
    };
  };
  xhr.send() // send request
};
setDate('portland', '45.5433229,-122.7945064');
setDate('miami', '25.7823907,-80.2994991');


//   const seconds = now.getSeconds();
//   const secondsDegrees = ((seconds/60) * 360) + 90;
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
//   console.log(seconds);
// }
// setInterval(setDate, 1000);
//
// setDate();


$(document).ready(function() {
  $('.add-clock form').submit(function(event) {
    event.preventDefault();

    var city = $('#city').val();


    $('.each-clock').append('<p>' + '<span class="city-name"></span>' + '</p>' + '<div class="clock">' + '<div class="face">' + '<div class="hand second-hand">' + '</div' + '<div class="hand minute-hand">' + '</div>' + '<div class="hand hour-hand">' + '<div>' + '</div>' + '</div>');

$('.city-name').text(city);
  });
});
