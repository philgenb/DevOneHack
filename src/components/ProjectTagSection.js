import { motion } from "framer-motion";

export default function ProjectTagSection({ tags = ["Flutter", "React", "UX", "UI"], activeTags = [], className = ""}) {
    return (
        <div className={`flex h-fit items-end mb-8 justify-end gap-4 md:gap-6 lg:gap-8 ${className}`}>
            {tags.map((tag, index) => (
                <motion.span
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.15, delay: 0.4 + index * 0.1}}
                    key={index}
                    className={`font-satoshi text-md lg:text-xl text-largeProjectTag font-black transition-all ${activeTags.includes(tag) ? 'underline' : ''}`}
                >
                    {tag}
                </motion.span>
            ))}
        </div>
    );
}