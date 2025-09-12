'use client';
import ProjectCard from "@/components/ProjectCard.js";
import {useEffect, useState} from "react";
import ProjectTagSection from "@/components/ProjectTagSection";
import { motion } from "framer-motion";
import TechnologyCard from "@/components/TechnologyCard";

const RecentProjectPage2 = () => {
    const titles = ["Studyplanner Web", "Plantit", "Studyplanner Mobile", "Portfolio"];
    const paths = ["studyplannerweb", "plantit", "studyplannermobile", "portfolio"];
    const descriptions = ["A studyplanner and progress tracker for students. The application is built with React and Firebase.", "A mobile application that helps you keep track of your plants. The application is built with Flutter and Firebase.", "A studyplanner and progress tracker for students. The application is built with Flutter and Firebase.", "This portfolio website. The website is built with NextJS and TailwindCSS."];
    const tags = ["Flutter", "Firebase", "React", "NextJS", "Flask"];
    const tagList = [
        ["React", "Web", "TailwindCSS", "Firebase"],
        ["Flutter", "Mobile App", "Firebase"],
        ["Flutter", "Mobile App", "Firebase"],
        ["NextJS", "Web", "React"]
    ];

    const technologyList = [
        [<TechnologyCard imgPath="/html_icon.svg" bgColor="#DFE6FC"/>, <TechnologyCard imgPath="/react_icon.svg" bgColor="#FFE8EE"/>, <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>, <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#F3D8FE"/>],
        [<TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>, <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>, <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>],
        [<TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>, <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>, <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>],
        [<TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>, <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>, <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>, <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#F3D8FE"/>]
    ];

    const [selectedCard, setSelectedCard] = useState(() => {
        const savedCard = sessionStorage.getItem("selectedCard");
        return savedCard ? parseInt(savedCard) : 3;
    });
    const [activeTags, setActiveTags] = useState(tagList[selectedCard - 1]);

    const appearVariant = {
        hidden: { opacity: 0, x: '-50%'},
        visible: { opacity: 1, x: 0},
    };

    const handleCardClick = (cardId) => {
        setSelectedCard(cardId);
        sessionStorage.setItem("selectedCard", cardId); // Store the clicked card directly
    };

    useEffect(() => {
        setActiveTags(tagList[selectedCard - 1]);
    }, [selectedCard]);

    return (
        <div id="recentProjects" className="flex flex-col h-fit sm:h-screen md:px-8 py-28 transition-all">
            <div className="flex flex-col gap-6 items-start mx-auto sm:items-end xl:items-start transition-all max-w-fit">
                {/*<div className="flex flex-col sm:flex-row lg:pl-[25%] transition-all justify-end">*/}
                {/*    <ProjectTagSection*/}
                {/*        className="hidden sm:flex transition-all self-end"*/}
                {/*        tags={tags}*/}
                {/*        activeTags={activeTags}*/}
                {/*    />*/}
                {/*</div>*/}
                <ProjectTagSection
                    className="hidden sm:flex transition-all self-end"
                    tags={tags}
                    activeTags={activeTags}
                />
                <div className="flex flex-col sm:flex-row gap-12 sm:gap-4 md:gap-6 xl:gap-14 transition-all justify-center">
                    {tagList.map((tags, index) => (
                        <div className={`relative ${index === 1 ? 'flex' : ''}`}>
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
                                technologies={technologyList[index]}
                            />
                            {index === 1 && (
                                <motion.div
                                    initial={'hidden'}
                                    animate={'visible'}
                                    transition={{ duration: 0.2, delay: 0.2}}
                                    variants={appearVariant}
                                    className="absolute top-[-10rem] left-1 flex gap-4"
                                >
                                    <div className="w-0.5 h-32 rounded-lg bg-sectionMarker"></div>
                                    <h1 className="text-4xl text-gray-900 whitespace-nowrap font-black transition-all">
                                        My recent<br />projects
                                    </h1>
                                </motion.div>
                            )}
                            {/*{index === 3 && (*/}
                            {/*    <ProjectTagSection*/}
                            {/*        className="hidden sm:flex transition-all self-end absolute right-[10rem] top-[-5rem]"*/}
                            {/*        tags={tags}*/}
                            {/*        activeTags={activeTags}*/}
                            {/*    />*/}
                            {/*)}*/}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentProjectPage2;
