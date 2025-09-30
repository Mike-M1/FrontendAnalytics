import React from 'react'

export default function MobilePlan() {
    return (
        <div className="bg-white py-16 px-6">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                    It doesn&apos;t have to be overwhelming.
                </h2>
                <h3 className="text-3xl lg:text-4xl font-bold text-black">
                    We have a plan.
                </h3>
            </div>

            {/* Three-Step Process */}
            <div className="max-w-6xl mx-auto">
                <div className="bg-gray-50 rounded-lg p-4 lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Step 1: Project Evaluation */}
                        <div className="text-center">
                            {/* Image Placeholder */}
                            <img src="/plan1.avif" alt="Project Evaluation" 
                                 className="w-full max-w-xs mx-auto mb-4 object-contain" />
                            
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-black mb-4">
                                1. Project Evaluation
                            </h3>
                            
                            {/* Bulleted List */}
                            <ul className="space-y-2">
                                <li className="flex items-center justify-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                                    define objectives and scope of work
                                </li>
                                <li className="flex items-center justify-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                                    determine budgets and timelines
                                </li>
                            </ul>
                        </div>

                        {/* Step 2: Design & Plan */}
                        <div className="text-center">
                            {/* Image Placeholder */}
                            <img src="/plan2.avif" alt="Design & Plan" 
                                 className="w-full max-w-xs mx-auto mb-4 object-contain" />
                            
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-black mb-4">
                                2. Design & Plan
                            </h3>
                            
                            {/* Bulleted List */}
                            <ul className="space-y-2">
                                <li className="flex items-center justify-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                                    create schematic drawings and renderings
                                </li>
                                <li className="flex items-center justify-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                                    select products, materials, and features
                                </li>
                            </ul>
                        </div>

                        {/* Step 3: Build and Transform */}
                        <div className="text-center">
                            {/* Image Placeholder */}
                            <img src="/plan3.avif" alt="Build and Transform" 
                                 className="w-full max-w-xs mx-auto mb-4 object-contain" />
                            
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-black mb-4">
                                3. Build and Transform
                            </h3>
                            
                            {/* Bulleted List */}
                            <ul className="space-y-2">
                                <li className="flex items-center justify-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                                    make your vision a reality through carefully crafted spaces
                                </li>
                                <li className="flex items-center justify-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                                    live life in the manner you envision
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}