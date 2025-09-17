'use client';
import ProjectCard from "@/components/ProjectCard.js";
import {useEffect, useState} from "react";
import ProjectTagSection from "@/components/ProjectTagSection";
import {motion} from "framer-motion";
import TechnologyCard from "@/components/TechnologyCard";
import BackButton from "@/components/input/BackButton";
import {ProjectRightIcon} from "@/assets/imageComponents/ProjectRightIcon";
import {ProjectLeftIcon} from "@/assets/imageComponents/ProjectLeftIcon";
import ProjectCarousel from "@/components/showcase/ProjectCarousel";

const RecentProjectPage = () => {
    const projects = [
        {
            title: "Studyplanner Mobile",
            path: "studyplannermobile",
            description: "A studyplanner and progress tracker for students. The application is built with Flutter and Firebase.",
            tags: ["Flutter", "Dart", "Firebase", "NoSQL"],
            lowerTags: ["Mobile", "Responsive", "Firebase", "Firestore"],
            technologies: [
                <TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>
            ],
            imgSrc: "/assets/applications/preview/StudyPlanner_Mobile_Group_Preview.png"
        },
        {
            title: "VisitorInsights",
            path: "visitorinsights",
            description: "Accessible Web application to visualize predictive visitor information. Built with React and Flask.",
            tags: ["Python", "JavaScript", "API", "ML"],
            lowerTags: ["Web", "Accessibility", "Machine Learning"],
            technologies: [
                <TechnologyCard imgPath="/html_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/react_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>,
                <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#F3D8FE"/>
            ],
            imgSrc: "/assets/applications/VisitorInsights_Showcase.png"
        },
        {
            title: "Clockwise",
            path: "clockwise",
            description: "Time-tracking web application built with React and Flask, designed to streamline work hour logging and vacation management for research assistants",
            tags: ["Python", "Typescript", "NoSQL", "API"],
            lowerTags: ["Web", "React", "Flask", "GPL-3.0"],
            technologies: [
                <TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>,
                <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#F3D8FE"/>
            ],
            imgSrc: "/assets/applications/preview/Clockwise_Preview.png"
        },
        {
            title: "Portfolio",
            path: "portfolio",
            description: "This portfolio website. Built with NextJS, Javascript and TailwindCSS.",
            tags: ["Javascript", "TailwindCSS", "CSS"],
            lowerTags: ["Web", "Next.js", "React", "Responsive"],
            technologies: [
                <TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>,
                <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#F3D8FE"/>
            ],
            imgSrc: "/assets/applications/preview/Portfolio_Preview.png"
        },
        {
            title: "Plantit",
            path: "plantit",
            description: "A mobile app that encourages daily good deeds, with a tree growing as you progress. Built with Flutter and Firebase.",
            tags: ["Flutter", "Mobile App", "Firebase"],
            technologies: [
                <TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>
            ]
        },
        {
            title: "Studyplanner Web",
            path: "studyplannerweb",
            description: "A studyplanner and progress tracker for students. The application is built with React and Firebase.",
            tags: ["Javascript", "TailwindCSS", "Firebase", "NoSQL"],
            lowerTags: ["Web", "Responsive", "Firebase", "Firestore"],
            technologies: [
                <TechnologyCard imgPath="/html_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/react_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>,
                <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#F3D8FE"/>
            ],
            imgSrc: "/assets/applications/Studyplanner_Webapp.png"
        },
    ];

    const [selectedCard, setSelectedCard] = useState(0);
    const [activeTags, setActiveTags] = useState(projects[0].tags);
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 4;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCard = sessionStorage.getItem("selectedCard");
            if (savedCard) {
                setSelectedCard(parseInt(savedCard));
            }
        }
    }, []);

    useEffect(() => {
        setActiveTags(projects[selectedCard]?.tags ?? []);
    }, [selectedCard]);

    const handleCardClick = (index) => {
        setSelectedCard(index);
        if (typeof window !== 'undefined') {
            sessionStorage.setItem("selectedCard", index);
        }
    };

    const maxPage = Math.ceil(projects.length / projectsPerPage) - 1;
    const startIdx = currentPage * projectsPerPage;
    const visibleProjects = projects.slice(startIdx, startIdx + projectsPerPage);

    const appearVariant = {
        hidden: {opacity: 0, x: '-50%'},
        visible: {opacity: 1, x: 0},
    };

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, maxPage));
    };

    return (
        <div id="recentProjects" className="flex flex-col h-fit sm:h-screen w-full px-6 md:px-8 py-28 transition-all">
            <div className="flex flex-col gap-6 items-start w-full sm:items-end xl:items-start transition-all">

            <ProjectTagSection
                    className="hidden sm:flex transition-all self-end"
                    tags={activeTags}
                    activeTags={activeTags}
                />

                <ProjectCarousel
                    projects={projects}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                    handleCardClick={handleCardClick}
                />
            </div>
        </div>
    );
};

export default RecentProjectPage;