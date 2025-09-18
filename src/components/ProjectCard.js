'use client';
import {motion} from "framer-motion";
import AppearAnimator from "@/components/AppearAnimator";
import Link from "next/link";

export default function ProjectCard(
    {title = "Beispielprojekt", description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
        tags = ["Mobile", "Responsive"], classname = "", onClick, isSelected, imgSrc = "/app_showcase.png", animationDelay = 0.1, path = "/studyplannerweb"}) {

    const appearVariant = {
        hidden: { opacity: 0,},
        visible: { opacity: 1},
    };

    return (
        <div className={`flex flex-col gap-6 ${classname}`}>
            <motion.div
                initial={'hidden'}
                animate={'visible'}
                transition={{ duration: 0.3, delay: animationDelay}}
                variants={appearVariant}
                className={`${isSelected ? 'bg-cardSelected' : 'bg-cardUnselected'} aspect-square p-2 max-w-[250px] rounded-3xl transition-all delay-50`}
                onClick={onClick}
            >
                <div className="flex w-full h-full overflow-hidden items-center justify-center">
                    <img src={imgSrc} alt="Project Showcase" className="object-cover" />
                </div>
            </motion.div>
            {isSelected ?
                <div className="flex flex-col gap-5 items-start justify-start max-w-[250px]">
                    <AppearAnimator delay="0.2">
                        <TagRow tags={tags}/>
                    </AppearAnimator>

                    <div className="flex flex-col gap-2">
                        <AppearAnimator delay="0.3">
                            <h2 className="font-satoshi text-xl font-black">{title}</h2>
                        </AppearAnimator>
                        <AppearAnimator delay="0.4">
                            <p className="font-satoshi text-medium font-medium text-projectDescription">{description}</p>
                        </AppearAnimator>
                    </div>
                    <AppearAnimator delay="0.5">
                        <Link href={`/projects/${path}`}>
                            <button className="font-satoshi text-sm text-gray-900 font-black underline">Explore</button>
                        </Link>
                    </AppearAnimator>
                </div> : null
            }

        </div>
    )
}
function TagRow({tags = []}) {
    return (
        <div className="flex flex-row gap-3">
            {tags.map((tag, index) => {
                return (
                    <p key={index} className="font-satoshi text-sm font-bold text-projectTag">{tag}</p>
                )
            })}
        </div>
    )
}