import * as request from "request";

function getChuckNorrisJoke(category: string): void {
  request(
    `https://api.chucknorris.io/jokes/random?category=${category}`,
    (error, response, result) => {
      if (error) {
        console.error(error);
      } else {
        const joke = JSON.parse(result);
        // console.log(joke.value);
        console.log(joke.value);
      }
    }
  );
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
