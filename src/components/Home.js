import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const headerVariants = {
  visible: {
    fontSize: 50,
    opacity: 1,
    transition: {
      delay: .75,
      type: 'spring',
      stiffness: 300,
      
    }
  },
  hidden: {
    opacity: 0
  }
}
export const baseVariants = {

  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      type: 'tween'
    }
  }
}

export const buttonVariant = {

  hidden: {
      // opacity: 0 
    },
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgba(255, 255, 255)',
    boxShadow: '0px 0px 8px rgba(255, 255, 255)',
  },
  tap: { 
    scale: 0.9 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: 'tween' 
    }
  },
}

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        variants={headerVariants}
        initial='hidden'
        animate='visible'
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.div
          variants={baseVariants}
          initial='hidden'
          animate='visible'
          className="">

          <motion.button
            variants={buttonVariant}
            whileHover='hover'
            whileTap='tap'
          >
            Create Your Pizza
          </motion.button>
        </motion.div>
      </Link>
    </div>
  )
}

export default Home;