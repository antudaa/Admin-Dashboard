'use client';

import ProfileCard from "@/Components/Cards/ProfileCard/ProfileCard";


import accessIcon from "@/Assets/Icons/access-control.png";
import LeaveIcon from "@/Assets/Icons/leave.png";
import departmentIcon from "@/Assets/Icons/Department.png";
import EmployeeIcon from "@/Assets/Icons/employee.png";
import attendanceIcon from "@/Assets/Icons/Attendance.png";
import Image from "next/image";
import rightArrowIcon from "@/Assets/Icons/next.png";
import { data } from '@/Components/Data/SideNavbarData';


const SideNav = ({ open }: any) => {

    const { Attendance, Leave, department, employee, user } = data;

    return (
        <aside id="logo-sidebar" className={`text-[aliceblue] bg-[#1C2536] top-4 left-0 z-40 h-screen pt-20 transition-all duration-700  ${open ? "w-64" : "w-0"} md:w-64`} aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto ">
                {/* Profile Card  */}
                <ProfileCard />

                {/* Navigation Links */}
                <div style={{ display: 'flex', height: '', marginTop: "20px", borderRadius: "30px", background: "transparent" }}>

                    <ul className="space-y-2 font-medium">
                        <li>
                            <details close>
                                <summary className="flex gap-4 cursor-pointer">
                                    <div className="space-y-20">
                                        <div className="w-full">
                                            <div className="flex-1 h-full mx-auto">
                                                <div className="flex justify-around w-[230px] bg-[transparent] shadow-transparent rounded-lg py-2 px-4">
                                                    <Image width={24} height={20} src={departmentIcon} alt="Image Not Found" />
                                                    <p className="m-auto inset-0 text-md leading-7 text-center">Department</p>
                                                    <div className="mx-auto my-auto">
                                                        <Image className="" width={24} height={20} src={rightArrowIcon} alt="Image Not Found" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </summary>
                                {
                                    department.map((dept, i) => (
                                        <li key={i}>
                                            <div className="pl-6 space-y-20">
                                                <div className="w-full">
                                                    <div className="flex-1 h-full mx-auto">
                                                        <div className="flex w-[230px] bg-[transparent] shadow-transparent rounded-lg py-2 px-4">
                                                            <Image width={24} height={20} src={dept.icon} alt="Image Not Found" />
                                                            <p className="my-auto ml-8 inset-0  text-md leading-7 text-gray-800">{dept.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </details>
                        </li>
                        <li>
                            <details close>
                                <summary className="flex gap-4 cursor-pointer">
                                    {/* <Image width={20} height={20} src={department} alt="Image Not Found" /> */}
                                    <div className="space-y-20">
                                        <div className="w-full">
                                            <div className="flex-1 h-full mx-auto">
                                                <div className="flex justify-around w-[230px] bg-[transparent] shadow-transparent rounded-lg py-2 px-4">
                                                    <Image width={24} height={20} src={EmployeeIcon} alt="Image Not Found" />
                                                    <p className="m-auto inset-0 text-md leading-7 text-center text-gray-800">Employee</p>
                                                    <div className="mx-auto my-auto">
                                                        <Image className="" width={24} height={20} src={rightArrowIcon} alt="Image Not Found" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </summary>
                                {
                                    employee.map((emp, i) => (
                                        <li key={i}>
                                            <div className="pl-6 space-y-20">
                                                <div className="w-full">
                                                    <div className="flex-1 h-full mx-auto">
                                                        <div className="flex w-[230px] bg-[transparent] shadow-transparent rounded-lg py-2 px-4">
                                                            <Image width={24} height={20} src={emp.icon} alt="Image Not Found" />
                                                            <p className="my-auto ml-8 inset-0  text-md leading-7 text-gray-800">{emp.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </details>
                        </li>
                        <li>
                            <details close>
                                <summary className="flex gap-4 cursor-pointer">
                                    {/* <Image width={20} height={20} src={department} alt="Image Not Found" /> */}
                                    <div className="space-y-20">
                                        <div className="w-full">
                                            <div className="flex-1 h-full mx-auto">
                                                <div className="flex justify-around w-[230px] bg-[transparent] shadow-transparent rounded-lg py-2 px-4">
                                                    <Image width={24} height={20} src={attendanceIcon} alt="Image Not Found" />
                                                    <p className="m-auto inset-0 text-md leading-7 text-center text-gray-800">Attendance</p>
                                                    <div className="mx-auto my-auto">
                                                        <Image className="" width={24} height={20} src={rightArrowIcon} alt="Image Not Found" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </summary>
                                {
                                    Attendance.map((att, i) => (
                                        <li key={i}>
                                            <div className="pl-6 space-y-20">
                                                <div className="w-full">
                                                    <div className="flex-1 h-full mx-auto">
                                                        <div className="flex w-[230px] bg-[transparent] shadow-transparent rounded-lg py-2 px-4">
                                                            <Image width={24} height={20} src={att.icon} alt="Image Not Found" />
                                                            <p className="my-auto ml-8 inset-0  text-md leading-7 text-gray-800">{att.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </details>
                        </li>
                        <li>
                            <details close>
                                <summary className="flex gap-4 cursor-pointer">
                                    {/* <Image width={20} height={20} src={department} alt="Image Not Found" /> */}
                                    <div className="space-y-20">
                                        <div className="w-full">
                                            <div className="flex-1 h-full mx-auto">
                                                <div className="flex justify-around w-[230px] bg-[transparent] shadow-transparent rounded-lg py-2 px-4">
                                                    <Image width={24} height={24} src={LeaveIcon} alt="Image Not Found" />
                                                    <p className="m-auto inset-0 text-md font-semibold leading-7 text-center text-gray-800">Leave</p>
                                                    <div className="mx-auto my-auto">
                                                        <Image className="" width={24} height={24} src={rightArrowIcon} alt="Image Not Found" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </summary>
                                {
                                    Leave.map((lve, i) => (
                                        <li key={i}>
                                            <div className="pl-6 space-y-20">
                                                <div className="w-full">
                                                    <div className="flex-1 h-full mx-auto">
                                                        <div className="flex w-[230px] bg-[transparent] shadow-transparent rounded-lg py-2 px-4">
                                                            <Image width={24} height={24} src={lve.icon} alt="Image Not Found" />
                                                            <p className="my-auto ml-8 inset-0  text-md font-semibold leading-7 text-gray-800">{lve.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </details>
                        </li>
                        <li>
                            <details close>
                                <summary className="flex gap-4 cursor-pointer">
                                    {/* <Image width={20} height={20} src={department} alt="Image Not Found" /> */}
                                    <div className="space-y-20">
                                        <div className="w-full">
                                            <div className="flex-1 h-full mx-auto">
                                                <div className="flex justify-around w-[230px] bg-[transparent] shadow-transparent rounded-lg py-2 px-4">
                                                    <Image width={24} height={20} src={accessIcon} alt="Image Not Found" />
                                                    <p className="m-auto inset-0  text-md leading-7 text-center text-gray-800">User</p>
                                                    <div className="mx-auto my-auto">
                                                        <Image className="" width={24} height={20} src={rightArrowIcon} alt="Image Not Found" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </summary>
                                {
                                    user.map((lve, i) => (
                                        <li key={i}>
                                            <div className="pl-6 space-y-20">
                                                <div className="w-full">
                                                    <div className="flex-1 h-full mx-auto">
                                                        <div className="flex w-[230px] bg-[transparent] shadow-transparent rounded-lg py-2 px-4">
                                                            <Image width={24} height={20} src={lve.icon} alt="Image Not Found" />
                                                            <p className="my-auto ml-8 inset-0  text-md leading-7 text-gray-800">{lve.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </details>
                        </li>
                    </ul>

                </div>
            </div>
        </aside>

    //     <aside className="w-full md:h-screen md:w-64 bg-gray-900 md:flex md:flex-col">
	// 	<header className="border-b border-solid border-gray-800 flex-grow">
	// 		<h1 className="py-6 px-4 text-gray-100 text-base font-medium">Buildings</h1>
	// 	</header>
	// 	<nav className="overflow-y-auto h-full flex-grow">
	// 		<header>
	// 			<span className="text-xs text-gray-500 block py-6 px-6">MENU</span>
	// 		</header>
	// 		<ul className="font-medium px-4 text-left">
	// 			<li className="text-gray-100">
	// 				<button className="rounded text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full">Performance</button>
	// 				<button className="rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left">New</button>

	// 			</li>
	// 		</ul>
	// 	</nav>
	// 	<section id="user" className="p-4 border-t border-solid border-gray-800">
	// 		<div className="flex">
	// 			<img src="http://preview.janlosert.com/static/media/a07.f7e8bebd.jpg" className="rounded-full h-10" alt="" />
	// 			<div className="flex flex-col p-2">
	// 				<span className="text-white pb-1">Kara Johnson</span>
	// 				<span className="text-xs text-gray-500">HR Specialist</span>
	// 			</div>
	// 		</div>
	// 	</section>

	// 	<footer className="p-4 border-t border-solid border-gray-800">
	// 		<h4 className="pb-2 text-gray-100 text-sm">© Buildings Ltd. 2018</h4>
	// 		<p className="text-gray-600 text-xs leading-normal">
	// 			Created with love for the environment. By designers and develodivers who love to work together in offices!</p>
	// 	</footer>
	// </aside>
    );
};

export default SideNav;