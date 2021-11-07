import axios from "axios";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Button from "../components/Button";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { addItem, ProductType, selectCart } from "../redux/cart";

import styles from "../styles/css/pages/compare.module.css";

// const sampleProduct: ProductType = {
//   name: "Bingo Kingo",
//   imageUrl: "https://source.unsplash.com/800x800?mountain",
//   id: "ABCD",
// };

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
  const [recommendations, setRecommendations] = useState<ProductType[]>([]);
  const [index, setIndex] = useState<number>(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/product?id=${query.get("id")}`)
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
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/recommendations?id=${query.get(
          "id"
        )}`
      )
      .then((response) => {
        if (response.status === 200) {
          // console.log(response);
          const r = [];
          for (let index = 0; index < response.data.length; index++) {
            const e = response.data[index];
            if (e) {
              const p: ProductType = {
                ...e,
                id: e._id,
                imageUrl: e.image_url,
                subType: e.sub_type,
              };
              r.push(p);
            }
          }
          console.log(r);
          setRecommendations(r);
        }
      });
  });

  const buy = (product: ProductType) => {
    dispatch(addItem(product));
  };

  return (
    <div className={styles.comparePage}>
      <div className={styles.current}>
        <Button
          className={styles.addToBag}
          text="Add to Bag"
          onClick={() => buy(currentProduct!)}
        />

        <div className={styles.product}>
          <h3>{currentProduct?.name}</h3>
          <div
            className={styles.product_image}
            style={{ backgroundImage: `url(${currentProduct?.imageUrl})` }}
          />
        </div>
      </div>
      <div className={styles.other}>
        {recommendations.length > 0 ? (
          <>
            <button
              id={styles.previous}
              onClick={() => {
                if (index > 0) setIndex(index - 1);
              }}
            >
              <ArrowLeft />
            </button>
            <button
              id={styles.next}
              onClick={() => {
                if (index < recommendations.length - 2) setIndex(index + 1);
              }}
            >
              <ArrowRight />
            </button>
            <Button
              className={styles.addToBag}
              text="Add to Bag"
              onClick={() => buy(recommendations[index]!)}
            />

            <div className={styles.product}>
              <h3>{recommendations[index].name}</h3>
              <div
                className={styles.product_image}
                style={{
                  backgroundImage: `url(${recommendations[index].imageUrl})`,
                }}
              />
            </div>
          </>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default Compare;
