import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>Horvath & Tremblay</div>

      <div className={styles.nav_items}>
        <p>Advantage</p>
        <p>Team</p>
        <p>Results</p>
        <p>HT Helps</p>
        <p>Careers</p>
        <p>Offices</p>
        <div className={styles.nav_contact}>Contact Us</div>
      </div>
    </div>
  );
};

export default Navbar;
