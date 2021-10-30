import React from "react";

import styles from "../styles/css/components/products.module.css";

interface Props {}

const Products = (props: Props) => {
  return (
    <div className={styles.products}>
      <h2>Dresses</h2>
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
        <div className={styles.item}>
          <img src="https://source.unsplash.com/800x800?mountain" />
          <div className={styles.details}>
            <h3>Bingo kingo</h3>
          </div>
        </div>
        <div className={styles.item}>
          <img src="https://source.unsplash.com/800x800?mountain" />
          <div className={styles.details}>
            <h3>Bingo kingo</h3>
          </div>
        </div>
        <div className={styles.item}>
          <img src="https://source.unsplash.com/800x800?mountain" />
          <div className={styles.details}>
            <h3>Bingo kingo</h3>
          </div>
        </div>
        <div className={styles.item}>
          <img src="https://source.unsplash.com/800x800?mountain" />
          <div className={styles.details}>
            <h3>Bingo kingo</h3>
          </div>
        </div>
        <div className={styles.item}>
          <img src="https://source.unsplash.com/800x800?mountain" />
          <div className={styles.details}>
            <h3>Bingo kingo</h3>
          </div>
        </div>
        <div className={styles.item}>
          <img src="https://source.unsplash.com/800x800?mountain" />
          <div className={styles.details}>
            <h3>Bingo kingo</h3>
          </div>
        </div>
        <div className={styles.item}>
          <img src="https://source.unsplash.com/800x800?mountain" />
          <div className={styles.details}>
            <h3>Bingo kingo</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
