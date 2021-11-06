import React, { MouseEventHandler } from "react";
import styles from "../styles/css/components/product.module.css";

import { ProductType } from "../redux/cart";
import { useHistory } from "react-router";

interface Props {
  product: ProductType;
}

const Product = (props: Props) => {
  const history = useHistory();

  const onClick: MouseEventHandler<HTMLDivElement> = () => {
    history.push(`/compare?id=${props.product.id}`);
  };

  return (
    <div className={styles.item} onClick={onClick}>
      <img src={props.product.imageUrl} />
      {/* <div className={styles.details}>
        <h3>{props.product.name}</h3>
      </div> */}
    </div>
  );
};

export default Product;
