document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "226553836605486487081936251704"; //env variables
  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim(); //removes white spaces before or after
    if (!city) return; //if no city entered

    //it may throw an error
    //server/database is always in another continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError(error.message); // Pass the error message to showError
    }
  });

  async function fetchWeatherData(city) {
    //gets the data
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`; // API_KEY is now defined
    const response = await fetch(url);
    console.log(typeof response);      //for debugging purpose
    console.log("RESPONSE", response);

    if (!response.ok) {
      const errorData = await response.json(); // Try to get more specific error info
      throw new Error(errorData.error.message || "City not found");
    }
    const data = await response.json();
    return data;
  }
  function displayWeatherData(weatherData) {
    //display
    console.log(weatherData); // Corrected: Use weatherData instead of undefined 'data'
    const { location, current } = weatherData; // Corrected: Access data based on the API response structure
    cityNameDisplay.textContent = location.name;
    weatherInfo.classList.remove("hidden"); //to show weather info
    errorMessage.classList.add("hidden"); 

    //unlock the display
    temperatureDisplay.textContent = `Temperature : ${current.temp_c}°C`; // Assuming temperature in Celsius
    descriptionDisplay.textContent = `Weather : ${current.condition.text}`;
  }

  function showError(message) {
    weatherInfo.classList.add("hidden"); // Hide weather info on error
    errorMessage.textContent = `Error: ${message}`; // Display the specific error message
    errorMessage.classList.remove("hidden");  //remove hidden to show error
  }
});
