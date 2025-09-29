import React, { useState } from 'react'
import MobileEval from './Eval'

export default function MobileStakes() {
    const [isEvalOpen, setIsEvalOpen] = useState(false);

    return (
        <div className="h-fit flex flex-col w-full bg-amber-600 mt-4">
            {/* Combined Top Section - White background with black text */}
            <div className="bg-white flex flex-col items-center justify-center p-8 h-[60vh]">
                <div className="m-[10px] text-center">
                    <h2 className="text-3xl font-bold text-black leading-tight mb-8">
                        When your home doesn&apos;t work, life feels harder.
                    </h2>
                    
                    <ul className="space-y-3 text-base text-gray-700">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            Is your home helping you make great memories?
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            Wish your home looked better?
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            Spending more time fixing than enjoying?
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            Does your home support aging in place?
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            Need more space to welcome family?
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            Is your home feeling tired and outdated?
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Left - Image with overlay */}
            <div className="relative h-[60vh]">
                <div className="absolute inset-0">
                    <img 
                        src="/fourier.jpg" 
                        alt="Coastal mudroom with built-in storage and seating"
                        className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 bg-black bg-opacity-70 p-8 rounded-2xl">
                    <h3 className="text-white text-2xl font-bold mb-6 text-center">
                        Creating Homes that Fit You
                    </h3>
                    <div className="flex flex-col gap-4">
                        <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all duration-200">
                            Call Now!
                        </button>
                        <button 
                            onClick={() => setIsEvalOpen(true)}
                            className="bg-gray-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-700 transition-all duration-200"
                        >
                            Request Evaluation
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Right - White background with black text */}
            <div className="bg-white flex items-center justify-center p-6 h-[60vh]">
                <div className="m-[10px]">
                    <ul className="space-y-3 text-base">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            Make your home the place where everyone wants to be.
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            Experience peace of mind and lasting comfort at home.
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            Enjoy your weekends living, not working on your home.
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            Turn heads with a home that truly stands out.
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            Create space for cherished memories with loved ones.
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            Reflect your style and taste in every corner of your home.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Eval Modal */}
            <MobileEval isOpen={isEvalOpen} onClose={() => setIsEvalOpen(false)} />
        </div>
    )
}