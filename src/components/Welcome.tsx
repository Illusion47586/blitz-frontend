import React from "react";
import { useHistory } from "react-router";
import styles from "../styles/css/components/welcome.module.css";
import Button from "./Button";

interface Props {}

const Welcome = (props: Props) => {
  const history = useHistory();
  return (
    <section className={styles.welcome}>
      <h1>
        Welcome to the <span>Blitz Machine</span>.
      </h1>
      <p>
        This project was made as submission for myntra hackerramp 2021 by team
        Blitz.
      </p>
      <Button text="Start" onClick={() => history.push("/store")} />
    </section>
  );
};

export default Welcome;
