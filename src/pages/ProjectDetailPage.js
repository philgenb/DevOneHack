
'use client'
import {motion} from "framer-motion";
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
        <div className="flex flex-col-reverse md:flex-row px-8 md:px-12 xl:pl-16 2xl:px-36 py-20 gap-8 transition-all duration-75 relative">
            <div className="flex flex-col gap-14 w-[25rem] text-right transition-all duration-500 ease-in-out">
                <motion.div
                    className="flex flex-col gap-1 min-w-[350px] w-[400px] self-end"
                    initial={{opacity: 0, x: "-10%"}}
                    animate={{opacity: 1, x: "0%"}}
                    transition={{duration: 0.3, delay: 0.1}}
                >
                    <h2 className="font-black text-medium lg:text-lg text-zinc-800">IDEA</h2>
                    <p className="text-sm lg:text-medium font-medium text-projectDescription w-full">{idea}</p>
                </motion.div>
                <motion.div
                    className="flex flex-col gap-1 min-w-[350px] w-[400px] self-end"
                    initial={{opacity: 0, x: "-20%"}}
                    animate={{opacity: 1, x: "0%"}}
                    transition={{duration: 0.3, delay: 0.2}}
                >
                    <h2 className="font-black text-medium lg:text-lg text-zinc-800">USER EXPERIENCE</h2>
                    <p className="text-sm lg:text-medium font-medium text-projectDescription">{userexperience}</p>
                </motion.div>
                <motion.div
                    className="flex flex-col gap-1 w-[400px] self-end"
                    initial={{opacity: 0, x: "-30%"}}
                    animate={{opacity: 1, x: "0%"}}
                    transition={{duration: 0.3, delay: 0.3}}
                >
                    <h2 className="font-black text-medium lg:text-lg text-zinc-800">TECHNOLOGY</h2>
                    <p className="text-sm lg:text-medium font-medium text-projectDescription">{technology}</p>
                </motion.div>
            </div>
            <div className="flex flex-col gap-8">
                <motion.div
                    initial={{opacity: 0,}}
                    animate={{opacity: 1,}}
                    transition={{duration: 0.4, delay: 0.1}}
                    className="flex justify-between items-center"
                >
                    <div className="relative flex gap-6">
                        <div className="absolute left-0 w-0.5 h-28 bg-[#D3D3D3] rounded-full"/>
                        <h1 className="ml-6 h-fit font-black text-zinc-800 text-3xl lg:text-4xl break-words max-w-[12rem] transition-all">{title}</h1>
                    </div>
                    <div className={`ml-6 hidden lg:flex ${gapClass}`}>
                        {technologies}
                    </div>
                </motion.div>
                {imgComponent ? (
                    <motion.div
                        initial={{opacity: 0, x: "10%"}}
                        animate={{opacity: 1, x: "0%"}}
                        transition={{duration: 0.3, delay: 0}}
                        className="ml-3"
                    >
                        {imgComponent}
                    </motion.div>
                ) : (
                    <motion.img
                        initial={{opacity: 0, x: "10%"}}
                        animate={{opacity: 1, x: "0%"}}
                        transition={{duration: 0.3, delay: 0}}
                        src={imgPath}
                        alt="Project_Image"
                        className="ml-6 max-w-[50rem] w-full"
                    />
                )}
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.4, delay: 0.4}}
                    className="self-end max-w-[50rem] text-right text-zinc-400 font-medium text-[15px]"
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