"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Opening.module.css";

const Opening = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const animation = () => {
    gsap.from(line1Ref.current.children, {
      duration: 0.8,
      ease: "power4.in",
      // y: "20%",
      stagger: 0.1,
      opacity: 0,
    });
    gsap.from(line2Ref.current.children, {
      duration: 0.8,
      ease: "power4.in",
      // y: "20%",
      stagger: 0.1,
      opacity: 0,
      delay: 1,
    }, "-=1.4");
  };

  useEffect(() => {
    animation();
  }, [])

  return (
    <div className={styles.opening}>
      <div className={styles.line1} ref={line1Ref}>
        <p className={styles.o_header}>Strategic</p>
        <p className={styles.o_header}>Experts</p>

        <img
        style={{borderRadius: "10vh"}}
          className={styles.o_picture}
          src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
          alt=""
        />
        <p className={styles.o_header}>for</p>
      </div>
      <div className={styles.line2} ref={line2Ref}>
        <p className={styles.o_desc}>
          Dedicated to being the best source of information and expertise in the
          real-estate marketplace.
        </p>
        <p className={styles.o_header}>Profitable</p>
        <p className={styles.o_header}>Investments</p>
      </div>
    </div>
  );
};

export default Opening;
