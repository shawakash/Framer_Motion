import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        animate={{fontSize: 50, opacity: 1}}
        initial={{opacity: 0}}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;