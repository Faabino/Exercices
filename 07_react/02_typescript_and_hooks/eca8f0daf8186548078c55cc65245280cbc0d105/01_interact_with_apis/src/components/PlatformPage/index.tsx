import React from "react";
import axios from "axios";

const PlatformPage = (): JSX.Element => {
  React.useEffect(() => {
    axios("https://videogames-sparta.herokuapp.com/", {
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    return (): void => {
      console.log("Unmounted");
    };
  }, []);

  return <>Platforms</>;
};

export default PlatformPage;
