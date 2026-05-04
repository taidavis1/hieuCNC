const jsonLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${process.env.NEXT_PUBLIC_REAL_URL}#hieucnc`,
    name: "Hieu CNC",
    url: `${process.env.NEXT_PUBLIC_REAL_URL}`,
    telephone: "(669) 261-9014",
    email: "hieucnc153@gmail.com",
    image: `${process.env.NEXT_PUBLIC_REAL_URL}/Carousel/Background.svg`,
    logo: `${process.env.NEXT_PUBLIC_REAL_URL}/Logo.svg`,
    description:
        "Hieu CNC provides professional CNC machine calibration, troubleshooting, diagnostics, maintenance, and repair services in San Jose, CA and the Bay Area. We service Haas Control, Fanuc Control, Mitsubishi Control, Mazak, Okuma, Matsuura, Makino, Doosan, YCM, and Akira Seiki CNC systems.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "1723 Little Orchard St Ste C",
        addressLocality: "San Jose",
        addressRegion: "CA",
        postalCode: "95125",
        addressCountry: "US",
    },
    areaServed: [
        {
            "@type": "City",
            name: "San Jose",
        },
        {
            "@type": "Place",
            name: "Bay Area",
        },
        {
            "@type": "Place",
            name: "South Bay",
        },
    ],
    sameAs: [
        "https://www.facebook.com/profile.php?id=61558246414359&sk=photos",
    ],
    makesOffer: [
        {
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: "CNC Calibration",
                description:
                    "Professional CNC calibration services in San Jose, CA to improve machine accuracy, alignment, precision, and production performance.",
            },
        },
        {
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: "CNC Troubleshooting",
                description:
                    "CNC troubleshooting services for Haas Control, Fanuc Control, Mitsubishi Control, and other CNC systems to identify machine errors and reduce downtime.",
            },
        },
        {
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: "CNC Diagnostics",
                description:
                    "CNC diagnostics services for machine shops and manufacturers in San Jose and the Bay Area, including control system checks, machine inspections, and performance evaluations.",
            },
        },
        {
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: "CNC Maintenance & Repair",
                description:
                    "CNC machine maintenance and repair services for industrial CNC equipment, helping manufacturers keep machines reliable, accurate, and production-ready.",
            },
        },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Hieu CNC Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "CNC Calibration",
                    serviceType: "CNC Calibration",
                    areaServed: "San Jose, CA and Bay Area",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "CNC Troubleshooting",
                    serviceType: "CNC Troubleshooting",
                    areaServed: "San Jose, CA and Bay Area",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "CNC Diagnostics",
                    serviceType: "CNC Diagnostics",
                    areaServed: "San Jose, CA and Bay Area",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "CNC Maintenance & Repair",
                    serviceType: "CNC Maintenance and Repair",
                    areaServed: "San Jose, CA and Bay Area",
                },
            },
        ],
    },
    knowsAbout: [
        "CNC calibration",
        "CNC troubleshooting",
        "CNC diagnostics",
        "CNC maintenance",
        "CNC repair",
        "Haas Control",
        "Fanuc Control",
        "Mitsubishi Control",
        "Mazak CNC machines",
        "Okuma CNC machines",
        "Matsuura CNC machines",
        "Makino CNC machines",
        "Doosan CNC machines",
        "YCM CNC machines",
        "Akira Seiki CNC machines",
    ],
};

export default jsonLD;