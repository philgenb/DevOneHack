import ProjectDetailPage from "@/pages/ProjectDetailPage";
import TechnologyCard from "@/components/TechnologyCard";
import {ReactIcon} from "@/assets/imageComponents/technologies/ReactIcon";
import {PythonIcon} from "@/assets/imageComponents/technologies/PythonIcon";
import {FlaskIcon} from "@/assets/imageComponents/technologies/FlaskIcon";
import {JavascriptIcon} from "@/assets/imageComponents/technologies/JavascriptIcon";
import {AccessibilityIcon} from "@/assets/imageComponents/technologies/AccessibilityIcon";

export default function VisitorInsights() {
    return (
        <ProjectDetailPage
            title={`Visitor\nInsights`}
            idea="VisitorInsights is a web application developed as part of my bachelor's thesis to support inclusive museum visits through predictive visitor information. It uses interpretable machine learning models to forecast daily crowd levels and presents results in an accessible, transparent way."
            userexperience="The UI is designed for accessibility, featuring SHAP-based model explanations and visual/textual representations of uncertainty. It supports screen readers, keyboard navigation, and includes a high-contrast mode."
            technology="Built with Flask and React in a modular MVCS architecture, VisitorInsights uses decision-based models like Random Forest and XGBoost, achieving 85% classification accuracy for daily predictions. The interface follows WCAG standards for a barrier-free web experience."
            imageSubtitle="Making predictive visitor information accessible – powered by Flask, React, XGBoost, and SHAP."
            technologies={[
                <TechnologyCard iconComponent={<AccessibilityIcon/>} bgColor="#ECE1FF" description={"Accessibility"} />,
                <TechnologyCard iconComponent={<ReactIcon />} bgColor="#FFE8EE" description={"React"} />,
                <TechnologyCard iconComponent={<FlaskIcon/>} bgColor="#F3D8FE" description={"Flask"}/>,
                <TechnologyCard iconComponent={<PythonIcon/>} bgColor="#FFE2EA" description={"Python"}/>,
                <TechnologyCard iconComponent={<JavascriptIcon/>} bgColor="#DFE6FC" description={"Javascript"}/>,
            ]}
            imgPath={"/assets/applications/VisitorInsights_Showcase.png"}
        />

    )
}