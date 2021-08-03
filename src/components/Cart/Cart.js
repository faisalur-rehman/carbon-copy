import React from "react";
import CartScreen from "./CartScreen";
import "./Cart.css";
import Layout from "../Layout/Layout";

const Cart = (props) => {
  console.log("props", props);
  return (
    <Layout>
      <CartScreen data={props.location.state.data} />
    </Layout>
  );
};

export default Cart;
