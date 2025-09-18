'use client';
import ProjectCard from "@/components/ProjectCard.js";
import {useEffect, useState} from "react";
import ProjectTagSection from "@/components/ProjectTagSection";
import {motion} from "framer-motion";
import TechnologyCard from "@/components/TechnologyCard";

const RecentProjectPage = () => {
    const projects = [
        {
            title: "Studyplanner Web",
            path: "studyplannerweb",
            description: "A studyplanner and progress tracker for students. The application is built with React and Firebase.",
            tags: ["React", "Web", "TailwindCSS", "Firebase"],
            technologies: [
                <TechnologyCard imgPath="/html_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/react_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>,
                <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#F3D8FE"/>
            ]
        },
        {
            title: "Plantit",
            path: "plantit",
            description: "A mobile application that helps you keep track of your plants. The application is built with Flutter and Firebase.",
            tags: ["Flutter", "Mobile App", "Firebase"],
            technologies: [
                <TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>
            ]
        },
        {
            title: "Studyplanner Mobile",
            path: "studyplannermobile",
            description: "A studyplanner and progress tracker for students. The application is built with Flutter and Firebase.",
            tags: ["Flutter", "Mobile App", "Firebase"],
            technologies: [
                <TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>
            ]
        },
        {
            title: "Portfolio",
            path: "portfolio",
            description: "This portfolio website. The website is built with NextJS and TailwindCSS.",
            tags: ["NextJS", "Web", "React"],
            technologies: [
                <TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>,
                <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#F3D8FE"/>
            ]
        }
    ];

    const [selectedCard, setSelectedCard] = useState(() => {
        const savedCard = sessionStorage.getItem("selectedCard");
        return savedCard ? parseInt(savedCard) : 0;
    });

    const [activeTags, setActiveTags] = useState(projects[selectedCard].tags);

    const appearVariant = {
        hidden: {opacity: 0, x: '-50%'},
        visible: {opacity: 1, x: 0},
    };

    const handleCardClick = (index) => {
        setSelectedCard(index);
        sessionStorage.setItem("selectedCard", index);
    };

    useEffect(() => {
        setActiveTags(projects[selectedCard].tags);
    }, [selectedCard]);

    return (
        <div id="recentProjects" className="flex flex-col h-fit sm:h-screen w-full px-0 md:px-8 py-28 transition-all">
            <div className="flex flex-col gap-6 items-start mx-auto sm:items-end xl:items-start transition-all sm:max-w-fit">
                {/* ProjectTagSection */}
                <ProjectTagSection
                    className="hidden sm:flex transition-all self-end"
                    tags={activeTags}
                    activeTags={activeTags}
                />
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 md:gap-6 xl:gap-14 transition-all justify-center">
                    {/* Recent Projects for Small Devices */}
                    <motion.div
                        initial={'hidden'}
                        animate={'visible'}
                        transition={{duration: 0.2, delay: 0.2}}
                        variants={appearVariant}
                        className="flex gap-4 sm:hidden mb-6"
                    >
                        <div className="w-0.5 h-28 rounded-lg bg-sectionMarker"></div>
                        <h1 className="text-4xl text-gray-900 whitespace-nowrap font-black transition-all">
                            My recent<br/>projects
                        </h1>
                    </motion.div>

                    {projects.map((project, index) => (
                        <div key={index} className={`relative ${index === 1 ? 'flex' : ''}`}>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                animationDelay={0.1 * (index + 1)}
                                classname=""
                                onClick={() => handleCardClick(index)}
                                isSelected={selectedCard === index}
                                path={project.path}
                                technologies={project.technologies}
                            />
                            {index === 1 && (
                                <motion.div
                                    initial={'hidden'}
                                    animate={'visible'}
                                    transition={{duration: 0.2, delay: 0.2}}
                                    variants={appearVariant}
                                    className="hidden absolute sm:flex top-[-10rem] left-1 gap-4"
                                >
                                    <div className="w-0.5 h-32 rounded-lg bg-sectionMarker"></div>
                                    <h1 className="text-3xl lg:text-4xl text-gray-900 whitespace-nowrap font-black transition-all">
                                        My recent<br/>projects
                                    </h1>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentProjectPage;
