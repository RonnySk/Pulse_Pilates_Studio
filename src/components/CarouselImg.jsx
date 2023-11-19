import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import imgs from "../helper/imgs.json";

function CarouselImg() {
  return (
    <Carousel>
      {imgs.map((item, i) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselImg;
