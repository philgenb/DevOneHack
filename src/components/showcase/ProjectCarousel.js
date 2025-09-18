'use client';
import React, { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ProjectLeftIcon } from "@/assets/imageComponents/ProjectLeftIcon";
import { ProjectRightIcon } from "@/assets/imageComponents/ProjectRightIcon";

const ProjectCarousel = ({
                             projects,
                             currentPage,
                             setCurrentPage,
                             selectedCard,
                             setSelectedCard,
                             handleCardClick
                         }) => {
    const [projectsPerPage, setProjectsPerPage] = useState(4);


    useEffect(() => {
        const updateProjectsPerPage = () => {
            const width = window.innerWidth;
            if (width < 850) setProjectsPerPage(1);
            else if (width < 1200) setProjectsPerPage(2);
            else if (width < 1460) setProjectsPerPage(3);
            else setProjectsPerPage(4);
        };

        updateProjectsPerPage();
        window.addEventListener("resize", updateProjectsPerPage);
        return () => window.removeEventListener("resize", updateProjectsPerPage);
    }, []);

    useEffect(() => {
        const startIdx = currentPage * projectsPerPage;
        const endIdx = startIdx + projectsPerPage;

        if (selectedCard < startIdx || selectedCard >= endIdx) {
            setSelectedCard(endIdx - 1); // Autoselect last visible project
        }
    }, [projectsPerPage, currentPage, selectedCard]);


    const maxPage = Math.ceil(projects.length / projectsPerPage) - 1;
    const startIdx = currentPage * projectsPerPage;
    const visibleProjects = projects.slice(startIdx, startIdx + projectsPerPage);

    const handlePrev = () => {
        const newPage = Math.max(currentPage - 1, 0);
        setCurrentPage(newPage);
        setSelectedCard(newPage * projectsPerPage); // Autoselect erstes sichtbares Projekt
    };

    const handleNext = () => {
        const newPage = Math.min(currentPage + 1, maxPage);
        setCurrentPage(newPage);
        setSelectedCard(newPage * projectsPerPage); // Autoselect erstes sichtbares Projekt
    };

    return (
        <div className="flex w-full items-start justify-center gap-4 md:gap-8 min-h-[28rem]">
            {/* Left Button */}
            <div className="flex mt-48 items-center transition-all transition-1000">
                <button
                    type="button"
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    className="p-3 bg-white shadow-xl rounded-xl hover:scale-110 transition-all duration-700 ease-in-out disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ProjectLeftIcon />
                </button>
            </div>

            {/* Project Cards */}
            <div className="flex justify-center items-start gap-6 sm:gap-4 md:gap-8 xl:gap-12 2xl:gap-16 3xl:gap-16 flex-1 transition-all">
                {visibleProjects.map((project, index) => {
                    const realIndex = startIdx + index;
                    return (
                        <ProjectCard
                            key={realIndex}
                            title={project.title}
                            description={project.description}
                            tags={project.lowerTags}
                            imgSrc={project.imgSrc}
                            animationDelay={0.1 * (index + 1)}
                            onClick={() => {
                                handleCardClick(realIndex);
                                setSelectedCard(realIndex);
                            }}
                            isSelected={selectedCard === realIndex}
                            path={project.path}
                            technologies={project.technologies}
                        />
                    );
                })}
            </div>

            {/* Right Button */}
            <div className="flex mt-48 items-center transition-all transition-400">
                <button
                    type="button"
                    onClick={handleNext}
                    disabled={currentPage === maxPage}
                    className="p-3 bg-white shadow-xl rounded-xl hover:scale-110 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ProjectRightIcon />
                </button>
            </div>
        </div>
    );
};

export default ProjectCarousel;
