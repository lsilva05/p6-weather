// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	$.simpleWeather({
    
    location: '99203',
    
    success: function(weather) {
      
      // Get & Store Weather Data
      // html = '<h2><i class="icon-' + weather.code+'"></i> ' + weather.temp +'&deg;' + weather.units.temp+'</h2>';
      var tempDis, cityAndState, conditionCode, extForecastone, extForecasttwo, extForecastthree, extForecastfour; 

      tempDis = weather.temp+'&deg;'+weather.units.temp;
      wthCd = '<i class="icon-'+weather.code+'"></i>';
      cityAndState = weather.city + ' , ' + weather.region;
      conditionCode = weather.code;
      extForecastone = weather.forecasts.one.day+'<i class="icon-'+weather.forecasts.one.code+'"></i>';
      extForecasttwo = weather.forecasts.two.day+'<i class="icon-'+weather.forecasts.two.code+'"></i>';
      extForecastthree = weather.forecasts.three.day+'<i class="icon-'+weather.forecasts.three.code+'"></i>';
      extForecastfour = weather.forecasts.four.day+'<i class="icon-'+weather.forecasts.four.code+'"></i>';

      console.log(conditionCode);
  
      // Display Weather
      $('.tempDis').html(tempDis);
      $('.wthCd').html(wthCd);
      $('.cityAndState').html(cityAndState);
      $('body').addClass('bg' + conditionCode);
      $('.extForecastone').html(extForecastone);
      $('.extForecasttwo').html(extForecasttwo);
      $('.extForecastthree').html(extForecastthree);
      $('.extForecastfour').html(extForecastfour);

      

    },
 
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  
  });

   if (navigator.geolocation) {
    // Yes! Show button
    $('.getGeolocation').show(); 
  } else {
    // No. Hide button
    $('.getGeolocation').hide();
  }

// 2. Get Geolocation & return Simple Weather
$('.getGeolocation').on('click', function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    // See latitute & longitude. Note, wait a few seconds
    //console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
  $('.cityAndState, .tempDis, .wthCd, .extForecastone, .extForecasttwo, .extForecastthree, .extForecastfour').text('');
});

// 3. Wrap SimpleWeather in a function called _loadWeather()
var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,
    
    // Get _weather_ object
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp +'&deg;'+ weather.units.temp;
      // Get & store city
      var city = weather.city + ' , ' + weather.region;

      var icon = '<i class="icon-'+weather.code+'"></i>';
      
      // Output to hooks in HTML
      $('.temp').html(temp);
      $('.city').text(city);
      $('.icon').html(icon);
      
      // See console for _weather_ object
      //console.log(weather);
    }
  
  });
    
}; // end of _loadWeather()_ function

	console.log('Page Loaded. Lets Do this!');

}); 