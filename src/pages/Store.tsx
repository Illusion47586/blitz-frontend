import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";

interface Props {}

const Store = (props: Props) => {
  return (
    <>
      <Banner />
      <Products />
    </>
  );
};

export default Store;
