import * as request from "request";

function getCategories(): void {
  request(
    `https://api.chucknorris.io/jokes/categories`,
    (error, response, result) => {
      if (error) {
        console.error(error);
      } else {
        const categories = JSON.parse(result);
        console.log(categories);
      }
    }
  );
}

// leave line below for tests to work properly
export { getCategories };
