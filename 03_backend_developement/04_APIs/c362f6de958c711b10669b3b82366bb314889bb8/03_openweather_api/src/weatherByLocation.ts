import * as request from "request";

function weatherByZipcode(zipcode: number, countryCode: string): void {
  request(
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, response, result) => {
      if (error) {
        console.error(error);
      } else {
        const weatherInfos = JSON.parse(result);
        console.log(`Weather for ${weatherInfos.city.name}`);
      }
    }
  );
}

function weatherByLatitudeAndLongitude(latitude, longitude) {
  // code the function here
}

// leave lines below for tests to work properly
module.exports = {
  weatherByZipcode,
  weatherByLatitudeAndLongitude,
};
