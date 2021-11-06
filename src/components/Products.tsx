import React, { useEffect, useState } from "react";

import styles from "../styles/css/components/products.module.css";
import { ProductType } from "../redux/cart";

import Product from "./Product";
import axios from "axios";
import Lottie from "lottie-react";

import loadingAnimation from "../assets/animation/loading.json";

interface Props {}

const sampleProduct: ProductType = {
  name: "Bingo Kingo",
  imageUrl: "https://source.unsplash.com/800x800?mountain",
  id: "ABCD",
};

enum RequestState {
  loading,
  error,
  loaded,
}

const types = [];

const Products = (props: Props) => {
  const [state, setState] = useState<RequestState>(RequestState.loading);
  const [error, setError] = useState<string>("");
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async (
    type?: string,
    color?: string,
    limit?: number,
    skip?: number
  ) => {
    setState(RequestState.loading);
    let url = "https://blitz-db-service.herokuapp.com/products";
    if (type) url += "?type=" + type;
    if (color) url += "?color=" + color;
    if (limit) url += "?limit=" + limit;
    if (skip) url += "?skip=" + skip;
    const response = await axios.get(url);
    if (response.status === 200) {
      let prod: ProductType[] = [];
      setProducts([]);
      for (let index = 0; index < response.data.products.length; index++) {
        const element = response.data.products[index];
        const p: ProductType = {
          id: element._id,
          name: element.name.split(".")[0],
          imageUrl: element.image_url,
          type: element.type,
          subType: element.sub_type,
          color: element.color,
        };
        prod.push(p);
      }
      setProducts(prod);
      setState(RequestState.loaded);
    } else {
      setState(RequestState.error);
      setError(
        "Could not load products, please check your connection or try again later."
      );
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.products}>
      <h2>Products</h2>
      <ul className={styles.categories}>
        <li className={styles.selected}>
          <p>Dresses</p>
        </li>
        <li>
          <p>Pants</p>
        </li>
        <li>
          <p>Shirt</p>
        </li>
        <li>
          <p>Shoes</p>
        </li>
        <li>
          <p>Shorts</p>
        </li>
        <li>
          <p>Suit</p>
        </li>
        <li>
          <p>Hoodie</p>
        </li>
        <li>
          <p>Shoes</p>
        </li>
        <li>
          <p>Skirt</p>
        </li>
      </ul>
      <div className={styles.catalogue}>
        {state === RequestState.loaded &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        {state === RequestState.loading && (
          <Lottie animationData={loadingAnimation} />
        )}
        {state === RequestState.error && (
          <p style={{ color: "red" }}>{error}</p>
        )}
      </div>
    </div>
  );
};

export default Products;
