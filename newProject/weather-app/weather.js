const apiKey = `5124d46af813dbdbfda4d82a9ca00ff8`;
const searchBox = document.querySelector("#searchBox");
const searchBnt = document.querySelector("#searchButton");
const weatherIcone = document.querySelector("#weatherIcone");
const oopsIcone = document.querySelector("#oops");
searchBnt.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchBox.value}&appid=${apiKey}`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (allInfo) {
      console.log(allInfo);
      document.querySelector("#temp").innerText = `${Math.round(
        allInfo.main.temp
      )} °C`;

      document.querySelector("#cityName").innerText = `${allInfo.name}`;

      document.querySelector(
        "#humidity"
      ).innerText = `${allInfo.main.humidity}`;

      document.querySelector(
        "#windspeed"
      ).innerText = `${allInfo.wind.speed} Km/h`;

      document.querySelector(
        "#condition"
      ).innerText = `${allInfo.weather[0].main}`;

      return allInfo;
    })
    .then(function (object) {
      const weatherName = object.weather[0].main;
      console.log(weatherName);
      oops.src = undefined;

      if (weatherName == "Clear") {
        weatherIcone.src = `images/clear.png`;
      } else if (weatherName == "Clouds") {
        weatherIcone.src = `images/clouds.png`;
      } else if (weatherName == "Drizzle") {
        weatherIcone.src = `images/drizzle.png`;
      } else if (weatherName == "Mist") {
        weatherIcone.src = `images/mist.png`;
      } else if (weatherName == "Rain") {
        weatherIcone.src = `images/rain.png`;
      } else if (weatherName == "Snow") {
        weatherIcone.src = `images/snow.png`;
      }
    })
    .catch(function (e) {
      {
        document.querySelector("#temp").innerText = ` --- `;
        document.querySelector("#condition").innerText = null;
        document.querySelector("#cityName").innerText = `Enter Valid Name`;
        document.querySelector("#humidity").innerText = null;
        document.querySelector("#windspeed").innerText = null;
        oops.src = `images/oops.png`;
        weatherIcone.src = ``;
      }
    });
});

//--------------------------><----------------------\\
//--------------------------><----------------------\\

// fetch(apiUrl)
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (cityData) {
//     console.log(cityData);
//     document.querySelector("#searchButton").addEventListener("click", () => {
//       document.getElementById("temp").innerText = `${Math.round(
//         cityData.main.temp
//       )} °C`;
//       document.getElementById("cityName").innerText = cityData.name;
//       document.getElementById("humidity").innerText = cityData.main.humidity;
//       document.getElementById("windspeed").innerText = cityData.wind.speed;
//     });
//   })
//   .catch(function () {
//     console.log(`There is an error in an data`);
//   });
