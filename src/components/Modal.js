import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { buttonVariant } from './Home'
import { buttonMovementVarients } from './Base'
import { Link } from 'react-router-dom'

const backdrop = {
    visible: {
        opacity: 1,
        transition: {
            // delay: 0.5,
            type: 'tween',
        }
    },
    hidden: {
        opacity: 0,
    },
    exit: {
        opacity: 0,
        transition: {
            type: 'spring'
        }
    }
}

const modal = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            // stifness: 300,
            mass: 0.5
        },
    },
    hidden: {
        y: '-100vw',
        opacity: 0
    },
    exit: {
        y: '-100vw',
        transition: {
            // delay: 0.2,
            type: 'spring'
        }
    }
}

const modalButtonConatiner = {
    tap: {
        scale: .9
    },
    hidden: {
        y: '100vw',
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            mass: 0.5,
        }
    },
    exit: {
        y: '100vw',
        transition: {
            // delay: 0.2,
            type: 'spring'
        }
    }

}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                {showModal &&
                    <motion.div className='backdrop'
                        variants={backdrop}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                    <AnimatePresence exitBeforeEnter>
                        <motion.h2
                            variants={modal}
                        >
                            Want to start again ?
                        </motion.h2>
                        <motion.div
                            variants={modalButtonConatiner}
                            // whileHover='hover'
                            whileTap='tap'
                            className='buttonContainer'
                        >
                            <Link to='/'>
                                <motion.button
                                    variants={buttonVariant}
                                    whileHover='hover'
                                    whileTap='tap'
                                    onClick={() => setShowModal(false)}
                                >
                                    ReOrder
                                </motion.button>
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default Modal