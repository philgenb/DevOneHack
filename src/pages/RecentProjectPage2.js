'use client';
import ProjectCard from "@/components/ProjectCard.js";
import { useEffect, useState } from "react";
import ProjectTagSection from "@/components/ProjectTagSection";
import { motion } from "framer-motion";

const RecentProjectPage2 = () => {
    const titles = ["Studyplanner Web", "Plantit", "Studyplanner Mobile", "Portfolio"];
    const paths = ["studyplannerweb", "plantit", "studyplannermobile", "portfolio"];
    const descriptions = ["A studyplanner and progress tracker for students. The application is built with React and Firebase.", "A mobile application that helps you keep track of your plants. The application is built with Flutter and Firebase.", "A studyplanner and progress tracker for students. The application is built with Flutter and Firebase.", "This portfolio website. The website is built with NextJS and TailwindCSS."];
    const tags = ["Flutter", "Firebase", "React", "NextJS"];
    const tagList = [
        ["React", "Web", "TailwindCSS", "Firebase"],
        ["Flutter", "Mobile App", "Firebase"],
        ["Flutter", "Mobile App", "Firebase"],
        ["NextJS", "Web", "React"]
    ];

    const [selectedCard, setSelectedCard] = useState(3);
    const [activeTags, setActiveTags] = useState(tagList[selectedCard - 1]);

    const appearVariant = {
        hidden: { opacity: 0, x: '-50%'},
        visible: { opacity: 1, x: 0},
    };

    const handleCardClick = (cardId) => {
        setSelectedCard(cardId);
        setActiveTags(tagList[cardId - 1]);
    };

    return (
        <div id="recentProjects" className="flex flex-col h-fit sm:h-screen md:px-8 py-28 transition-all">
            <div className="flex flex-col gap-6 items-start sm:items-end xl:items-start transition-all">
                <div className="flex min-w-fit flex-row justify-between w-full lg:pl-[25%] sm:items-end transition-all">
                    <motion.div
                        initial={'hidden'}
                        animate={'visible'}
                        transition={{ duration: 0.2, delay: 0.2}}
                        variants={appearVariant}
                        className="flex gap-4"
                    >
                        <div className="w-0.5 h-32 rounded-sm bg-sectionMarker"></div>
                        <h1 className="font-satoshi text-4xl text-gray-900 whitespace-nowrap font-black transition-all">
                            My recent<br />projects
                        </h1>
                    </motion.div>
                    <ProjectTagSection className="self-end hidden sm:flex transition-all" tags={tags} activeTags={activeTags} />
                </div>
                <div className="flex flex-col sm:flex-row gap-12 sm:gap-4 md:gap-6 xl:gap-10 transition-all">
                    {tagList.map((tags, index) => (
                        <ProjectCard
                            key={index}
                            title={`${titles[index]}`}
                            description={`${descriptions[index]}`}
                            tags={tags}
                            animationDelay={0.1 * (index + 1)}
                            classname=""
                            onClick={() => handleCardClick(index + 1)}
                            isSelected={selectedCard === index + 1}
                            path={paths[index]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentProjectPage2;
