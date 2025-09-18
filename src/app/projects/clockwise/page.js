import ProjectDetailPage from "@/pages/ProjectDetailPage";
import TechnologyCard from "@/components/TechnologyCard";
import {PythonIcon} from "@/assets/imageComponents/technologies/PythonIcon";
import {JavascriptIcon} from "@/assets/imageComponents/technologies/JavascriptIcon";
import {ReactIcon} from "@/assets/imageComponents/technologies/ReactIcon";
import {FlaskIcon} from "@/assets/imageComponents/technologies/FlaskIcon";
import {MongodbIcon} from "@/assets/imageComponents/technologies/MongodbIcon";
import {GitIcon} from "@/assets/imageComponents/technologies/GitIcon";
import {DockerIcon} from "@/assets/imageComponents/technologies/DockerIcon";

export default function Clockwise() {
    return (
        <ProjectDetailPage
            title={"Clockwise"}
            idea="The Intuitive Time Tracking Web-App was designed to simplify time management for research assistants (HiWis) at Intuitive Robots Lab (KIT). It streamlines logging work hours, managing vacation, and signing timesheets, reducing administrative effort and ensuring compliance with institutional policies."
            userexperience="The app offers a clean, user-friendly interface for effortless time tracking. Key features include vacation management, digital signatures, and Slack notifications. The experience is seamless, with intuitive navigation, real-time feedback, and easy access to timesheets and contract data."
            technology="Built with React for the frontend and Python Flask for the backend, the app leverages MongoDB for data storage and Docker for containerization. This modern stack ensures a responsive, scalable, and reliable solution for time tracking."
            imageSubtitle="Effortless time tracking for research assistants, reducing administrative workload and streamlining employee management."
            technologies={[<TechnologyCard iconComponent={<ReactIcon/>} bgColor="#FFE8EE" description={"React"}/>, <TechnologyCard iconComponent={<FlaskIcon/>} bgColor="#F3D8FE" description={"Flask"}/>, <TechnologyCard iconComponent={<PythonIcon/>} bgColor="#FFE2EA" description={"Python"}/>, <TechnologyCard iconComponent={<JavascriptIcon/>} bgColor="#DFE6FC" description={"Javascript"}/>, <TechnologyCard iconComponent={<MongodbIcon/>} bgColor="#ECE1FF" description={"MongoDB (NoSQL)"}/>, <TechnologyCard iconComponent={<DockerIcon/>} bgColor="#DFE6FC" description={"Docker"}/>]}
            githubLink={"https://github.com/intuitive-robots/pse-ss24-timetrack"}
        />
    )
}