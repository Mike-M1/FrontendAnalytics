import React, { useState } from 'react'
import Eval from './Eval';

export default function DesktopStakes() {
    const [isEvalOpen, setIsEvalOpen] = useState(false);

    return (
        <div className="h-[80vh] flex flex-col w-full bg-amber-600 mt-4">
            {/* Top Row */}
            <div className="flex flex-1 h-[40vh]">
                {/* Top Left - White background with black text */}
                <div className="bg-white flex items-center justify-center p-12 flex-1">
                    <div className="m-[10px]">
                        <h2 className="text-3xl font-bold text-black text-center leading-tight">
                            When your home doesn&apos;t work, life feels harder.
                        </h2>
                    </div>
                </div>

                {/* Top Right - Black background with white text */}
                <div className="bg-black text-white flex items-center justify-center p-12 flex-1">
                    <div className="m-[10px]">
                        <ul className="space-y-2 text-base">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Is your home helping you make great memories?
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Wish your home looked better?
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Spending more time fixing than enjoying?
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Does your home support aging in place?
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Need more space to welcome family?
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Is your home feeling tired and outdated?
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-1 h-[40vh]">
                {/* Bottom Left - Image with overlay */}
                <div className="relative flex-1">
                    <div className="absolute inset-0">
                        <img 
                            src="/fourier.jpg" 
                            alt="Coastal mudroom with built-in storage and seating"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <div className="absolute bottom-8 left-8 right-8 bg-black bg-opacity-75 p-8 rounded-lg backdrop-blur-sm shadow-xl">
                        <h3 className="text-white text-3xl font-bold mb-6 tracking-tight">
                            Creating Homes that Fit You
                        </h3>
                        <div className="flex gap-4">
                            <a href="tel:+1234567890" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now
                            </a>
                            <button 
                                onClick={() => setIsEvalOpen(true)}
                                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Request Evaluation
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Right - White background with black text */}
                <div className="bg-white flex items-center justify-center p-12 flex-1">
                    <div className="m-[10px]">
                        <ul className="space-y-2 text-base">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Make your home the place where everyone wants to be.
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Experience peace of mind and lasting comfort at home.
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Enjoy your weekends living, not working on your home.
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Turn heads with a home that truly stands out.
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Create space for cherished memories with loved ones.
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Reflect your style and taste in every corner of your home.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Evaluation Modal */}
            <Eval isOpen={isEvalOpen} onClose={() => setIsEvalOpen(false)} />
        </div>
    )
}