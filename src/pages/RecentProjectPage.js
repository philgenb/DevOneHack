'use client';
import ProjectCard from "../components/ProjectCard.js";
import {useEffect, useState} from "react";
import ProjectTagSection from "../components/ProjectTagSection";

const RecentProjectPage = () => {
    const appearVariant = {
        hidden: { opacity: 0,},
        visible: { opacity: 1},
    };

    const tags = ["Flutter", "Firebase", "React", "NextJS"];
    const tagList = [
        ["React", "Web", "TailwindCSS", "Firebase"],
        ["Flutter", "Mobile App", "Firebase"],
        ["Flutter", "Mobile App", "Firebase"],
        ["NextJS", "Web", "React"]
    ];

    const [selectedCard, setSelectedCard] = useState(3);
    const [activeTags, setActiveTags] = useState(tagList[selectedCard - 1]);

    const handleCardClick = (cardId) => {
        setSelectedCard(cardId);
        setActiveTags(tagList[cardId - 1]);
        sessionStorage.setItem('selectedCard', cardId);
    };

    useEffect(() => {
        const savedSelectedCard = sessionStorage.getItem('selectedCard');
        if (savedSelectedCard) {
            setSelectedCard(Number(savedSelectedCard));
            setActiveTags(tagList[Number(savedSelectedCard) - 1]);
        }
    }, []);

    return (
        <div id={"recentProjects"} className="flex flex-col h-screen px-8">
            <div className="grid grid-rows-3 md:grid-cols-4 gap-6 transition-all">

                <div className="flex justify-start items-end row-start-1 col-start-2 min-h-[250px]">
                    <div className="flex gap-4 transition-all">
                        <div className="w-0.5 h-32 rounded-sm  bg-sectionMarker"/>
                        <h1 className="font-satoshi text-4xl text-gray-900 font-black">My recent <br/> projects</h1>
                    </div>
                </div>

                <div className="row-start-1 col-start-3 col-span-2 w-full flex justify-end items-end">
                    <ProjectTagSection tags={tags} activeTags={activeTags} />
                </div>
                <ProjectCard
                    title="Studyplanner Web"
                    description="A studyplanner and progress tracker for students. The application is built with React and Firebase."
                    tags={tagList[0]}
                    classname="row-start-2 row-span-2"
                    onClick={() => handleCardClick(1)}
                    isSelected={selectedCard === 1}
                    onMouseEnter={() => console.log("test")}
                    animationDelay={0.2}
                />
                <ProjectCard
                    title="Plantit"
                    description="A application to help the environment by doing a good deed every day"
                    tags={tagList[1]}
                    classname="row-start-2 row-span-2"
                    imgSrc={"/app_showcase_2.png"}
                    onClick={() => handleCardClick(2)}
                    isSelected={selectedCard === 2}
                    animationDelay={0.3}
                />
                <ProjectCard
                    title="Studyplanner Mobile"
                    description={"A studyplanner and progress tracker for students. The application is built with Flutter and Firebase."}
                    classname="row-start-2 row-span-2"
                    tags={tagList[2]}
                    onClick={() => handleCardClick(3)}
                    isSelected={selectedCard === 3}
                    animationDelay={0.4}
                />
                <ProjectCard
                    title="Portfolio Page"
                    description={"This Website showcases my recent Projects and is built with Nextjs and Tailwindcss"}
                    tags={tagList[3]}
                    classname="row-start-2 row-span-2"
                    imgSrc={"/app_showcase_2.png"}
                    onClick={() => handleCardClick(4)}
                    isSelected={selectedCard === 4}
                    animationDelay={0.5}
                />
            </div>
        </div>
    )
}

export default RecentProjectPage;