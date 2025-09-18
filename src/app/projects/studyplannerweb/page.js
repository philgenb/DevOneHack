import ProjectDetailPage from "@/pages/ProjectDetailPage";
import TechnologyCard from "@/components/TechnologyCard";
import {JavascriptIcon} from "@/assets/imageComponents/technologies/JavascriptIcon";
import {ReactIcon} from "@/assets/imageComponents/technologies/ReactIcon";
import {HtmlIcon} from "@/assets/imageComponents/technologies/HtmlIcon";

export default function StudyplannerWeb() {
    return (
        <ProjectDetailPage
            title={`Study\nplanner`}
            idea="Studyplanner Web is a platform designed to help students efficiently manage their study routines during crucial exam phases. It focuses on planning exam schedules, tracking progress, and maintaining an organized module registry."
            userexperience="prioritizes an intuitive user experience. It offers an easy-to-navigate interface for students to effortlessly manage their study courses. The user-centric design ensures accessibility for all."
            technology="is crafted using modern technologies, primarily React and Firebase. This combination ensures real-time synchronization of study plans and provides a responsive, cross-platform experience for students, enabling them to access their schedules anywhere, anytime."
            imageSubtitle="Elevating Study Efficiency: Efficient study planning powered by React and Firebase."
            technologies={[
                <TechnologyCard iconComponent={<ReactIcon/>} bgColor="#FFE8EE" description={"React"}/>,
                <TechnologyCard iconComponent={<JavascriptIcon/>} bgColor="#DFE6FC" description={"Javascript"}/>,
                <TechnologyCard iconComponent={<HtmlIcon/>} bgColor="#ECE1FF" description={"HTML"}/>
            ]}
            imgPath={"/assets/applications/Studyplanner_Webapp.png"}
        />
    )
}