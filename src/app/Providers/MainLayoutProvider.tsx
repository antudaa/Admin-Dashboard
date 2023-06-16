'use client';

import SideNav from "@/Components/Global/SideNav/SideNav";
import TopNav from "@/Components/Global/TopNav/TopNav";
import { useState } from "react";

const MainLayoutProvider = ({ children }: any) => {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        console.log(open);
        setOpen((prev) => !prev);
    }

    return (
        <div className="bg-[aliceblue]">

            <div className="flex justify-start flex-row-reverse items-start">
                <TopNav setOpen={setOpen} toggle={toggle} />
                <div className="flex flex-col ">
                    <SideNav className="rounded-xl" open={open} toggle={toggle} />
                    <main className="ml-6 mt-6">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export const getLayout = ({ page }: any) => <MainLayoutProvider>{page}</MainLayoutProvider>

export default MainLayoutProvider;