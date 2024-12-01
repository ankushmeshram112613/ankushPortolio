import React from 'react'
import './Contact.scss';
import { motion } from 'framer-motion';

const variants = {
    initial: {
        // x: -500,
        y: -200,
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
        x: 400,
        //   y: -200,
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
        // x: -500,
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

const Contact = () => {
    return (
        <div id='Contact' className='contactContainer'>
            <div className="contact">
                <motion.div className='contactSection_1' variants={variants} initial="initial" whileInView="animate">
                    Let's Get Started
                </motion.div>
                <motion.form className='contactSection_2' >
                    <div className="contactItem">
                        My name is <input type="text" placeholder='YOUR FULL NAME' /> and I
                    </div>
                    <div className="contactItem">
                        have a <input type="text" placeholder='WEBSITE , FULL-TIME JOB , ETC.' /> that
                    </div>
                    <div className="contactItem">
                        needs halp.You can me reach me at
                    </div>
                    <div className="contactItem" >
                        <input id='email' type="email" placeholder='YOUR EMAIL ADDRESS' /> to
                    </div>
                    <div className="contactItem">
                        things started.
                    </div>
                    <motion.div className="contactBtn" variants={variants_2} initial="initial" whileInView="animate">
                        <hr />
                        <button> SEND INFO</button>
                    </motion.div>
                    <div className='someinfo'>Contact to make new connections</div>

                </motion.form>
            </div>
        </div>
    )
}

export default Contact