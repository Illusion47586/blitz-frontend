import React, { useEffect, useState } from "react";

import styles from "../styles/css/components/banner.module.css";

interface Props {}

const Banner = (props: Props) => {
  const [visible, setVisible] = useState<boolean>(
    sessionStorage.getItem("banner") ? false : true
  );

  const hide = () => {
    sessionStorage.setItem("banner", "false");
    setVisible(false);
  };

  useEffect(() => {
    const val = sessionStorage.getItem("banner");
    if (val === "false") hide();
  }, []);

  return (
    <>
      {visible && (
        <div className={styles.banner}>
          <h2>Buy for over ₹ 1000 and get free delivery.</h2>
          <button onClick={hide}>Got it</button>
        </div>
      )}
    </>
  );
};

export default Banner;
