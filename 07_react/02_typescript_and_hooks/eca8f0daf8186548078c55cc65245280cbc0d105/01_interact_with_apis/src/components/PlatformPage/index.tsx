import React from "react";
import axios from "axios";
import { Platform } from "../../types/Platform.d";

const defaultPlatform: Platform[] = [];

const PlatformPage = (): JSX.Element => {
  const [platforms, setPlatforms] = React.useState(defaultPlatform);

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
      });
  }, []);

  return (
    <>
      <select className="custom-select">
        {platforms.map((platform) => {
          return (
            <option key={platform.slug} value={platform.slug}>
              {platform.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default PlatformPage;
