import React from 'react'
import './Footer.scss';


import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";

import { motion } from 'framer-motion';

const variants = {
  initial: {
    // x: -500,
    x: -100,
    opacity: 0,

  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

export const Footer = () => {
  return (
    <div className='footerContainer'>
      {/* <div className="hr">
        <hr />
      </div> */}
      <div className="footer">
        <hr />
        <div className="links">
          <motion.div className="icons" variants={variants}
            initial="initial"
            whileInView="animate">

            <div className="icons">
              <a href='https://www.youtube.com/' target='_blank'> <FaSquareYoutube size={25} /></a>
              <a href='https://www.facebook.com/' target='_blank'> <FaFacebookSquare size={25} /></a>
              <a href='https://www.instagram.com/' target='_blank'> <FaInstagram size={25} /></a>
              <a href='https://www.twitter.com/' target='_blank'> <FaSquareXTwitter size={25} /></a>
              <a href='https://www.snapchat.com/' target='_blank'> <FaSnapchatSquare size={25} /></a>
            </div>
          </motion.div>
          <motion.div className="link" variants={variants}
            initial="initial"
            whileInView="animate">
            <div className="link_1">
              <a href="http://www.linkdin.com/AnkushMeshram">Linkdin</a>
              <a href="https://www.github.com/ankushmeshram112613">GitHub</a>
              <a href="#">Blog</a>
              {/* <a href="#"></a> */}
              {/* <a href="#"></a> */}
            </div>
            <div className="link_2">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Contact Us</a>
              <a href="#">Career</a>
              <a href="#">Blog</a>
            </div>
          </motion.div>

        </div>
        <hr />
        <div className="footerSection">
          Copyright @ 2024 Ankush Meshram. All rights reserved
        </div>
      </div>
    </div>
  )
}
