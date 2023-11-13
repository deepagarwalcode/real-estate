import React from 'react'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <p> © 2023 Horvath & Tremblay Brokerage</p>
        <p>Horvath & Tremblay</p>
        <div className={styles.socials}>
            <BsFacebook />
            <BsLinkedin />
            <BsTwitter />
        </div>
    </div>
  )
}

export default Footer