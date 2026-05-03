"use client";

import React from 'react';
import Link from 'next/link';
import { GrFormNext} from 'react-icons/gr';
import {IoPhonePortraitOutline, IoMailOutline} from "react-icons/io5";
import ServicesData from './ServicesData';

const Footer = () => {

const NavData = [
        {tabName: "Home", link: "/"},
        {tabName: "About", link: "/#about"},
        {tabName: "Services", link: "/#services"},
    ];

    return (
        <div id='contact' className='pb-8 bg-linear-to-r from-main to-[#1F2937] text-white'>
            <div className=' grid lg:grid-cols-2'>
                <div className='lg:border-r lg:pt-12 border-b border-white pb-12'>
                    <div className='grid lg:px-14 px-8 items-center pt-12 lg:grid-cols-2 gap-12'>
                        <div className="">
                            <h1 className="text-white font-bold font-headerFont text-xl lg:text-2xl">
                                Professional CNC Machine Maintenance & Repair Services
                            </h1>

                            <p className="mt-4 text-sm">
                                Hieu CNC provides expert CNC machine calibration, troubleshooting, diagnostics, maintenance, and repair services in San Jose and the Bay Area. We support machine shops and industrial manufacturers with reliable CNC service for Haas, Fanuc, Mitsubishi, Mazak, Okuma, and other CNC control systems.
                            </p>
                            <div className=' mt-8'>
                                <Link className=' hover:opacity-50 flex items-center space-x-1' href={"tel:6692619014"} target='__blank'>
                                    <IoPhonePortraitOutline className='w-6 h-6 text-white' />
                                    <span className=''>
                                        (669) 261-9014
                                    </span>
                                </Link>
                            </div>
                            <div className=' mt-6'>
                                <Link className=' flex hover:opacity-50 items-center space-x-1' href={"mailto:hieucnc153@gmail.com"} target='__blank'>
                                    <IoMailOutline className='w-6 h-6 text-white' />
                                    <span className=''>
                                        hieucnc153@gmail.com
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className=" flex flex-col">
                            <div className='space-y-2'>
                                <h3 className="font-headerFont font-bold">
                                    Our Location
                                </h3>
                                <Link href={"https://share.google/XezjqvXTRGScNNdaQ"} className="hover:opacity-50 uppercase transition-all duration-300">
                                    <span className=' lg:text-lg'>
                                        1723 Little Orchard St Ste C San Jose CA 95125
                                    </span>
                                </Link>
                            </div>
                            <div className='space-y-2 mt-8'>
                                <h3 className=" font-headerFont font-bold">
                                    Control Systems
                                </h3>
                                <Link href={""} className="hover:opacity-50 uppercase transition-all duration-300">
                                    <span className=' text-base'>
                                        HASS Control, Fanuc Control, Mitsubishi Control
                                    </span>
                                </Link>
                            </div>
                            <div className='space-y-2 mt-8'>
                                <h3 className="font-headerFont font-bold">
                                    Social Media
                                </h3>
                                <Link href={"https://www.facebook.com/"} className="hover:opacity-50 transition-all duration-300">
                                    <span className=' text-base'>
                                        https://www.facebook.com/profile.php?id=61558246414359&sk=photos
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:grid-cols-3 place-content-center lg:pt-0 pt-8 px-8 lg:px-28 grid-cols-2 grid border-b border-white'>
                    <div className=''>
                        {NavData.map((item, index) => (
                            <div key={index} className='text-white group lg:text-base mb-5'>
                                <Link href={item?.link || ""} className='flex items-center gap-x-[1px]'>
                                    <span className=' group-hover:opacity-50 lg:text-base text-sm transition-all duration-300'>
                                        {item?.tabName}
                                    </span> 
                                    <GrFormNext className='group-hover:translate-x-1 -translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100' />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className=''>
                        {ServicesData.map((item, index) => (
                            item?.name === "Engineering Services" || item?.name === "PCB-PCBA" || item?.name === "Enclosures" ? null :
                            <div key={index} className='text-white group lg:text-base mb-5'>
                                <Link href={"/#services"} className='flex items-center gap-x-[1px]'>
                                    <span className='lg:text-base text-sm group-hover:opacity-50 transition-all duration-300'>
                                        {item?.name}    
                                    </span> 
                                    <GrFormNext className='group-hover:translate-x-1 -translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100' />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className=' lg:mx-12'>
                        <div className='text-white group lg:text-base mb-5'>
                            <Link href={""} className='flex items-center gap-x-[1px]'>
                                <span className=' text-sm group-hover:opacity-50 transition-all duration-300'>
                                </span> 
                                <GrFormNext className='group-hover:translate-x-1 -translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100' />
                            </Link>
                        </div>
                        <div className='text-white group lg:text-base mb-5'>
                            <Link href={"/sitemap.xml"} className='flex items-center gap-x-[1px]'>
                                <span className=' text-sm group-hover:opacity-50 transition-all duration-300'>
                                </span> 
                                <GrFormNext className='group-hover:translate-x-1 -translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100' />
                            </Link>
                        </div>
                        <div className='text-white group lg:text-base mb-5'>
                            <Link href={""} className='flex items-center gap-x-[1px]'>
                                <span className=' text-sm group-hover:opacity-50 transition-all duration-300'>
                                </span> 
                                <GrFormNext className='group-hover:translate-x-1 -translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' lg:mx-20 mt-8 text-white'>
                <div className=' flex lg:flex-row flex-col lg:items-center lg:justify-between'>
                    <div className='inline-flex justify-center lg:justify-start lg:order-1 order-2 text-sm lg:text-base text-white space-x-1'>
                        <span>
                            © {new Date().getFullYear()}
                        </span>
                        <Link className='hover:underline font-bold ' href='/'>Hieu CNC</Link>
                        <span>
                            All rights reserved
                        </span>
                    </div>
                    <div className='lg:text-base lg:order-2 order-1 text-sm lg:justify-start justify-center inline-flex lg:items-start text-white space-x-4'>
                        <span>
                            San Jose - 95125
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;