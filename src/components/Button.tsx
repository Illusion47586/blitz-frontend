import { ArrowRight, Play } from "phosphor-react";
import React from "react";

import styles from "../styles/css/components/button.module.css";

interface Props {}

const Button = (props: Props) => {
  return (
    <button className={styles.button}>
      <div>
        <p>Start</p>
        <ArrowRight weight="bold" />
      </div>
    </button>
  );
};

export default Button;
