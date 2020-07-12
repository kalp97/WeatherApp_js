// JavaScript source code
window.addEventListener('load', ()=> {

    var lat;
    var long;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {
            
            lat = position.coords.latitude;
            long = position.coords.longitude;
            
           var api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long + '';

            
            
                fetch(api)
                .then(response =>{
                    return response.json();
                
				})     
                
                .then(data =>{
                    console.log(data);
                    locationTimezone.textContent = data.name;
                    temperatureDegree.textContent = data.main.temp;
                    temperatureDescription.textContent = data.weather[0].description
				})     
            });
        }

});