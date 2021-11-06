import axios from "axios";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Button from "../components/Button";
import { ProductType } from "../redux/cart";

import styles from "../styles/css/pages/compare.module.css";

const sampleProduct: ProductType = {
  name: "Bingo Kingo",
  imageUrl: "https://source.unsplash.com/800x800?mountain",
  id: "ABCD",
};

interface Props {}

enum RequestState {
  loading,
  error,
  loaded,
}

const Compare = (props: Props) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [loading, setLoading] = useState<RequestState>(RequestState.loading);
  const [currentProduct, setCurrentProduct] = useState<ProductType | null>(
    null
  );

  useEffect(() => {
    axios
      .get(
        `https://blitz-db-service.herokuapp.com/product?id=${query.get("id")}`
      )
      .then((response) => {
        console.log(response.data);
        setCurrentProduct({
          id: response.data._id,
          name: response.data.name,
          imageUrl: response.data.image_url,
          type: response.data.type,
          subType: response.data.sub_type,
          color: response.data.color,
        });
        setLoading(RequestState.loaded);
      });
  }, []);

  return (
    <div className={styles.comparePage}>
      <div className={styles.current}>
        <Button className={styles.addToBag} text="Add to Bag" />

        <div className={styles.product}>
          <h3>{currentProduct?.name}</h3>
          <div
            className={styles.product_image}
            style={{ backgroundImage: `url(${currentProduct?.imageUrl})` }}
          />
        </div>
      </div>
      <div className={styles.other}>
        <button id={styles.previous}>
          <ArrowLeft />
        </button>
        <button id={styles.next}>
          <ArrowRight />
        </button>
        <Button className={styles.addToBag} text="Add to Bag" />

        <div className={styles.product}>
          <h3>{sampleProduct.name}</h3>
          <div
            className={styles.product_image}
            style={{ backgroundImage: `url(${sampleProduct.imageUrl})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Compare;
