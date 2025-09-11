import ProjectDetailPage from "@/pages/ProjectDetailPage";
import TechnologyCard from "@/components/TechnologyCard";

export default function Portfolio() {
    return (
        <ProjectDetailPage
            title="Portfolio"
            idea="The Portfolio Page serves as a showcase platform for my projects, providing visitors with insights into my work and capabilities. It's designed to offer a seamless and engaging experience, allowing users to explore various projects built using technologies like Next.js, React, CSS, and HTML."
            userexperience="In crafting the Portfolio Page, user experience takes center stage. Navigating through projects is seamless, allowing visitors to delve into each endeavor effortlessly. The interface is designed to be intuitive and engaging, ensuring a delightful exploration of my work."
            technology="Built with Next.js, React, CSS, and HTML, the Portfolio Page delivers a modern, interactive platform."
            imageSubtitle="Exploring Digital Creations: A Showcase of Next.js, React, CSS, and HTML."
            technologies={[<TechnologyCard imgPath="/react_icon.svg" bgColor="#FFE8EE"/>, <TechnologyCard imgPath="/html_icon.svg" bgColor="#ECE1FF"/>, <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#DFE6FC"/>, <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>]}
        />
    )
}