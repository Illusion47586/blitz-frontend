import { ArrowRight, Play } from "phosphor-react";
import React from "react";

import styles from "../styles/css/components/button.module.css";

interface Props {
  className?: string;
  text: string;
}

const Button = (props: Props) => {
  return (
    <button className={`${styles.button} ${props.className}`}>
      <div>
        <p>{props.text}</p>
        <ArrowRight weight="bold" />
      </div>
    </button>
  );
};

export default Button;
