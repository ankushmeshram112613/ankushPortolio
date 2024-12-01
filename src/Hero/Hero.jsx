import React from 'react'
import './Hero.scss'
import vi_1 from '../assets/vi_2.mp4'

import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'
// import bio from '../assets/bio.png'
// import {useTypewriter,cursor} from 'react-simple-typewriter'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },

    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const variants = {
    initial: {
      x: -200,
    //   y: -100,
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
      x: 200,
    //   y: -100,
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



 


const Hero = () => {

    //     const [typeEffect] = useTypewriter({
    //   words:[ 'Developer','developer'  ],
    //   loop: {},
    //   deleteSpeed: 50,
    //   typeSpeed: 50
    // })

    return (
        <div id="Home" className='heroContainer'>
            <Navbar/>
            <video autoPlay loop muted className='heroVideo'>
                <source src={vi_1} type='video/mp4' />
            </video>
            <motion.div className="hero">
                <motion.div className="name"  initial={{opacity:0.3,scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:0.8}} >👋,My Name Is <span className='myname'>Ankush Meshram</span> And I Am A </motion.div>
                <motion.div className="profection">
                    <motion.dir className='hading' data-text="Holo Effect"  variants={variants}
                initial="initial"
                whileInView="animate" >Web Developer</motion.dir>
                    {/* <dir className='hading' data-text="Holo Effect" style={{margin:'50px'}}>{typeEffect}</dir> */}
                    <motion.dir className='hading' data-text="Holo Effect" variants={variants_2}
                initial="initial"
                whileInView="animate">&UI/UX Designer</motion.dir>
                    {/* <dir className='hading'> <img src={bio} alt="" /></dir> */}

                </motion.div>
                <motion.div className="heroItems">
                    <motion.p>Bhopal Madhaya Pradesh</motion.p>
                </motion.div>

            </motion.div>
            <motion.div className="heroBtn">
                <motion.button initial={{opacity:0.3,scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:0.8}} >You Need a Deweloper</motion.button>
                <motion.button initial={{opacity:0.3,scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:0.8}} >You Need a Desigener</motion.button>
            </motion.div>

            {/* <div className="hr">
                <hr />
            </div> */}
        </div>
    )
}

export default Hero