import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { buy, selectCart } from "../redux/cart";

import styles from "../styles/css/pages/cart.module.css";

interface Props {}

const Cart = (props: Props) => {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const [items, setItems] = useState(cart.items);

  useEffect(() => {
    console.log(cart);
    setItems(cart.items);
  }, [cart]);

  return (
    <section className={styles.cart}>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <img src={item.imageUrl} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.id}</p>
                </div>
                {/* <button onClick={() => dispatch(removeItem(item.id))}>
                  remove
                </button> */}
              </li>
            ))}
          </ul>
          <Button text="Buy" onClick={() => dispatch(buy())} />
        </>
      ) : (
        <p>Cart is empty</p>
      )}
    </section>
  );
};

export default Cart;
