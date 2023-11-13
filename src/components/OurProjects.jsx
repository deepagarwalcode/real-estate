import React from "react";
import styles from "./OurProjects.module.css";
import {BsArrowRight} from "react-icons/bs";

const OurProjects = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "The Residences At Trowbridge",
      sub: "Cambridge, MA",
    },
    {
      img: "https://images.unsplash.com/photo-1604014238029-86e8c12579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "The Chelsea Collection",
      sub: "Chelsea, MA",
    },
    {
      img: "https://images.unsplash.com/photo-1604014238478-7c24bc9adb9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Greenview Apartments",
      sub: "New Britain, CT",
    },
    {
      img: "https://images.unsplash.com/photo-1604709177595-ee9c2580e9a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "1331-1337 Main Street",
      sub: "Cambridge, MA",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1683129807314-95150b5c3fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "2305 Monroe St",
      sub: "Hollywood, FL",
    },
    {
      img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "1273 NE 38th Street",
      sub: "Oakland Park, FL",
    },
  ];

  return (
    <div className={styles.our_projects}>
      <div className={styles.head}>
        <p>Our Results</p>
        <BsArrowRight />
      </div>
      <div className={styles.results}>
        {data.map((item, index) => (
          <div className={styles.result} key={index}>
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <p>{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
