'use client';
import {Button} from '@nextui-org/button';
import SocialBar from "src/components/Socialbar.js";
import { motion } from 'framer-motion';
import AppearAnimator from "src/components/AppearAnimator";
import Image from "next/image";



const LandingPage = () => {

    const leftVariant = {
        hidden: { opacity: 0, x: '-50%' },
        visible: { opacity: 1, x: 0 },
    };

    const rightVariant = {
        hidden: { opacity: 0, x: '50%' },
        visible: { opacity: 1, x: 0 },
    };

    const downVariant = {
        hidden: { opacity: 0, y: '-50%' },
        visible: { opacity: 1, y: 0 },
    };


    return <div id="landingpage" className="flex flex-col h-full justify-center px-8 md:px-0 py-10 gap-6">
        <motion.div className="flex flex-col sm:px-2 md:px-0 sm:items-start md:items-center relative transition-all">

            {/*<img src="/landing_artwork.png"  alt="artwork" className="absolute top-[-10rem] z-10"*/}
            <motion.img
                variants={leftVariant}
                initial={'hidden'}
                animate={'visible'}
                transition={{ duration: 0.3, delay: 0.1}}
                src="/left_artwork.svg"
                alt="left artwork"
                width={190}
                height={50}
                className="absolute top-[-3rem] left-[-5rem] z-10 hidden md:block"
            />
            <motion.img
                variants={downVariant}
                initial={'hidden'}
                animate={'visible'}
                transition={{ duration: 0.15, delay: 0.1}}
                src="/code_snippet.svg"
                alt="code snippet"
                width={360}
                height={125}
                className="absolute top-[-10rem] z-10 "
            />
            <motion.img
                variants={rightVariant}
                initial={'hidden'}
                animate={'visible'}
                transition={{ duration: 0.3, delay: 0.1}}
                src="/right_artwork.svg"
                alt="right artwork"
                width={300}
                height={80}
                className="absolute top-[-4rem] right-[-10rem] z-10 hidden sm:block"
            />


            <AppearAnimator downScale={true} delay={0.3}>
                <h1 className="text-5xl sm:text-6xl font-satoshi font-black leading-tight sm:leading-tight md:text-center mb-4 relative z-20 transition-all whitespace-nowrap">Hey, I'm Phil,<br/>A Code Enthusiast</h1>
            </AppearAnimator>
            <AppearAnimator delay={0.4}>
                <div className="flex justify-center max-w-[850px]">
                    <h2 className="text-lg sm:text-xl leading-normal sm:leading-tight text-subtitle font-satoshi font-bold md:text-center md:whitespace-pre-wrap transition-all">Hello, I'm Phil, a code enthusiast with a passion for crafting practical software{'\n'}solutions. Take a look at my portfolio, featuring projects that demonstrate my{'\n'}commitment to effective problem-solving and creating seamless digital{'\n'}experiences.</h2>
                </div>
            </AppearAnimator>
        </motion.div>
        <AppearAnimator delay={0.5}>
            <div className="flex justify-start md:justify-center">
                <Button fullWidth={false} onClick={scrollToProjects} endContent={<img src="/arrow_right.svg" color="white" alt="arrow_right"/>} color='secondary' className="px-8 py-6 text-white font-black text-md hover:bg-buttonHover">
                    Recent Projects
                </Button>
            </div>
        </AppearAnimator>
        <div className="absolute bottom-16 left-8 sm:left-16 transition-all">
            <SocialBar/>
        </div>
    </div>
};

function scrollToProjects() {
    console.log('Scrolling to projects');
    const section = document.getElementById('recentProjects');
    section.scrollIntoView({ behavior: 'smooth' });
}

export default LandingPage;