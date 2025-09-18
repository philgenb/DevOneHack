import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const AppearAnimator = ({ delay = 0, downScale = false, animationProps, children }) => {

    return (
        <motion.div
            initial={{ opacity: 0, scale: downScale ? 1.2 : 1,  ...animationProps?.initial }}
            animate={{ opacity: 1, scale: downScale ? 1 : 1  , ...animationProps?.animate }}
            transition={{
                delay: delay + (animationProps?.transition?.delay || 0),
                duration: animationProps?.transition?.duration || 0.3,
                type: animationProps?.transition?.type || 'spring',
                bounce: animationProps?.transition?.bounce || 0.25,
                stiffness: animationProps?.transition?.stiffness || 400,
                damping: animationProps?.transition?.damping || 30,
            }}
            // className={`flex justify-center`}
        >
            {children}
        </motion.div>
    );
};

export default AppearAnimator;
