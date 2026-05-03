"use client";

import React from 'react';

import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, EffectFade} from 'swiper/modules';
import Image from 'next/image';

import {motion} from "motion/react";

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

import Link from 'next/link';

import {SiInstagram, SiFacebook } from "react-icons/si";

import TagIcon1 from "@/public/icon/1.svg"
import TagIcon2 from "@/public/icon/2.svg"
import TagIcon3 from "@/public/icon/3.svg"
import TagIcon4 from "@/public/icon/4.svg"

const Carousel = () => {

    const carouselData = [
        {
            id: 1,
            title: "Professional CNC Machine Maintenance & Repair",
            desc: "Hieu CNC specializes in CNC machine maintenance, troubleshooting, diagnostics, and repair services for Haas, Fanuc, Mitsubishi, Mazak, Okuma, Doosan, and other industrial CNC systems."
        },
        {
            id: 2,
            title: "Reliable CNC Calibration & Troubleshooting Services",
            desc: "Keep your machines running at peak performance with precision CNC calibration, control diagnostics, spindle inspection, and expert troubleshooting for manufacturing facilities and machine shops."
        },
        {
            id: 3,
            title: "Expert CNC Service for Industrial Manufacturing",
            desc: "From preventive maintenance to emergency CNC machine repair, Hieu CNC delivers dependable service, fast response times, and experienced support to minimize downtime and maximize productivity."
        },
    ];

    const SocialLinks = [
        {name: "Facebook", icon: <SiFacebook className='w-6 h-6' />, link: "https://www.facebook.com/profile.php?id=61558246414359"},
        {name: "Instagram", icon: <SiInstagram className='w-6 h-6' />, link: "https://www.facebook.com/profile.php?id=61558246414359"},
    ];

    const tagData = [
        {name: "HASS Control", img: TagIcon1},
        {name: "Fanuc Control", img: TagIcon2},
        {name: "Mitsubishi Control", img: TagIcon3},
        {name: "LIC# 4072299558", img: TagIcon4},
    ]

    return (
        <section className={` relative bg-[url('/Carousel/Background.svg')] bg-no-repeat bg-center bg-cover pt-38 lg:pb-0 pb-12 lg:pt-0 h-[800px] lg:h-[900px]`}>
            <div className=' top-0 w-full h-full absolute bg-black/30'>
                <div className='mx-auto lg:max-w-400 h-full'>
                    <div className='h-full w-full max-w-[450px] rounded-2xl sm:max-w-md md:max-w-3xl flex flex-col'>
                        <Swiper
                            loop={true}
                            initialSlide={0}
                            effect="fade"
                            autoplay={{
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                                delay: 2000
                            }}
                            fadeEffect={{crossFade: true}}
                            lazyPreloadPrevNext={1}
                            lazyPreloaderClass='swiper-lazy-preloader'
                            speed={5000}
                            modules={[Autoplay, EffectFade]}
                            
                            className="w-full h-full"
                        >
                            {carouselData.map((item) => (
                                <SwiperSlide className='' key={item.id}> 
                                    {({ isActive }) => (
                                        <div className='flex flex-col h-full justify-center lg:text-start text-center' >
                                            <motion.div
                                                animate={{y: isActive ? 0 : -100, opacity: isActive ? 1 : 0}}
                                                transition={{duration: 1, ease: "easeInOut" , type: "spring", stiffness: 100}}
                                                className='space-y-8 lg:space-y-12'
                                            >
                                                <div className=''>
                                                    <span className='font-headerFont text-white font-bold text-3xl lg:text-6xl'>
                                                        {item.title}
                                                    </span>
                                                </div>
                                                <div className={`lg:mx-0 mx-4`}>
                                                    <h1 className={`tracking-wider text-base lg:text-2xl text-white`}>
                                                        {item.desc}
                                                    </h1>
                                                </div>
                                            </motion.div>
                                        </div>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className='flex z-20 justify-start items-center space-x-8 lg:space-x-16 -translate-y-40 lg:translate-x-0 translate-x-8 lg:-translate-y-48'>
                            <Link target='__blank' href={"tel:6692619014"} className='rounded-2xl text-white shadow-xl hover:opacity-50 transition ease-in-out duration-300 font-bodyFont text-lg px-8 py-4 bg-main'>
                                Schedule Service
                            </Link>
                            <div className=' flex items-center space-x-8 lg:space-x-12'>
                                {SocialLinks.map((item, index) => (
                                    <Link target='__blank' href={item.link} key={index} className=' text-white'>
                                        {item.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute lg:block hidden -bottom-8 w-full z-4'>
                <div className='mx-auto max-w-6xl bg-white rounded-2xl shadow-xl'>
                    <div className=' grid lg:grid-cols-4 lg:place-items-center'>
                        {tagData.map((item, index) => (
                            <div key={index} className={`lg:p-3 p-1 flex items-center ${index !== 3 && "lg:border-r lg:border-r-main "} lg:h-[60%]`}>
                                <Image className='lg:w-1/3 w-1/5' src={item?.img} alt={item?.name} />
                                <h3 className=' lg:text-center lg:text-xl font-headerFont text-main'>
                                    {item?.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Carousel;