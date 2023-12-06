import React from "react";
import Carousel from "react-material-ui-carousel";
// import Item from "./Item";
import imgs from "../helper/imgs.json";
import { image1 } from "../images/Studio.jpg";
import { image2 } from "../images/client_reformer.jpg";
import { image3 } from "../images/client_barrel.jpg";
import { Paper } from "@mui/material";

function CarouselImg() {
  const myImgList = [image1, image2, image3];

  return (
    <Carousel>
      {myImgList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  console.log("item ", props.item);
  return (
    <Paper>
      <img
        src={props.item.image}
        alt={props.item.title}
        style={{ width: "100%", height: "50vh" }}
      ></img>
    </Paper>
  );
}

export default CarouselImg;
