import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonVariant } from './Home';

export const containerVariants = {

  hidden: {
    opacity: 0,
    x: '100vh'
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: .5,
      type: 'spring',
      stiffness: 300,
      mass: 0.5,
      damping: 12,
      staggerChildren: 0.4,
      when: 'beforeChildren'
    }
  },

}

export const buttonMovementVarients = {

  tap: {
    scale: .9
  },
  hidden: {
    x: '-100vh',
  },
  visible: {
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
    }
  },

}

export const listVariants = {
  
  hover: {
    scale: 1.3, 
    fontWeight: 1000, 
    originX: 0, 
    color: 'yellow' 
  },
  tap: { 
    scale: 1, 
    color: 'yellow' 
  },

}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h3
        style={{ fontSize: 22, }}
      >
        Step 1: Choose Your Base
      </h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              variants={listVariants}
              whileHover='hover'
              whileTap='tap'
              key={base}
              onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={buttonMovementVarients}
          whileHover='hover'
          whileTap='tap'
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariant}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;