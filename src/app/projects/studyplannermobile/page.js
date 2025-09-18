import ProjectDetailPage from "@/pages/ProjectDetailPage";
import TechnologyCard from "@/components/TechnologyCard";
import {FlutterIcon} from "@/assets/imageComponents/technologies/FlutterIcon";
import {DartIcon} from "@/assets/imageComponents/technologies/DartIcon";
import {GitIcon} from "@/assets/imageComponents/technologies/GitIcon";

export default function StudyPlannerMobile() {
    return<ProjectDetailPage
        title={`Study\nplanner`}
        idea={"Studyplanner Mobile offers an intuitive app to help students manage their exam periods. With customizable schedules and progress tracking, it enhances productivity."}
        userexperience="User-centric design is at the core of Studyplanner Mobile. It provides an intuitive interface for seamlessly managing exam schedules, modules, and progress tracking, ensuring a hassle-free experience for users at every level."
        technology="Built with Flutter and integrated with Firebase, Studyplanner Mobile leverages the power of modern technology to provide real-time updates, secure data storage, and seamless synchronization across devices."
        imageSubtitle="Efficient Exam Planning at Your Fingertips: Experience seamless organization and progress tracking"
        technologies={[
            <TechnologyCard iconComponent={<FlutterIcon/>} bgColor="#FFE8EE" description={"Flutter"}/>,
            <TechnologyCard iconComponent={<DartIcon/>} bgColor="#DFE6FC" description={"Dart"}/>,
            <TechnologyCard iconComponent={<GitIcon/>} bgColor="#F3D8FE" description={"Git"}/>
        ]}
        imgPath={"/assets/applications/StudyPlanner_Mobile_Group.png"}
    />

}