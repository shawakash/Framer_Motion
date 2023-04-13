import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        animate={{fontSize: 50, opacity: 1}}
        initial={{opacity: 0}}
        transition={{delay: .75, type: 'spring', stiffness: 300}}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          initial={{opacity: 0}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{delay: 1, type: 'tween'}}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;