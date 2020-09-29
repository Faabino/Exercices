import fetch from "node-fetch";

function getCategories(): Promise<string[]> {
  return fetch("https://api.chucknorris.io/jokes/categories").then((response) => response.json());
}

function getChuckNorrisJoke(category: string): Promise<string> {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((joke) => joke.value)
    .catch((error) => {
      console.error(error);
    });
}

// Leave the line below for tests to work properly
export { getCategories, getChuckNorrisJoke };
