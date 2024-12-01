import React from 'react'
import './Navbar.scss'
import Sidebar from '../Sidebar/Sidebar';
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <div className='navContainer'>
        <div className="navbar">
            <div className="hamburger">
                <Sidebar/> 
            </div>
            <motion.div className='logo'
                initial={{opacity:0.3,scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:0.8}}
                >ANKUSH MESHRAM</motion.div>
            {/* <div className="nav">
                <ul>
                    <li >Home</li>
                    <li>AboutMe</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contect</li>
                </ul>
            </div> */}
        </div>
    </div>
  )
}

export default Navbar