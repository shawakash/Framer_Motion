import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { containerVariants } from './Base';
import { useState } from 'react';
import { homeContainerVariants } from './Home';

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza, setShowModal }) => {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal])
  
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

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
        className="container order"
      >
        {/* <AnimatePresence> */}
          {/* {showTitle && */}
            <motion.h2
              exit={{ y: -1000 }}
            >Thank you for your order :)</motion.h2>
          {/* } */}
        {/* </AnimatePresence> */}
        <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
        <motion.div
          variants={childVariants}
          className=""
        >
          {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Order;