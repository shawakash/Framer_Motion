import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      initial={{ opacity: 0, x: '100vh'}}
      animate={{ opacity: 1, x: 0 }}
      transition={{delay: .5, type: 'spring', stiffness: 300}}
    >

      <motion.h3 animate={{ fontSize: 22, }}>Step 1: Choose Your Base</motion.h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              whileHover={{scale: 1.1, fontWeight: 1000 , color: '#27E1C1'}}
              whileTap={{scale: 1, color: '#27E1C1'}}
              animate={{}}
              key={base}
              onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: .9 }}
          initial={{ x: '-100vh' }}
          animate={{ x: 0, scale: 1 }}
          transition={{type: 'spring', stiffness: 300}}
        >
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;