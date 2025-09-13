'use client'
import TechnologyCard from "@/components/TechnologyCard";
import {Button} from "@nextui-org/button";
import Link from "next/link";
import {useState} from "react";
import {PythonIcon} from "@/assets/imageComponents/technologies/PythonIcon";
import {JavascriptIcon} from "@/assets/imageComponents/technologies/JavascriptIcon";
import {DartIcon} from "@/assets/imageComponents/technologies/DartIcon";
import {JavaIcon} from "@/assets/imageComponents/technologies/JavaIcon";
import {HtmlIcon} from "@/assets/imageComponents/technologies/HtmlIcon";
import {GitIcon} from "@/assets/imageComponents/technologies/GitIcon";
import {FlutterIcon} from "@/assets/imageComponents/technologies/FlutterIcon";
import {ReactIcon} from "@/assets/imageComponents/technologies/ReactIcon";

export default function AboutMePage() {
    const [copySuccess, setCopySuccess] = useState(null);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopySuccess('Copied Email');
        setTimeout(() => setCopySuccess(null), 2000);
    };

    return (
        <div id="aboutme" className="flex flex-col-reverse sm:flex-row px-8 sm:pl-12 md:pl-16 lg:pl-24 xl:pl-32 h-full pt-20 pb-40 gap-16 sm:gap-16 lg:gap-24 xl:gap-36 2xl:gap-56 transition-all">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-satoshi font-black text-zinc-800">Programming</h2>
                    <div className="flex gap-10">
                        <TechnologyCard iconComponent={<JavaIcon/>} bgColor="#F0E7FF"/>
                        <TechnologyCard iconComponent={<PythonIcon/>} bgColor="#FFE2EA"/>
                        <TechnologyCard iconComponent={<JavascriptIcon/>} bgColor="#DFE6FC"/>
                        <TechnologyCard iconComponent={<DartIcon/>} bgColor="#DFE6FC"/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-satoshi font-black text-zinc-800">Technologies</h2>
                    <div className="flex gap-10">
                        <TechnologyCard iconComponent={<GitIcon/>} bgColor="#F3D8FE"/>
                        <TechnologyCard iconComponent={<HtmlIcon/>} bgColor="#ECE1FF"/>
                        <TechnologyCard iconComponent={<FlutterIcon/>} bgColor="#FFE8EE"/>
                        <TechnologyCard iconComponent={<ReactIcon/>} bgColor="#FFE8EE"/>
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex gap-4 transition-all">
                <h1 className="text-right font-satoshi text-4xl text-zinc-800 font-black">About<br/>Me</h1>
                <div className="flex gap-8">
                    <div className="w-0.5 h-32 rounded-sm  bg-sectionMarker"/>
                    <div className="flex flex-col gap-6">
                        <p className="font-satoshi max-w-[400px] text-md md:text-lg font-medium text-projectDescription mt-12">
                            I'm Phil Gengenbach, a dedicated Computer Science student at KIT in Karlsruhe.
                            I'm eager to contribute to meaningful projects. With a solid foundation in algorithms and software engineering,
                            I'm excited to apply my skills to real-world solutions
                        </p>
                        <Link href={"/contact"}>
                            <Button endContent={<img src="/arrow_right.svg" color="white"/>} color='secondary' className="px-8 py-6 w-[200px] max-w-1/2 text-white font-black text-md hover:bg-buttonHover">
                                Contact
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/*Mobile Version*/}
            <div className="font-satoshi flex flex-col sm:hidden gap-8">
                <div className="flex gap-4">
                    <div className="w-0.5 h-28 rounded-sm  bg-sectionMarker"/>
                    <h1 className="text-4xl font-black text-zinc-900">About<br/>me</h1>
                </div>

                <div className="flex flex-col gap-8 px-6 py-6 rounded-xl shadow border-2 border-white"> {/*p-4 rounded-xl shadow border-2 border-white*/}
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"/>
                            <p className="text-lg text-neutral-500 font-bold">Student</p>
                        </div>
                        <div className="flex items-center gap-1 px-4 py-1 bg-emerald-100 rounded-3xl">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"/>
                            <p className="font-bold text-green-400">Available for Work</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-black">I'm Phil Gengenbach</h1>
                        <p className="text-zinc-500 font-medium">A dedicated Computer Science student at KIT in Karlsruhe. I'm eager to contribute to meaningful projects. With a solid foundation in algorithms and software engineering, I'm excited to apply my skills to real-world solutions</p>
                    </div>
                    <div className="flex gap-8">
                        <Link href={"/contact"}>
                            <Button startContent={<img src="/chat_bubble_icon.svg" color="white" alt="Contact Icon"/>} className="px-2 py-3 w-[125px] text-white font-black text-md hover:bg-stone-700 bg-stone-900 rounded-xl">
                                Contact
                            </Button>
                        </Link>
                        {/*<Button onClick={() => {}} startContent={<img src="/Copy_Icon.svg" color="white" alt="Copy Icon"/>} className="px-5 py-3 w-[130px] text-gray-700 font-black text-md shadow justify-center items-center hover:bg-gray-200 bg-white rounded-xl">*/}
                        {/*    Copy Email*/}
                        {/*</Button>*/}
                        <Button
                            onClick={() => copyToClipboard('phil.gengenbach@online.de')}
                            startContent={!copySuccess ? <img src="/Copy_Icon.svg" alt="Copy Icon"/> : null}
                            className={`px-5 py-3 w-[130px] text-gray-700 font-black text-md shadow justify-center items-center hover:bg-gray-200 bg-white rounded-xl`}
                        >
                            {!copySuccess ? "Copy Email" : ""}
                            {copySuccess && <span className="ml-2 text-green-500">{copySuccess}</span>}
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    )
}