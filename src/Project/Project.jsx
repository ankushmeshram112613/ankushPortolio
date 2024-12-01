import React from 'react'
import './Project.scss'
import port from '../assets/port.png'
import api_ from '../assets/api_.png'
import weather from '../assets/weather.png'
import tic_tac from '../assets/tic_tac.png'

import { motion } from 'framer-motion'
import PhoneDesign from './Project_for_mobile'


const variants = {
  initial: {
    // x: -500,
    y: -100,
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
const variants_1 = {
  initial: {
    x: 200,
    y: 200,
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
const variants_2 = {
  initial: {
    x: -200,
    y: 200,
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


const Project = () => {
  return (
    // <div id='Projects' className='projectContainer'>
    //   <div className="projects">
    //     {/* <div className="projectHading"> */}
    //     <motion.div class="wrapper" variants={variants}
    //       initial="initial"
    //       whileInView="animate">
    //       <svg>
    //         <text x="50%" y="50%" dy=".35em" text-anchor="middle">
    //           PROJECTS
    //         </text>
    //       </svg>
    //     </motion.div>
    //     {/* PROJECTS */}
    //     {/* </div> */}
    //     <div className="projectItem">
    //       <div className='item'>
    //         <motion.div className="project_img" variants={variants_2}
    //     initial="initial"
    //     whileInView="animate">
    //           <motion.img src={port} alt=""   />
    //         </motion.div>
    //         <div className="project_info">
    //           <motion.p variants={variants_1}
    //             initial="initial"
    //             whileInView="animate">
    //             Designed and developed the front-end of a portfolio website with a focus on creating a responsive and visually appealing layout. Implemented interactive features using HTML, CSS, and JavaScript to enhance user experience and ensure seamless functionality across devices.
    //           </motion.p>
    //           <motion.a
    //             variants={variants_2}
    //             initial="initial"
    //             whileInView="animate"
    //             href="https://dashing-biscotti-426f16.netlify.app/" target='_blank'>Project Link</motion.a>
    //         </div>
    //       </div>

    //       <div className='item'>

    //         <div className="project_info">
    //           <motion.p variants={variants_2}
    //     initial="initial"
    //     whileInView="animate" >
    //             Developed a dynamic weather website using Node.js, Express, and MongoDB. Integrated APIs to fetch real-time weather data based on user inputs and displayed it through an intuitive user interface. Implemented MongoDB for storing user preferences and search history, ensuring a seamless and personalized experience. Focused on responsive design and efficient server-side rendering for optimal performance.
    //           </motion.p>
    //           <motion.a
    //           variants={variants_2}
    //           initial="initial"
    //           whileInView="animate" 
    //           href="https://dashing-biscotti-426f16.netlify.app/" target='_blank'>Project Link</motion.a>
    //         </div>
    //         <motion.div className="project_img" variants={variants_1}
    //             initial="initial"
    //             whileInView="animate">
    //           < motion.img src={weather} alt=""  />
    //         </motion.div>
    //       </div>

    //       <div className='item'>
    //         <motion.div className="project_img" variants={variants_2}
    //     initial="initial"
    //     whileInView="animate">
    //           <img src={api_} alt="" />
    //         </motion.div>
    //         <div className="project_info">
    //           <motion.p variants={variants_1}
    //     initial="initial"
    //     whileInView="animate">
    //             Developed and tested a REST API for managing rankings of a 100-meter Olympic race using Postman. The API supports CRUD operations, allowing users to add, update, retrieve, and delete race rankings. Focused on building efficient endpoints with proper status codes and error handling to ensure reliability and performance.
    //           </motion.p>
    //           <motion.a 
    //           variants={variants_2}
    //           initial="initial"
    //           whileInView="animate"
    //           href="https://dashing-biscotti-426f16.netlify.app/" target='_blank'>Project Link</motion.a>
    //         </div>
    //       </div>

    //       <div className='item'>

    //         <div className="project_info">
    //           <motion.p variants={variants_2}
    //     initial="initial"
    //     whileInView="animate">
    //             Developed an interactive Tic-Tac-Toe game using HTML, CSS, JavaScript, and React. Implemented dynamic game logic with React's state management to handle player turns, win detection, and reset functionality. Designed a clean and responsive user interface to provide an engaging experience across devices.
    //           </motion.p>
    //           <motion.a
    //           variants={variants_2}
    //           initial="initial"
    //           whileInView="animate"
    //           href="https://moonlit-kitsune-b956c4.netlify.app/" target='_blank'>Project Link</motion.a>
    //         </div>
    //         <motion.div className="project_img" variants={variants_1}
    //     initial="initial"
    //     whileInView="animate">
    //           <img src={tic_tac} alt="" />
    //         </motion.div>
    //       </div>

    //     </div>
    //   </div>
    //   <div className="hrLine">
    //     <hr />
    //   </div>
    // </div>

<div className="phone">
< PhoneDesign/ >
</div>

  )
}

export default Project