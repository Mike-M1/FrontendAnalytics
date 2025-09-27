'use client';
import { useState } from 'react';
import FadeCarousel from "@/app/Components/FadeCarousel";
import Eval from "./Eval";

export default function HeaderSection() {
    const [isEvalOpen, setIsEvalOpen] = useState(false);
    
    return (
        <>
            <main className="flex flex-col lg:flex-row">
                {/* Left Section - Kitchen Image */}
                <div className="lg:w-1/2">
                    <div className="relative h-96 lg:h-screen">
                        <FadeCarousel />
                    </div>
                </div>

                {/* Right Section - Text and CTAs */}
                <div className="lg:w-1/2 flex items-center justify-center p-12">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                            Remodeling and Building Homes to Fit Your Lifestyle
                        </h1>
                        <p className="text-red-600 text-xl mb-8">
                            Crafting spaces that you&apos;ll love to live in
                        </p>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-gray-400 text-white px-6 py-3 rounded hover:bg-gray-500">
                                Call Now!
                            </button>
                            <button 
                                onClick={() => setIsEvalOpen(true)}
                                className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700"
                            >
                                Request Evaluation
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            
            
            <Eval isOpen={isEvalOpen} onClose={() => setIsEvalOpen(false)} />
        </>
    );
}