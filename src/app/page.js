"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Opening from "@/components/Opening";
import Navbar from "@/components/Navbar";
import Redirects from "@/components/Redirects";
import OurProjects from "@/components/OurProjects";
import OneProject from "@/components/OneProject";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Opening />
      <Redirects /> 
      <OneProject />
      <OurProjects />
      <JoinUs />
      <Footer />
    </main>
  );
}
