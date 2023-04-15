import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { containerVariants, listVariants } from './Base';
import { buttonVariant, homeContainerVariants } from './Home';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div
      variants={homeContainerVariants}
      initial="hidden"
      animate='visible'
      exit='exit'
    >
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className="toppings container">

        <h3>Step 2: Choose Toppings</h3>
        <ul>
          {toppings.map(topping => {
            let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
            return (
              <motion.li
                variants={listVariants}
                whileHover='hover'
                whileTap='tap'
                key={topping}
                onClick={() => addTopping(topping)}>
                <span
                  className={spanClass}
                >
                  {topping}
                </span>
              </motion.li>
            )
          })}
        </ul>


        <Link to="/order">
          <motion.div
            className=""
          >
            <motion.button
              variants={buttonVariant}
              whileHover='hover'
              whileTap='tap'
            >
              Order
            </motion.button>

          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Toppings;