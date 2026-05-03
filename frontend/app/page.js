"use client";

import Carousel from '@/components/Carousel';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { motion, AnimatePresence } from 'motion/react';

import imgHome1 from "@/public/imgHome/1.svg";
import imgHome2 from "@/public/imgHome/2.svg";
import imgHome3 from "@/public/imgHome/3.svg";
import imgHome4 from "@/public/imgHome/4.svg";

import sectionIcon from "@/public/icon/sectionIcon.svg";
import sectionIcon2 from "@/public/icon/sectionIcon2.svg";

import servicesData from '@/components/ServicesData';

import {IoMdCheckmarkCircleOutline} from "react-icons/io";

import whyImg from "@/public/WhyImg.svg";

import machine1 from "@/public/icon/machineLogo/1.svg";
import machine2 from "@/public/icon/machineLogo/2.svg";
import machine3 from "@/public/icon/machineLogo/3.svg";
import machine4 from "@/public/icon/machineLogo/4.svg";
import machine5 from "@/public/icon/machineLogo/5.svg";
import machine6 from "@/public/icon/machineLogo/6.svg";
import machine7 from "@/public/icon/machineLogo/7.svg";
import machine8 from "@/public/icon/machineLogo/8.svg";

function randomIcon(){
	const itemList = [sectionIcon, sectionIcon2];

	return <Image className='lg:w-18 lg:h-18 w-12 h-12 lg:-translate-y-4 rotate-40' src={itemList[Math.floor(Math.random() * itemList.length)]} alt="Hieu CNC Section Icon" />
};


const page = () => {

	const Section1Data = [
		{altName: "Hieu CNC Service for CNC Machine Shop San Jose" , img: imgHome1},
		{altName: "Hieu CNC Service for CNC Machine Shop San Jose" , img: imgHome2},
		{altName: "Hieu CNC Service for CNC Machine Shop San Jose" , img: imgHome3},
		{altName: "Hieu CNC Service for CNC Machine Shop San Jose" , img: imgHome4},
	];

	const SectionWhyData = [
		{
			name: "Experienced CNC Machine Specialist",
			desc: "Hieu CNC provides professional CNC machine maintenance, troubleshooting, diagnostics, and repair services backed by hands-on experience working with Haas, Fanuc, Mitsubishi, Mazak, and other industrial CNC systems."
		},

		{
			name: "Fast & Reliable CNC Service in San Jose",
			desc: "Serving San Jose and the Bay Area with responsive CNC machine support designed to reduce downtime, restore machine performance, and keep manufacturing operations running efficiently."
		},

		{
			name: "Professional Communication & Trusted Support",
			desc: "Hieu CNC is committed to honest recommendations, clear communication, and dependable service support for local manufacturers, production facilities, and CNC machine operators throughout the South Bay."
		},
	];

	const machineLogo = [
		machine1, machine2, machine3, machine4, machine5, machine6, machine7, machine8
	]

  	return (
		<div>
			<Carousel />
			<motion.section
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, type: "spring"}}
				viewport={{amount: 0.3}}
				id="about" 
				className=' bg-white'
			>
				<div className='pb-12 lg:pb-24 px-4 pt-14 lg:pt-34 lg:px-0 mx-auto max-w-7xl'>
					<div className=' flex lg:flex-row flex-col gap-8 lg:gap-12 items-center'>
						<div className='lg:w-4/5 space-y-6'>
							<div className=' font-headerFont space-x-2 tracking-wide text-4xl lg:text-5xl flex items-center flex-wrap'>
								<h1 className=' text-main'>
									San Jose’s Trusted 
								</h1>
								<h1 className=''>
									CNC Repair Experts
								</h1>
								{randomIcon()}
							</div>
							<div className=' flex items-center'>
								<div className='text-base text-txt-second space-y-4'>
									<p>
										Hieu CNC provides professional CNC machine maintenance, troubleshooting, diagnostics, calibration, and repair services for machine shops, manufacturers, and industrial facilities in San Jose, CA and the surrounding Bay Area. We specialize in keeping CNC machines running with reliable service support for Haas, Fanuc, Mitsubishi, Mazak, Matsuura, Makino, Okuma, YCM, Doosan, and Akira Seiki systems.
									</p>
									<p>
										From preventive CNC maintenance to emergency machine repair, Hieu CNC helps reduce downtime, improve machine performance, and support long-term manufacturing reliability. Our service-focused approach is built on precision, clear communication, and experienced CNC troubleshooting for local San Jose and Bay Area manufacturers.
									</p>
								</div>
							</div>
						</div>
						<div className=' w-full grid grid-cols-2 place-items-center gap-4'>
							{Section1Data.map((item, index) => (
								<div className={` w-full cursor-pointer group overflow-hidden rounded-2xl shadow-xl`} key={index}>
									<Image src={item.img} alt={item.altName} className={`w-full h-full group-hover:scale-110 group-hover:opacity-50 transition duration-500 rounded-2xl`} />
								</div>
							))}
						</div>
					</div>
				</div>
			</motion.section>

			<motion.section 
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, type: "tween"}}
				viewport={{amount: 0.2}}
				id="services" 
				className='bg-[#F9FAFB]'
			>
				<div className='pb-8 lg:pb-12 px-4 pt-12 lg:pt-24 lg:px-0 lg:mx-auto lg:max-w-7xl'>
					<div className=' space-y-4 flex flex-col items-center justify-center'>
						<div className=' font-headerFont space-x-2 tracking-wide text-3xl lg:text-5xl flex items-center flex-wrap'>
							{randomIcon()}
							<h1 className='text-main'>
								Professional CNC
							</h1>
							<h1>
								Services in San Jose
							</h1>
						</div>

						<div className='lg:text-center lg:w-3/4'>
							<p className='lg:text-lg text-base text-txt-second'>
								Hieu CNC provides expert CNC calibration, troubleshooting, diagnostics, maintenance, and repair services in San Jose, CA and the Bay Area. We help machine shops and manufacturers reduce downtime, improve machine accuracy, and keep CNC equipment running reliably.
							</p>
						</div>
					</div>
					<div className=' mt-8 lg:mt-16'>
						<div className='lg:grid-cols-4 grid gap-8'>
							{servicesData.map((item, index) => (
								<div className=' cursor-pointer p-3 lg:p-4 border border-transparent transition duration-300 hover:border-main rounded-2xl shadow-xl' key={index}>
									<Image src={item?.icon} alt={item?.name} className=' w-20 h-20 lg:w-28 lg:h-28' />
									<div className='flex items-center mt-4'>
										<div className={`${index === 6? "": "lg:w-4/5"}`}>
											<h2 className='text-2xl font-headerFont'>
												{item?.name}
											</h2>
										</div>
									</div>
									<p className='mt-4 text-sm text-txt-second'>
										{item?.desc}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className=' lg:mt-20 mt-12 flex justify-center'>
						<Link href={"tel:6692619014"} className=' rounded-full duration-500 transition ease-in-out hover:opacity-60 hover:shadow-lg hover:-translate-y-2 text-center w-[200px] text-white py-4 bg-main font-nav'>
							Schedule a Services
						</Link>
					</div>
				</div>
			</motion.section>

			<section className='bg-main relative'>
				<svg  
					className="absolute text-[#F9FAFB] -top-8 lg:-top-12 w-full h-20 sm:h-44 "
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 1440 320"
				>
					<path 
						fill="currentColor" 
						d="M0,128L60,154.7C120,181,240,235,360,234.7C480,235,600,181,720,154.7C840,128,960,128,1080,149.3C1200,171,1320,213,1380,234.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
					>
					</path>
				</svg>
				<div className='pb-12 lg:pb-24 px-4 pt-14 lg:pt-44 lg:px-0 mx-auto max-w-7xl'>
					<div className=' lg:grid-cols-2 grid items-center gap-12'>
						<div className="p-2 shadow-xl bg-white mt-8 rounded-2xl overflow-hidden cursor-pointer group">
							<Image className='object-cover group-hover:scale-105 transition duration-300 group-hover:opacity-60 rounded-2xl w-full lg:h-[700px]' src={whyImg} alt='Hieu CNC Information Poster' />
						</div>
						<div className=''>
							<h1 className=' font-headerFont text-white space-x-2 tracking-wide text-4xl lg:text-4xl'>
								Why San Jose Trusts Hieu CNC?
							</h1>

							<p className='mt-8 text-base text-white'>
								Hieu CNC provides reliable CNC machine maintenance, troubleshooting, diagnostics, calibration, and repair services for manufacturers and machine shops throughout San Jose and the Bay Area. We focus on reducing downtime, improving machine performance, and delivering dependable CNC support with professional service and precision workmanship.
							</p>
							<div className=' mt-8 space-y-8'>
								{SectionWhyData.map((item, index) => (
									<div key={index} className=''>
										<div className=' flex space-x-2'>
											<IoMdCheckmarkCircleOutline className=' text-white w-12 h-12' />
											<div className=' space-y-2'>
												<h2 className=' text-xl lg:text-2xl font-bold font-headerFont text-white'>
													{item?.name}
												</h2>
												<p className=' text-white lg:text-base text-sm'>
													{item?.desc}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className=' bg-white'>
				<div className='pb-8 lg:pb-12 px-2 pt-12 lg:pt-24 lg:px-0 mx-auto max-w-7xl'>
					<div className=' space-y-4 flex flex-col items-center justify-center'>
						<div className=' font-headerFont space-x-2 tracking-wide text-3xl lg:text-5xl flex items-center flex-wrap'>
							{randomIcon()}
							<h1 className='text-main'>
								CNC Machines & Control
							</h1>
							<h1>
								Systems We Service
							</h1>
						</div>

						<div className='lg:text-center lg:w-3/4'>
							<p className='lg:text-lg text-txt-second'>
								Hieu CNC provides professional maintenance, troubleshooting, diagnostics, calibration, and repair services for a wide range of CNC machines and control systems in San Jose and the Bay Area, including Haas, Fanuc, Mitsubishi, Mazak, Makino, Okuma, Matsuura, YCM, Doosan, and Akira Seiki equipment.							
							</p>
						</div>
					</div>
					<div className=' lg:grid-cols-4 grid grid-cols-2 gap-4 mt-8 lg:mt-12'>
						{machineLogo.map((item, index) => (
							<Image key={index} className='w-full h-full hover:opacity-50 cursor-pointer transition duration-300 p-4' src={item} alt='Hieu CNC Machine Logo' />
						))}
					</div>
				</div>
			</section>

		</div>
  	)
};

export default page;
