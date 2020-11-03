import React from "react";
import axios from "axios";

const PlatformPage = (): JSX.Element => {
  const [platforms, setPlatforms] = React.useState();

  React.useEffect(() => {
    axios("https://videogames-sparta.herokuapp.com/platforms", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        setPlatforms(response.data);
      })
      .catch((error) => {
        console.error(error);
      }),
      [setPlatforms];
  });

  return <div>{JSON.stringify(platforms)};</div>;
};

export default PlatformPage;
