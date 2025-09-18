import TechnologyCard from "@/components/TechnologyCard";
import {Button} from "@nextui-org/button";
import Link from "next/link";

export default function AboutMePage() {
    return (
        <div id="aboutme" className="flex h-full pt-20 pb-40 gap-28">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-satoshi font-black text-gray-900">Programming</h2>
                    <div className="flex gap-10">
                        <TechnologyCard imgPath="/java_icon.svg" bgColor="#F3D8FE"/>
                        <TechnologyCard imgPath="/python_icon.svg" bgColor="#F3D8FE"/>
                        <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#F3D8FE"/>
                        <TechnologyCard imgPath="/dart_icon.svg" bgColor="#F3D8FE"/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-satoshi font-black text-gray-900">Technologies</h2>
                    <div className="flex gap-10">
                        <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>
                        <TechnologyCard imgPath="/html_icon.svg" bgColor="#ECE1FF"/>
                        <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>
                        <TechnologyCard imgPath="/react_icon.svg" bgColor="#FFE8EE"/>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <h1 className="text-right font-satoshi text-4xl text-gray-900 font-black">About<br/>Me</h1>
                <div className="flex gap-8">
                    <div className="w-0.5 h-32 rounded-sm  bg-sectionMarker"/>
                    <div className="flex flex-col gap-6">
                        <p className="font-satoshi text-lg font-medium text-projectDescription mt-12">I'm Phil Gengenbach, a dedicated Computer Science student at KIT in Karlsruhe. I'm eager to contribute to meaningful projects. With a solid foundation in algorithms and software engineering, I'm excited to apply my skills to real-world solutions</p>
                        <Link href={"/contact"}>
                            <Button  endContent={<img src="/arrow_right.svg" color="white"/>} color='secondary' className="px-8 py-6 w-[200px] max-w-1/2 text-white font-black text-md hover:bg-buttonHover">
                                Contact
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}