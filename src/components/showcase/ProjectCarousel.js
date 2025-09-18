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
    const [isAnimating, setIsAnimating] = useState(false);

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

    const getAdjustedIndices = (page) => {
        let start = page * projectsPerPage;
        let end = start + projectsPerPage;
        if (end > projects.length) {
            end = projects.length;
            start = Math.max(0, end - projectsPerPage);
        }
        return { start, end };
    };

    const { start: startIdx, end: endIdx } = getAdjustedIndices(currentPage);
    const visibleProjects = projects.slice(startIdx, endIdx);

    useEffect(() => {
        const visibleCount = endIdx - startIdx;

        // Special case: if exactly 4 projects shown, select the third (index 2)
        if (projects.length === 4 && projectsPerPage === 4) {
            setSelectedCard(2);
            return;
        }

        // Otherwise, select the last visible card if out of range
        if (selectedCard < startIdx || selectedCard >= endIdx) {
            setSelectedCard(endIdx - 1);
        }
    }, [projectsPerPage, currentPage, selectedCard, startIdx, endIdx, projects.length, setSelectedCard]);

    const maxPage = Math.ceil(projects.length / projectsPerPage) - 1;

    const handlePrev = () => {
        if (currentPage === 0) return;

        setIsAnimating(true);
        setTimeout(() => {
            const newPage = Math.max(currentPage - 1, 0);
            setCurrentPage(newPage);
            setIsAnimating(false);
        }, 300);
    };

    const handleNext = () => {
        const nextPageStart = (currentPage + 1) * projectsPerPage;
        if (nextPageStart >= projects.length) return;

        setIsAnimating(true);
        setTimeout(() => {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            setIsAnimating(false);
        }, 300);
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
            <div
                className={`flex justify-center items-start gap-6 sm:gap-4 md:gap-8 xl:gap-12 2xl:gap-16 3xl:gap-16 flex-1 transition-all duration-350 ease-in-out transform ${
                    isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
            >
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
                    disabled={currentPage === maxPage || projects.length <= projectsPerPage}
                    className="p-3 bg-white shadow-xl rounded-xl hover:scale-110 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ProjectRightIcon />
                </button>
            </div>
        </div>
    );
};

export default ProjectCarousel;
