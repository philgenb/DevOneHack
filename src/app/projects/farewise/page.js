import ProjectDetailPage from "@/pages/ProjectDetailPage";
import TechnologyCard from "@/components/TechnologyCard";
import {AmazonWebServicesIcon} from "@/assets/imageComponents/technologies/AmazonWebServices";
import {TypescriptIcon} from "@/assets/imageComponents/technologies/TypescriptIcon";
import {PythonWhiteIcon} from "@/assets/imageComponents/technologies/PythonWhiteIcon";
import {ReactWhiteIcon} from "@/assets/imageComponents/technologies/ReactWhiteIcon";
import {LambdaIcon} from "@/assets/imageComponents/technologies/LambdaIcon";
import {DynamoDBIcon} from "@/assets/imageComponents/technologies/DynamoDB";
import {FarewiseIcon} from "@/assets/imageComponents/FarewiseIcon";

export default function Farewise() {
    return (
        <ProjectDetailPage
            title={`Farewise`}
            idea="Farewise is a travel deal platform that finds and compares affordable flights for spontaneous trips. It processes real-time airline data, scores results by relevance, and provides users with tailored, easy-to-browse travel options."
            userexperience="The application focuses on a fast, responsive search experience with category-based filtering and detailed comparison views. It features a clean, mobile-friendly UI and quick booking link generation to streamline the decision-making process."
            technology="Built as a serverless application with a FastAPI backend deployed on AWS Lambda, and a React + TypeScript frontend served via S3 and CloudFront. Uses AWS CDK for infrastructure as code, DynamoDB for persistent data storage, and custom scoring algorithms for flight ranking."
            imageSubtitle="Finding the best spontaneous travel deals – powered by AWS, FastAPI, and React."
            technologies={[
                <TechnologyCard key="aws" iconComponent={<AmazonWebServicesIcon/>} bgColor="#161D27"
                                description="Amazon Web Services (AWS)"/>,
                <TechnologyCard key="react" iconComponent={<ReactWhiteIcon/>} bgColor="#B32DEC" description="React"/>,
                <TechnologyCard key="ts" iconComponent={<TypescriptIcon/>} bgColor="#5D65FF" description="TypeScript"/>,
                <TechnologyCard key="python" iconComponent={<PythonWhiteIcon/>} bgColor="#7B49D3"
                                description="Python"/>,
                <TechnologyCard key="lambda" iconComponent={<LambdaIcon/>} bgColor="#FF9900" description="AWS Lambda"/>,
                <TechnologyCard key="dynamodb" iconComponent={<DynamoDBIcon/>} bgColor="#527FFF"
                                description="AWS DynamoDB"/>,
            ]}
            imgPath={"/assets/applications/Farewise_Showcase_Shadow.png"}
            websiteLink={"https://farewise.de"}
            websiteIcon={<FarewiseIcon/>}
        />
    )
}
