import React from 'react'

export default function Process() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        Our Remodeling Process
                    </h1>
                    <p className="text-xl text-gray-300">
                        From initial consultation to final walkthrough, we guide you through every step.
                    </p>
                </div>
            </div>

            {/* Process Steps */}
            <div className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-1/3">
                                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto lg:mx-0">
                                    1
                                </div>
                            </div>
                            <div className="lg:w-2/3">
                                <h3 className="text-2xl font-bold text-black mb-4">Initial Consultation</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We meet with you to discuss your vision, needs, and budget. This is where we learn about 
                                    your lifestyle, preferences, and goals for the project. We&apos;ll take measurements, 
                                    assess the existing space, and provide initial recommendations.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                            <div className="lg:w-1/3">
                                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto lg:mx-0">
                                    2
                                </div>
                            </div>
                            <div className="lg:w-2/3">
                                <h3 className="text-2xl font-bold text-black mb-4">Design & Planning</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our design team creates detailed plans, 3D renderings, and material selections. 
                                    We&apos;ll present multiple options, refine the design based on your feedback, 
                                    and finalize all specifications before construction begins.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-1/3">
                                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto lg:mx-0">
                                    3
                                </div>
                            </div>
                            <div className="lg:w-2/3">
                                <h3 className="text-2xl font-bold text-black mb-4">Construction</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our skilled craftsmen execute the project with precision and care. We maintain 
                                    regular communication, keep the work area clean, and ensure quality at every step. 
                                    You&apos;ll receive regular updates and can visit the site anytime.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                            <div className="lg:w-1/3">
                                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto lg:mx-0">
                                    4
                                </div>
                            </div>
                            <div className="lg:w-2/3">
                                <h3 className="text-2xl font-bold text-black mb-4">Final Walkthrough</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We conduct a thorough inspection together, ensuring every detail meets our high 
                                    standards. We&apos;ll address any concerns, provide care instructions, and ensure 
                                    you&apos;re completely satisfied with your new space.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white py-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                        Ready to Start Your Remodeling Journey?
                    </h2>
                    <p className="text-lg mb-6 text-blue-100">
                        Let&apos;s discuss your project and create a plan that works for you.
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </div>
    )
}