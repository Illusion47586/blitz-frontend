import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";

import styles from "../styles/css/components/colorPicker.module.css";

interface Props {
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

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {};

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
