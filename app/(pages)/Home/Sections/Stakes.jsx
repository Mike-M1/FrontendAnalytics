import React from 'react'

export default function Stakes() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            {/* Top Left - White background with black text */}
            <div className="bg-white flex items-center justify-center p-6 lg:p-12">
                <h2 className="text-3xl lg:text-5xl font-bold text-black text-center lg:text-left leading-tight">
                    When your home doesn&apos;t work, life feels harder.
                </h2>
            </div>

            {/* Top Right - Black background with white text */}
            <div className="bg-black text-white flex items-center justify-center p-6 lg:p-12">
                <ul className="space-y-4 text-base lg:text-lg">
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Is your home helping you make great memories?
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Wish your home looked better?
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Spending more time fixing than enjoying?
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Does your home support aging in place?
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Need more space to welcome family?
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Is your home feeling tired and outdated?
                    </li>
                </ul>
            </div>

            {/* Bottom Left - Image with overlay */}
            <div className="relative h-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src="/fourier.jpg" 
                        alt="Coastal mudroom with built-in storage and seating"
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {/* Semi-transparent overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-black bg-opacity-60 p-6 rounded">
                    <h3 className="text-white text-2xl font-bold mb-4">
                        Creating Homes that Fit You
                    </h3>
                    <div className="flex gap-3">
                        <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
                            Call Now!
                        </button>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400">
                            Your Home Wish List
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Right - White background with black text */}
            <div className="bg-white flex items-center justify-center p-6 lg:p-12">
                <ul className="space-y-4 text-base lg:text-lg">
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Make your home the place where everyone wants to be.
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Experience peace of mind and lasting comfort at home.
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Enjoy your weekends living, not working on your home.
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Turn heads with a home that truly stands out.
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Create space for cherished memories with loved ones.
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Reflect your style and taste in every corner of your home.
                    </li>
                </ul>
            </div>
        </div>
    )
}