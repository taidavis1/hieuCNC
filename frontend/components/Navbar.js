"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from "@/public/Logo.svg";
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { setActiveTab } from '@/redux/ActiveTabSlice';

import { HiBars3BottomLeft, HiMiniXMark } from "react-icons/hi2";


const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);


    const activeTab = useSelector((state) => state.activeTab.value);

    const dispatch = useDispatch();

    const [Scroll, SetScroll] = React.useState(false);

    const pathNames = usePathname();

    const isActive = React.useCallback(
        (tabNames) => activeTab === tabNames ? "text-main border-t border-main" : " t-underline hover:opacity-50",
        [activeTab]
    );

    React.useEffect(() => {
        dispatch(setActiveTab(pathNames));
    }, [pathNames, dispatch]);

    const handleHover = (id) => {
		setSubMenu((prevSub) => ({
			[id]: !prevSub[id],
		}));
	};

    const NavData = [
        {tabName: "Home", link: "/"},
        {tabName: "About", link: "/#about"},
        {tabName: "Services", link: "/#services"},
        {tabName: "Contact", link: "/#contact"},
    ];

    React.useEffect(() => {
        const Change_color = () => {
            if (window.scrollY >= 10) {
                SetScroll(true);
            }
            else { SetScroll(false); }
        };
        window.addEventListener("scroll", Change_color);
    }, []);


    return (
        <div className=' fixed top-0 inset-x-0 z-150'>
            <div className={` ${Scroll ? "mt-0" : "mt-8"} transition-all duration-500 ease-in-out`}>
                <div className='flex lg:space-x-8 items-center justify-between mx-5 lg:mx-auto lg:max-w-400'>
                    <div className={`lg:w-36 lg:h-36 w-18 h-18 rounded-full drop-shadow-main/60 drop-shadow-lg`}>
                        <Image className=' rounded-full' src={Logo} alt='Hieu CNC Logo' />
                    </div>
                    <div className={`flex ${Scroll? "bg-white/50 backdrop-blur-2xl" : "bg-transparent"} lg:block hidden rounded-full lg:space-x-24 px-12 py-2 items-center`}>
                        {NavData.map((item, index) => (
                            <Link href={item.link} key={index} className={`${isActive(item?.link)} ${Scroll ? "" : "text-white"} py-2 text-2xl font-headerFont`}>
                                {item.tabName}
                            </Link>
                        ))}
                    </div>
                    <div className={`lg:hidden w-12 h-12 ${isOpen? 'opacity-0' : 'opacity-100'} bg-main/60 backdrop-blur-lg flex items-center justify-center rounded-full`}>
                        <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen? 'pointer-events-none' : ''} cursor-pointer`}>
                            <HiBars3BottomLeft className={`text-white w-6 h-6 transition-all duration-500`} />
                        </div>
                    </div>
                    <div className=' lg:block hidden'></div>
                </div>
            </div>
            <div className={`fixed top-0 right-0 w-2/3 h-full text-white lg:hidden ${isOpen? "translate-x-0": " translate-x-full"} transition-all duration-1000 ease-in-out bg-main/60 backdrop-blur-lg`}>
                <div className=' relative'>
                    <HiMiniXMark onClick={() => setIsOpen(!open)} className={` ${isOpen? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} text-white text-3xl transition-all duration-500 ease-in-out absolute top-4 right-2 cursor-pointer`} />
                </div>
                <div className="flex flex-col mt-14 overflow-scroll space-y-4 h-full text-white">
                    <div className='flex flex-col space-y-4'>
                        {NavData.map((data, index) => (
                            <Link 
                                key={index}
                                href={data?.link || ""}
                                onClick={() => setIsOpen(false)}
                                className="text-lg py-4 transition border-b font-headerFont px-6 duration-500 ease-in-out"
                            >
                                {data?.tabName}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
