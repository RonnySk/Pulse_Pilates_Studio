// import { Paper } from "@mui/material";
// import img1 from "../images/Studio.jpg";
// import img2 from "../images/client_reformer.jpg";
// import img3 from "../images/client_barrel.jpg";

function Item({ item }) {
  console.log("item ", item.image);
  return (
    <Paper>
      <img
        src=""
        alt={item.title}
        style={{ width: "100%", height: "50vh" }}
      ></img>
    </Paper>
  );
}

export default Item;
