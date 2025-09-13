
'use client'
import {motion} from "framer-motion";
import TechnologyCard from "@/components/TechnologyCard";
import {GithubIcon} from "@/assets/imageComponents/GithubIcon";

export default function ProjectDetailPage(
    {
        title,
        imgPath = "/Project_Placeholder.png",
        imgComponent,
        idea = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
        userexperience = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
        technology = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
        imageSubtitle = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
        technologies = [],
        githubLink
    }) {

    const technologyCount = technologies.length;
    const gapClass = technologyCount > 4 ? "gap-6" : "gap-10";

    return (
        <div className="flex flex-col sm:flex-row px-8 md:px-12 xl:px-28 2xl:px-44 py-28 gap-8 transition-all duration-75 relative">
            <div className="flex flex-col gap-14 w-[25rem] text-right">
                <motion.div
                    className="flex flex-col gap-1"
                    initial={{opacity: 0, x: "-10%"}}
                    animate={{opacity: 1, x: "0%"}}
                    transition={{duration: 0.3, delay: 0.1}}
                >
                    <h2 className="font-black text-lg">IDEA</h2>
                    <p className="lg:text-md font-medium text-projectDescription">{idea}</p>
                </motion.div>
                <motion.div
                    className="flex flex-col gap-1"
                    initial={{opacity: 0, x: "-20%"}}
                    animate={{opacity: 1, x: "0%"}}
                    transition={{duration: 0.3, delay: 0.2}}
                >
                    <h2 className="font-black text-lg text-zinc-800">USER EXPERIENCE</h2>
                    <p className="lg:text-md font-medium text-projectDescription">{userexperience}</p>
                </motion.div>
                <motion.div
                    className="flex flex-col gap-1"
                    initial={{opacity: 0, x: "-30%"}}
                    animate={{opacity: 1, x: "0%"}}
                    transition={{duration: 0.3, delay: 0.3}}
                >
                    <h2 className="font-black text-lg text-zinc-800">TECHNOLOGY</h2>
                    <p className=" text-md font-medium text-projectDescription">{technology}</p>
                </motion.div>
            </div>

            <motion.div
                initial={{opacity: 0, y: "-10%"}}
                animate={{opacity: 1, y: "0%"}}
                transition={{duration: 0.3, delay: 0}}
                className="ml-3 w-0.5 h-28 bg-[#D3D3D3] rounded-full"
            />
            <div className="flex flex-col gap-8">
                <motion.div
                    initial={{opacity: 0,}}
                    animate={{opacity: 1,}}
                    transition={{duration: 0.4, delay: 0.1}}
                    className="flex justify-between items-center"
                >
                    <h1 className=" h-fit font-black text-zinc-800 text-4xl break-words w-[155px]">{title}</h1>
                    <div className={`flex ${gapClass}`}>
                        {technologies}
                    </div>
                </motion.div>
                <motion.img
                    initial={{opacity: 0, x: "10%"}}
                    animate={{opacity: 1, x: "0%"}}
                    transition={{duration: 0.3, delay: 0}}
                    src={imgPath}
                    alt="Project_Image"
                    className="ml-3"
                />
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.4, delay: 0.4}}
                    className="self-endmax-w-[400px] text-right text-zinc-400 font-medium text-[15px]"
                >{imageSubtitle}</motion.p>
            </div>

            {/* GitHub-Link am rechten unteren Rand */}
            {githubLink && (
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-12 right-10 transform transition-transform duration-300 hover:scale-110"
                >
                    <GithubIcon/>
                </a>
            )}
        </div>
    );
}