async function GetWeather(cityFromFunc) {
  let API_KEY = "902403e966a816a5094827c81333e350";
  let city = cityFromFunc;
  console.log(city);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  console.log(url);
  try {
    const response = await fetch(url);
    const weather = await response.json();
    return weather;
  } catch (error) {
    console.log(error);
    return 'error';
  }
}

async function Format(city) {
  try {
    let weatherInfo = await GetWeather(city);
    let slays;
    if (weatherInfo == 'error') {
      slays = [weatherInfo, weatherInfo, weatherInfo, weatherInfo, weatherInfo];
      console.log(slays);
      return slays;
    } else {
      let weather = `main weather: ${weatherInfo.weather[0].main}`;
      let description = `description: ${weatherInfo.weather[0].description}`
      let temperature = `temperature: ${String(weatherInfo.main.temp).substr(0, 2)}\n`;
      let sealevel = `seavevel: ${weatherInfo.main.sea_level}\n`;
      let country = `country: ${weatherInfo.sys.country}`
      slays = [weather, description, temperature, sealevel, country];
      console.log(slays);
      return slays;
    }
  } catch (error) {
    console.log(error);
    return 'error';
  }
}

function mainScript() {
  let city = document.getElementById('userInput').value;
  console.log('city-'+city);
  Format(city)
    .then(weather => {
      document.getElementById("weather").innerHTML = weather[0];
      document.getElementById("together1").innerHTML = weather[1]
      document.getElementById("together2").innerHTML = weather[2];
      document.getElementById("together3").innerHTML = weather[3];
      document.getElementById("together4").innerHTML = weather[4];
    })
    .catch(error => {
      console.log(error);
    });
}
