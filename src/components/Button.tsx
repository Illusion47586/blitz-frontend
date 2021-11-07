import { ArrowRight } from "phosphor-react";
import React from "react";

import styles from "../styles/css/components/button.module.css";

interface Props {
  className?: string;
  text: string;
  onClick?: () => void;
}

const Button = (props: Props) => {
  return (
    <button
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
    >
      <div>
        <p>{props.text}</p>
        <ArrowRight weight="bold" />
      </div>
    </button>
  );
};

export default Button;
