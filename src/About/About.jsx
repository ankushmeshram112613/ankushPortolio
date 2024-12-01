import React from 'react'
import './About.scss'
import { useTypewriter, cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'


const variants = {
  initial: {
    x: -500,
    y: 100,
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

const About = () => {

  const [typeEffect] = useTypewriter({
    words: ['I’m a passionate Full-Stack Developer and UX/UI Designer specializing in the MERN stack and Figma. With a strong foundation in front-end and back-end development, I excel at crafting seamless, user-centric web applications. My UX/UI expertise ensures that my projects are not only functional but also visually compelling and intuitive.', 'I’m a passionate Full-Stack Developer and UX/UI Designer specializing in the MERN stack and Figma. With a strong foundation in front-end and back-end development, I excel at crafting seamless, user-centric web applications. My UX/UI expertise ensures that my projects are not only functional but also visually compelling and intuitive.'],
    loop: {},
    deleteSpeed: 10,
    typeSpeed: 30
  })
  const [typeEffect_1] = useTypewriter({
    words: ['I’ve also completed certifications in LottieFiles for Framer and LottieFiles for Figma, enabling me to enhance designs with dynamic, high-quality animations that elevate user experiences..', 'I’ve also completed certifications in LottieFiles for Framer and LottieFiles for Figma, enabling me to enhance designs with dynamic, high-quality animations that elevate user experiences..'],
    loop: {},
    deleteSpeed: 10,
    typeSpeed: 30
  })
  const [typeEffect_2] = useTypewriter({
    words: ["Driven by curiosity and innovation, I’m constantly exploring the latest technologies and design trends to create impactful digital solutions. Whether it's designing in Figma or coding robust applications, I’m all about turning ideas into reality.  Let’s connect and build something amazing together!", " Driven by curiosity and innovation, I’m constantly exploring the latest technologies and design trends to create impactful digital solutions. Whether it's designing in Figma or coding robust applications, I’m all about turning ideas into reality.  Let’s connect and build something amazing together!"],
    loop: {},
    deleteSpeed: 10,
    typeSpeed: 30
  })

  return (
    <div id='AboutMe' className='aboutContainer'>
      <motion.div className="about" >
       

          <motion.div class="wrapper" >
            <svg>
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                ABOUT ME
              </text>
            </svg>
          </motion.div>

      
        <div className="space"></div>




        <motion.div className="info">


          <motion.p className='p1'  >{typeEffect} </motion.p>
          <hr />
          <br />
          <hr className='hr' />

          <motion.p className='p2'  >{typeEffect_1}</motion.p>
          <hr />
          <br />
          <hr className='hr' />
          <motion.p className='p3'  >{typeEffect_2}</motion.p>

        </motion.div>

      </motion.div>
      {/* <motion.div className="hr" variants={variants}>
        <hr />
      </motion.div> */}
    </div>
  )
}

export default About