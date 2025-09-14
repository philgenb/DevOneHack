'use client';

import { useRouter } from 'next/navigation';
import {LeftArrowIcon} from "@/assets/imageComponents/LeftArrowIcon";

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push('/');
    };

    return (
        <button
            onClick={handleBack}
            className="flex items-center xl:p-2.5 2xl:p-3.5  bg-white shadow-sm rounded-lg hover:bg-gray-100 card-shadow transition-all duration-500 ease-out"
        >
            <LeftArrowIcon/>
        </button>
    );
};

export default BackButton;
