document.addEventListener("DOMContentLoaded", function () {   
     function fetchWeatherData() {
         var apiKey = 'acc103e38533f2d0a9c4250366d31546';
         var city = 'Delhi,IN';
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Convert temperature from Kelvin to Celsius
                var temperatureInCelsius = data.main.temp - 273.15;

                // Update the weatherInfo element with relevant data
                document.getElementById("weatherInfo").innerHTML = `Temperature: ${temperatureInCelsius.toFixed(2)}°C, Description: ${data.weather[0].description}, Humidity: ${data.main.humidity}%`;
            })
            .catch(error => console.error('Error fetching data:', error));
               
        }
        fetchWeatherData();

        // Set interval for auto-refresh (e.g., every 30 minutes)
        setInterval(fetchWeatherData, 30 * 60 * 1000); // 30 minutes in milliseconds
    });


    function isValidEmail(email) {
        // Use a regular expression for basic email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }



