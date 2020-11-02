import React from "react";

const CardBody = ({ cover, firstReleaseDate, genres, summary }) => {
  return (
    <>
      <img src={cover} />
      <p>{firstReleaseDate}</p>
      <p>{genres.map((genre) => genre.name)}</p>
      <p>{summary}</p>
    </>
  );
};

export default CardBody;
