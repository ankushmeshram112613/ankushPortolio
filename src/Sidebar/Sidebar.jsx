import { useState } from 'react'
import Links from './Links/Links'
import './Sidebar.scss'
import ToggleButtone from './ToggleButtone/ToggleButtone'
import { motion } from 'framer-motion'



const variants = {
    open:{
       clipPath:"circle(1400px at 50px 50px)",
       transition:{
        type:"spring",
        stiffness:20,
       }
    },

    closed:{
       clipPath:"circle(22px at 49px 46px)",
       transition:{
        delay:0.5,
        type:"spring",
        stiffness:400,
        damping:40,
       }
    }
}
 
const Sidebar = () => {
    const [open, setOpen] = useState(false)

   
    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <ToggleButtone setOpen={setOpen} />
        </motion.div>
    )
}

export default Sidebar