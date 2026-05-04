import {Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import jsonLD from "@/components/jsonLD";
import Script from "next/script";

const fontTitle = Rajdhani({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-title",
});

const fontBody = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-body",
});


export const metadata = {
	title: "Hieu CNC | CNC Repair & Maintenance San Jose",
	description:"Professional CNC machine maintenance, diagnostics, troubleshooting, calibration, and repair services in San Jose and the Bay Area for Haas, Fanuc, Mitsubishi, Mazak, Okuma, Makino, and other CNC systems.",
	keywords: [
        "Hieu CNC",
        "CNC machine repair",
        "CNC maintenance",
        "CNC troubleshooting",
        "CNC diagnostics",
        "CNC calibration",
        "CNC repair specialist",
        "CNC machine service",
        "CNC machine repair San Jose",
        "CNC maintenance San Jose",
        "CNC repair Bay Area",
        "CNC machine service Bay Area",
        "industrial CNC repair San Jose",
        "machine shop CNC repair",
        "CNC technician San Jose",
        "CNC maintenance company California",
        "Haas repair",
        "Fanuc repair",
        "Mitsubishi CNC repair",
        "Mazak maintenance",
        "Okuma repair",
        "Makino CNC service",
        "Matsuura CNC maintenance",
        "Doosan CNC repair",
        "YCM machine service",
        "Akira Seiki repair",
        "preventive CNC maintenance",
        "emergency CNC repair",
        "industrial machine maintenance",
        "machine diagnostics",
        "CNC spindle troubleshooting",
        "machine calibration services",
        "manufacturing equipment repair",
        "CNC machine technician",
        "Who repairs CNC machines in San Jose",
        "Best CNC machine repair company near me",
        "CNC machine troubleshooting services",
        "industrial CNC maintenance services",
        "CNC calibration experts",
        "local CNC repair specialist",
    ],
	robots: {
		index: true,
		follow: true,
		googleBot: {
		index: true,
		follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_REAL_URL}`,
		languages: {
			"en-US": `${process.env.NEXT_PUBLIC_REAL_URL}`,
		}
	},
	openGraph: {
        title: "Hieu CNC | CNC Repair & Maintenance San Jose",
        description: "Professional CNC machine maintenance, diagnostics, troubleshooting, calibration, and repair services in San Jose and the Bay Area for Haas, Fanuc, Mitsubishi, Mazak, Okuma, Makino, and other CNC systems.",
        url: `${process.env.NEXT_PUBLIC_REAL_URL}`,
        siteName: "Hieu CNC",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_REAL_URL}/Carousel/Background.svg`,
                width: 1200,
                height: 630,
                alt: "Hieu CNC Machine Maintenance & Repair Services",
            },
        ],
    },
	twitter: {
		card: "summary_large_image",
		title: "Hieu CNC | CNC Repair & Maintenance San Jose",
		description:"Expert CNC machine maintenance, diagnostics, troubleshooting, calibration, and repair services for industrial manufacturers and machine shops in San Jose and the Bay Area.",
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_REAL_URL}/Carousel/Background.svg`,
				alt: "Hieu CNC Machine Maintenance & Repair Services",
			}
		],
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			suppressHydrationWarning
			lang="en"
			className={`${fontTitle.variable} ${fontBody.variable} scroll-smooth scroll-pt-36`}
		>
			<head>
				<Script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLD),
					}}
				/>
			</head>
			<body className="font-txtFont flex flex-col">
				<StoreProvider>
					<main className="overflow-hidden">
						<Navbar />
						{children}
						<Footer />
					</main>
				</StoreProvider>
			</body>
		</html>
	);
}
