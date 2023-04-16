import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
  hidden: {
    rotate: -180
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
      // staggerChildren: 1,
    }
  },
  hover: {
    // rotate: -180,
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
  hover: {
    opacity: 0,
    pathLength: 0,
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }
}

const titleVariants = {
  hidden: {
    y: -100
  },
  visible: {
    y: 0,
    transition: {
      delay: .2,
      duration: 0.1,
      type: 'spring',
      stiffness: 1200      // stnifness on spring and duration on tween
    }
  }
}

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial='hidden'
          animate='visible'
          whileHover='hover'
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div className="title"
        variants={titleVariants}
        initial='hidden'
        animate='visible'
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;