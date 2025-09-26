import React from 'react'
import FaceCarousel2 from "@/app/Components/FaceCarousel2";

export default function Guide2() {
    return (
        <div className="relative h-96 lg:h-screen">
            <FaceCarousel2 />
            
            {/* Testimonial Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-1/2 h-1/2 flex flex-col justify-center">
                    <p className="text-orange-600 text-lg mb-2 text-center">
                        &quot;This company transformed our home beyond our wildest dreams.&quot;
                    </p>
                    <p className="text-orange-600 text-lg mb-4 text-center">
                        &quot;The attention to detail and quality is unmatched.&quot;
                    </p>
                    <p className="text-black font-semibold text-xl text-center">
                        Sarah & Mike Johnson
                    </p>
                    <p className="text-gray-600 text-sm text-center mt-2">
                        Custom Kitchen Renovation
                    </p>
                    
                    {/* Navigation dots */}
                    <div className="flex justify-center mt-6 space-x-2">
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
