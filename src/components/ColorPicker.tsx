import React, { Dispatch, SetStateAction } from "react";

import styles from "../styles/css/components/colorPicker.module.css";

interface Props {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

const ColorPicker = (props: Props) => {
  const colors = new Map<string, string>([
    ["#000000", "black"],
    ["#5A8EFF", "blue"],
    ["#43FF62", "green"],
    ["#FF4242", "red"],
    ["#ffffff", "white"],
    ["#FFCD42", "yellow"],
  ]);

  return (
    <div className={styles.picker}>
      {Array.from(colors.keys()).map((hex) => (
        <div
          style={{ backgroundColor: hex }}
          onClick={() => {
            props.setColor(colors.get(hex)!);
          }}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
