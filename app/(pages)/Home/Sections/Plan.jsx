import React from 'react'

export default function Plan() {
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
                <div className="bg-gray-50 rounded-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1: Project Evaluation */}
                        <div className="text-center">
                            {/* Image Placeholder */}
                            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                                <div className="text-center text-gray-700">
                                    <div className="text-6xl mb-4">📏</div>
                                    <p className="text-lg font-semibold">Planning Tools</p>
                                    <p className="text-sm">Tape measure, blueprints, laser meter</p>
                                </div>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-black mb-4 text-left">
                                1. Project Evaluation
                            </h3>
                            
                            {/* Bulleted List */}
                            <ul className="text-left space-y-2">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    define objectives and scope of work
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    determine budgets and timelines
                                </li>
                            </ul>
                        </div>

                        {/* Step 2: Design & Plan */}
                        <div className="text-center">
                            {/* Image Placeholder */}
                            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                                <div className="text-center text-gray-700">
                                    <div className="text-6xl mb-4">🎨</div>
                                    <p className="text-lg font-semibold">Material Samples</p>
                                    <p className="text-sm">Marble, wood, white samples</p>
                                </div>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-black mb-4 text-left">
                                2. Design & Plan
                            </h3>
                            
                            {/* Bulleted List */}
                            <ul className="text-left space-y-2">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    create schematic drawings and renderings
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    select products, materials, and features
                                </li>
                            </ul>
                        </div>

                        {/* Step 3: Build and Transform */}
                        <div className="text-center">
                            {/* Image Placeholder */}
                            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                                <div className="text-center text-gray-700">
                                    <div className="text-6xl mb-4">🔨</div>
                                    <p className="text-lg font-semibold">Construction Site</p>
                                    <p className="text-sm">Framing, ladders, scaffolding</p>
                                </div>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-black mb-4 text-left">
                                3. Build and Transform
                            </h3>
                            
                            {/* Bulleted List */}
                            <ul className="text-left space-y-2">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    make your vision a reality through carefully crafted spaces
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
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