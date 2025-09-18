import ProjectDetailPage from "@/pages/ProjectDetailPage";
import TechnologyCard from "@/components/TechnologyCard";
import {ReactIcon} from "@/assets/imageComponents/technologies/ReactIcon";
import {HtmlIcon} from "@/assets/imageComponents/technologies/HtmlIcon";
import {JavascriptIcon} from "@/assets/imageComponents/technologies/JavascriptIcon";
import {GitIcon} from "@/assets/imageComponents/technologies/GitIcon";

export default function Portfolio() {
    return (
        <ProjectDetailPage
            title="Portfolio"
            idea="The Portfolio Page serves as a showcase platform for my projects, providing visitors with insights into my work and capabilities. It's designed to offer a seamless and engaging experience, allowing users to explore various projects built using technologies like Next.js, React, Javascript, CSS, and HTML."
            userexperience="In crafting the Portfolio Page, user experience takes center stage. Navigating through projects is seamless, allowing visitors to delve into each endeavor effortlessly. The interface is designed to be intuitive and engaging, ensuring a delightful exploration of my work."
            technology="Built with Next.js, React, CSS, and HTML, the Portfolio Page delivers a modern, interactive platform."
            imageSubtitle="Exploring Digital Creations: A Portfolio Highlighting Projects. Built with Next.js, React and Javascript"
            technologies={[
                <TechnologyCard iconComponent={<ReactIcon/>} bgColor="#FFE8EE" description={"React"}/>,
                <TechnologyCard iconComponent={<JavascriptIcon/>} bgColor="#DFE6FC" description={"Javascript"}/>,
                <TechnologyCard iconComponent={<HtmlIcon/>} bgColor="#ECE1FF" description={"HTML"}/>,
                <TechnologyCard iconComponent={<GitIcon/>} bgColor="#F3D8FE" description={"Git"}/>
            ]}
            imgPath={"/assets/applications/Portfolio_Home.png"}
        />
    )
}