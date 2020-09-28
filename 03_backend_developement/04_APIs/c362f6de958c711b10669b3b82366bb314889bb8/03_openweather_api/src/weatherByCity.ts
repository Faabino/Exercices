import * as request from "request";

function weatherByCity(city: string): void {
  request(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, response, result) => {
      if (error) {
        console.error(error);
      } else {
        const weather = JSON.parse(result);
        console.log(`${weather.main.temp} °C`);
      }
    }
  );
}

// leave lines below for tests to work properly
module.exports = { weatherByCity };
