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
                             setSelectedCard, // NEU: wird von außen gesetzt
                             handleCardClick
                         }) => {
    const [projectsPerPage, setProjectsPerPage] = useState(4);

    useEffect(() => {
        const updateProjectsPerPage = () => {
            const width = window.innerWidth;
            if (width < 640) setProjectsPerPage(1); // mobile
            else if (width < 768) setProjectsPerPage(2); // tablet
            else if (width < 1024) setProjectsPerPage(3); // laptop
            else setProjectsPerPage(4); // desktop
        };

        updateProjectsPerPage();
        window.addEventListener("resize", updateProjectsPerPage);
        return () => window.removeEventListener("resize", updateProjectsPerPage);
    }, []);

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
        <div className="w-full flex items-center justify-center gap-4 md:gap-8 min-h-[28rem]">
            {/* Left Button */}
            <div className="flex items-center">
                <button
                    type="button"
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    className="p-3 bg-white shadow-xl rounded-xl hover:scale-110 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ProjectLeftIcon />
                </button>
            </div>

            {/* Project Cards */}
            <div className="flex justify-center items-start gap-6 sm:gap-4 md:gap-6 xl:gap-12 2xl:gap-16 flex-1 transition-all">
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
            <div className="flex items-center">
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
