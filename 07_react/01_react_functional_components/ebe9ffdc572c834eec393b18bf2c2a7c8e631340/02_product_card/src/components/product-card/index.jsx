import React from "react";
import CardBody from "./body";
import CardFooter from "./footer";
import CardHeader from "./header";

const ProductCard = ({ product }) => {
  return (
    <>
      <CardHeader name={product.name} platformLogos={product.platforms} />
      <CardBody
        cover={product.cover.url}
        firstReleaseDate={product.first_release_date}
        genres={product.genres}
        summary={product.summary}
        screenshots={product.screenshots}
      />
      <CardFooter slug={product.slug} />
    </>
  );
};

export default ProductCard;
