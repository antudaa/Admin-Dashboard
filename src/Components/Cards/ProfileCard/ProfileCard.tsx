'use client';

import profileImage from "@/Assets/Image/Antu.png";
import Image from "next/image";


const ProfileCard = () => {
    return (
        <div className="w-full mx-auto">
            <div className="px-10 pb-6 mx-4 bg-transparent rounded-lg shadow md:mx-auto border-1">
                <div className="flex flex-col items-start w-full m-auto">
                    <div className="flex mx-auto">
                        <div className="hs-tooltip inline-block">
                            <a className="hs-tooltip-toggle relative inline-block" href="#">
                                <Image width={100} height={80} className="rounded-full" src={profileImage} alt="Image Not Found" />
                                <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 text-xs font-medium text-white rounded-md shadow-sm" role="tooltip">
                                    Maria Wanner is online
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col pt-4 mx-auto my-auto">
                        <div className="flex flex-col mx-auto">
                            <h2 className="flex text-xl font-light sm:text-3xl">AlexNoah7</h2>
                            <div className="flex">
                                <a
                                    className="flex items-center px-2 py-2 mx-auto text-sm font-medium  bg-transparent border border-gray-600 rounded outline-none cursor-pointer hover:bg-blue-600 hover:text-white focus:outline-none hover:border-blue-700">Edit
                                    profile</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <p className="text-sm text-center mt-6">Admin</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;