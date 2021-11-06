import { MagnifyingGlass, User } from "phosphor-react";
import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/css/components/navbar.module.css";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h2>The Blitz Machine</h2>
      </div>
      <ul className={styles.tabs}>
        <li>
          <NavLink to="/home" activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" activeClassName={styles.active}>
            Store
          </NavLink>
        </li>
        <li>
          <NavLink to="/upload" activeClassName={styles.active}>
            Upload
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName={styles.active}>
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={styles.active}>
            About us
          </NavLink>
        </li>
      </ul>
      <ul className={styles.menu}>
        <li title="Search">
          <MagnifyingGlass className={styles.icon} />
        </li>
        <li title="Profile">
          <User className={styles.icon} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
