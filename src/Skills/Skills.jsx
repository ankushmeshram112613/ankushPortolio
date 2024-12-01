import React from 'react'
import './Skills.scss'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import html_s from '../assets/html.png';
import css_s from '../assets/css.png';
import js_s from '../assets/js.png';
import node_s from '../assets/node.png';
import react_s from '../assets/react.png';
import mongo_db from '../assets/mongo-db.png';
import scss_s from '../assets/sass.png';
import tailwind_s from '../assets/tailwind.png';
import boot_s from '../assets/boot.png';
import npm_s from '../assets/npm.png';
// import plus_s from '../assets/Plus.png';
import figma_s from '../assets/figma.png';
import API_s from '../assets/API.png';

import { motion } from 'framer-motion';


const variants = {
  initial: {
    x: 100,
    y: 100,
    opacity: 0,

  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.5,
    }
  }
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between children animations
      delayChildren: 0.5,  // Initial delay for children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


const Skills = () => {
  return (
    <div id='Skills' className="skillContainer">
      <div className="skills" >

      <motion.div className="skillHeading" variants={variants}
          initial="initial"
          whileInView="animate">

          <motion.div class="wrapper" variants={variants}>
            <svg>
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                SKILLS
              </text>
            </svg>
          </motion.div>
        </motion.div>


        <motion.div className="skillItems" initial="hidden"
          whileInView="visible"
          variants={containerVariants} >
          <motion.div className="item" variants={itemVariants} >
            <img src={html_s} alt="" />
            <h3 >HTML</h3>
            <p>
              HTML is the standard markup language. It is used to create web pages and web applications.
            </p>
          </motion.div>
          <motion.div className="item" variants={itemVariants}  >
            <img src={css_s} alt="" />
            <h3>CSS</h3>
            <p>
              CSS (Cascading Style Sheets) describes the style and layout of HTML documents.
            </p>
          </motion.div>
          <motion.div className="item" variants={itemVariants} >
            <img src={js_s} alt="" />
            <h3>JavaScript</h3>
            <p>
              JavaScript is a programming language that adds interactivity and dynamic features to web pages.
            </p>
          </motion.div>
          <motion.div className="item" variants={itemVariants}>
            <img src={react_s} alt="" />
            <h3>ReactJS</h3>
            <p>
              React is a JavaScript library for building user interfaces.
            </p>
          </motion.div>
          <motion.div className="item" variants={itemVariants}>
            <img src={node_s} alt="" />
            <h3>NodeJS</h3>
            <p>
              Node.js is a JavaScript runtime environment that allows you to write server-side applications.
            </p>
          </motion.div>
          <motion.div className="item" variants={itemVariants}>
            <img src={mongo_db} alt="" />
            <h3>MongoDB</h3>
            <p>
              MongoDB is a NoSQL database that stores data in JSON-like documents.
            </p>
          </motion.div>
          <motion.div className="item" variants={itemVariants}>
            <img src={scss_s} alt="" />
            <h3>SCSS</h3>
            <p>
              SCSS (Sassy CSS) is a CSS preprocessor with features like variables, nesting, mixins, and functions.
            </p>
          </motion.div>
          <motion.div className="item" variants={itemVariants}>
            <img src={tailwind_s} alt="" />
            <h3>Tailwind CSS</h3>
            <p>
              Tailwind CSS is a utility-first CSS framework that provides a set of utility classes and components.
            </p>
          </motion.div>
          <motion.div className="item" variants={itemVariants}>
            <img src={boot_s} alt="" />
            <h3>Bootstrap</h3>
            <p>
              Bootstrap is a CSS framework that provides a responsive design and grid system.
            </p>
          </motion.div>
          <motion.div className="item" variants={itemVariants}>
            <img src={npm_s} alt="" />
            <h3>NPM</h3>
            <p>
              npm (Node Package Manager) manages JavaScript packages and dependencies.
            </p>
          </motion.div>
          <motion.div className="item" variants={itemVariants}>
            <img src={API_s} alt="" />
            <h3>REST APIs</h3>
            <p>
              REST APIs (Representational State Transfer) are protocols for building APIs.
            </p>
          </motion.div>
          <motion.div className="item" variants={itemVariants}>
            <img src={figma_s} alt="" />
            <h3>Figma</h3>
            <p>
              Figma is a design tool that allows you to create interactive and responsive designs.
            </p>
          </motion.div>
          
        </motion.div>


        


      </div >
      <motion.div className="skillInfo" variants={variants}>
        <motion.p variants={variants}>
          I Always Try My Best And Try To Learn From Everywhere. I Am Exploring Many Things Which Will Be Added Soon.....
        </motion.p>
        <hr />
      </motion.div>
    </div>
  )
}

export default Skills