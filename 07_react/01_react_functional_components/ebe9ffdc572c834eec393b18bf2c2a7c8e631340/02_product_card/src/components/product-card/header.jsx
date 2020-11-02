import React from "react";

const CardHeader = ({ name, platformLogos }) => {
  return (
    <>
      <h4>{name}</h4>
      {platformLogos.map((platform_logo) => {
        return <img key={platform_logo.url} src={platform_logo.url} />;
      })}
    </>
  );
};

export default CardHeader;
