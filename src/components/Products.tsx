import React, { MouseEventHandler, useEffect, useState } from "react";

import styles from "../styles/css/components/products.module.css";
import { ProductType } from "../redux/cart";

import Product from "./Product";
import axios from "axios";
import Lottie from "lottie-react";

import loadingAnimation from "../assets/animation/loading.json";
import { useHistory, useLocation } from "react-router-dom";
import ColorPicker from "./ColorPicker";

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

const types = ["Shirt", "Tshirt", "Pant", "Shoe"];

const Products = (props: Props) => {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [type, setType] = useState(query.get("type") ?? types[0]);
  const [color, setColor] = useState<string>(query.get("color") ?? "black");
  const [state, setState] = useState<RequestState>(RequestState.loading);
  const [error, setError] = useState<string>("");
  const [products, setProducts] = useState<ProductType[]>([]);

  // let url = "https://blitz-db-service.herokuapp.com/products" + location.search;

  const getProducts = async () => {
    setState(RequestState.loading);
    query.set("type", type.toLowerCase());
    query.set("color", color);
    const url = process.env.REACT_APP_BACKEND_URL + "/products" + "?" + query;
    const response = await axios.get(url);
    if (response.status === 200) {
      // console.log(response);
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
  }, [location.search]);

  useEffect(() => {
    query.set("color", color);
    history.push(location.pathname + "?" + query.toString());
  }, [color]);

  const clickHandler: MouseEventHandler<HTMLLIElement> = async (e) => {
    const text = e.currentTarget.querySelector("p")?.innerText;
    setType(text!.toLowerCase());
    query.set("type", text!.toLowerCase());
    history.push(location.pathname + "?" + query.toString());
  };

  return (
    <div className={styles.products}>
      <h2>Products</h2>
      <ul className={styles.categories}>
        {types.map((type) => (
          <li
            className={query.get("type") === type ? styles.selected : undefined}
            onClick={clickHandler}
          >
            <p>{type}</p>
          </li>
        ))}
        <ColorPicker color={color} setColor={setColor} />
      </ul>
      <div className={styles.catalogue}>
        {state === RequestState.loaded ? (
          products.length > 0 ? (
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <p>No products found for the category.</p>
          )
        ) : (
          state === RequestState.loading && (
            <Lottie animationData={loadingAnimation} />
          )
        )}
        {state === RequestState.error && (
          <p style={{ color: "red" }}>{error}</p>
        )}
      </div>
    </div>
  );
};

export default Products;
