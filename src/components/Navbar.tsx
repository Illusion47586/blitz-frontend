import { List, MagnifyingGlass, User } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../hooks/windowDimensions";

import styles from "../styles/css/components/navbar.module.css";

interface Props {}

const Items = () => {
  return (
    <>
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
      </ul>
      <ul className={styles.menu}>
        <li title="Search">
          <MagnifyingGlass className={styles.icon} />
        </li>
        <li title="Profile">
          <User className={styles.icon} />
        </li>
      </ul>
    </>
  );
};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [compact, setCompact] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setOpen(false);
    setCompact(width <= 1050);
  }, [width]);

  const toggle = () => setOpen(!open);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h2>The Blitz Machine</h2>
      </div>
      {!compact ? (
        <Items />
      ) : (
        <ul className={styles.menu}>
          <li title="Profile" onClick={toggle}>
            <List className={styles.icon} />
          </li>
        </ul>
      )}
      {open && (
        <div className={styles.menuBG} onClick={toggle}>
          <div className={styles.menu}>
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
