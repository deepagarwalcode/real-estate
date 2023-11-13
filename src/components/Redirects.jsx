import React, { useEffect, useRef } from "react";
import styles from "./Redirects.module.css";
import gsap from "gsap";

const Redirects = () => {
  const picture1 = useRef(null);
  const animation = () => {
    gsap.from(picture1.current, {
      duration: 0.8,
      ease: "power4.outIn",
      // y: "40%",
      width: 0,
      stagger: 0.2
    }, "+=0.6");

  };

  useEffect(() => {
    animation();
  }, []);


  return (
    <div className={styles.redirects} ref={picture1}>
      <div className={styles.img_with_text} >
        <img
          src="https://images.unsplash.com/photo-1542901453-105b5deb9fff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <p>Retail</p>
        <p>Commercial Shopfronts</p>
      </div>
      <div className={styles.img_with_text} >
        <img
          src="https://images.unsplash.com/photo-1494380982332-dfc36fbfece6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt=""
        />
        <p>Multi-Family</p>
        <p>Apartment Complexes</p>
      </div>
      <div className={styles.img_with_text} >
        <img
          src="https://images.unsplash.com/photo-1593054538306-3e61b738a10c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1134&q=80"
          alt=""
        />
        <p>1031 Exchange</p>
        <p>Tax-Deferred Swaps</p>
      </div>
    </div>
  );
};

export default Redirects;
