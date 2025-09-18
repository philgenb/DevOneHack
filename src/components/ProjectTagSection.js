import { motion } from "framer-motion";
import {useEffect, useState} from "react";

export default function ProjectTagSection({ tags = ["Flutter", "React", "UX", "UI"], activeTags = [], className = ""}) {
    const [renderedTags, setRenderedTags] = useState(tags);

    useEffect(() => {
        setRenderedTags(tags);
    }, [tags]);

    return (
        <div className={`flex h-fit items-end mb-8 justify-end gap-4 md:gap-6 lg:gap-8 ${className}`}>
            {tags.map((tag, index) => (
                <motion.span
                    key={`${tag}-${index}`} // Force a re-render when tags change by using both tag and index in the key
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`text-medium lg:text-lg text-largeProjectTag font-black transition-all ${activeTags.includes(tag) ? 'underline' : ''}`}
                >
                    {tag}
                </motion.span>
            ))}
        </div>
    );
}
