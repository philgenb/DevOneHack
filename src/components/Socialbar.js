import {motion} from "framer-motion";

export default function SocialBar() {
    return (
        <div className="flex gap-14">
            <motion.a
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2, delay: 0.4}}
                whileHover={{ scale: 1.1, transition: {delay: 0, duration: 0.05}}}
                href="https://github.com/philgenb">
                <img src="/linkedin.svg"  alt="LinkedIn"/>
            </motion.a>
            <motion.a
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2, delay: 0.5}}
                whileHover={{ scale: 1.1, transition: {delay: 0, duration: 0.05}}}
                href="https://github.com/philgenb">
                <img src="/github.svg" alt="github"/>
            </motion.a>
            <motion.a
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2, delay: 0.6}}
                whileHover={{ scale: 1.1, transition: {delay: 0, duration: 0.05}}}
                href="https://discord.com/channels/164783530268819457">
                <img src="/discord.svg" alt="discord"/>
            </motion.a>
        </div>
    )
}