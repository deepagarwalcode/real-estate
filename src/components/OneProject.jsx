import React, { useEffect, useRef } from "react";
import styles from "./OneProject.module.css";
import { BsArrowRight } from "react-icons/bs";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import IndividualCharacters from "@/utils/IndividualCharacters";

const OneProject = () => {
  const picture1 = useRef(null);
  const picture2 = useRef(null);
  const line1Ref = useRef(null);
  const animation = () => {
    gsap.registerPlugin(ScrollTrigger);


    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: line1Ref.current,
        start: "top 70%",
        end: "top 70%",
        // markers: true,
      },
    });
    timeline.from(picture1.current, {
      duration: 0.8,
      ease: "power4.outIn",
      // y: "40%",
      width: 0,
      stagger: 0.2,
    });
    timeline.from(picture2.current, {
      duration: 0.8,
      ease: "power4.outIn",
      // y: "40%",
      width: 0,
      stagger: 0.2,
    }, "<");
    timeline.from(line1Ref.current, {
      duration: 0.5,
      ease: "power4.in",
      y: "20%",
      stagger: 0.1,
      opacity: 0,
    }, "<");
  };

  const desc =
    "Welcome to Office Nueve, a forward-looking investment venture. Embrace growth, modernity, and sustainability as you shape the future of smart investments with us.";
  const descArray = desc.split(/(\s)/);

  // const animationPic = () => {
  //   gsap.from(picture1.current, {
  //     duration: 0.8,
  //     ease: "power4.outIn",
  //     // y: "40%",
  //     x: "50%",
  //     opacity: 0,
  //     stagger: 0.2
  //   }, "+=0.6");
  // };

  useEffect(() => {
    animation();
    // animationPic();
  }, []);

  return (
    <div className={styles.one_project}>
      <div className={styles.text}>
        <p ref={line1Ref}>OFFICE NUEVE</p>
        <p>
          {descArray.map((char, index) => (
            <IndividualCharacters char={char} index={index} key={index} />
          ))}
        </p>
        <p>
          Learn more <BsArrowRight />
        </p>
      </div>
      <div>
        <div className={styles.picture_w_details} style={{filter: "none", marginRight: "2px"}}  ref={picture1}>
          <img
            className={styles.construction_image}
            src="https://images.unsplash.com/photo-1466803136990-7c174b34ff32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt=""
          />
        </div>

        <div className={styles.picture_w_details} ref={picture2}>
          <img
            src="https://images.unsplash.com/photo-1564182842834-681b7be6de4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
          <p>1985, Buelleward, 18th Street</p>
          <p>Residential at Chicago</p>
        </div>
      </div>
    </div>
  );
};

export default OneProject;
