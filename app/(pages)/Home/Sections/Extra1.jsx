import React from 'react'

export default function Extra1() {
    return (
        <div className="flex flex-col lg:flex-row">
            {/* Left Section - Company Values (White Background) */}
            <div className="lg:w-1/2 bg-white p-6 lg:p-12">
                <div className="max-w-lg mx-auto">
                    {/* Main Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-red-600 mb-8">
                        What We Believe,<br />
                        How We Strive to Be
                    </h2>
                    
                    {/* Introductory Paragraph */}
                    <p className="text-xl text-black mb-12">
                        We remodel and build to help people live more fully.
                    </p>
                    
                    {/* Core Values List */}
                    <div className="space-y-8">
                        {/* Value 1 */}
                        <div>
                            <h3 className="text-lg font-bold text-black mb-2">
                                Make Our Best Better
                            </h3>
                            <p className="text-black leading-relaxed">
                                We will always do the best that we can and know to do. We will always strive to increase our knowledge, competencies, and efficiencies. We will not make the same mistake repeatedly.
                            </p>
                        </div>
                        
                        {/* Value 2 */}
                        <div>
                            <h3 className="text-lg font-bold text-black mb-2">
                                Embody Integrity
                            </h3>
                            <p className="text-black leading-relaxed">
                                We will do what we say we will do. We will be who we say we are.
                            </p>
                        </div>
                        
                        {/* Value 3 */}
                        <div>
                            <h3 className="text-lg font-bold text-black mb-2">
                                Own Our Actions
                            </h3>
                            <p className="text-black leading-relaxed">
                                We will own our choices and actions. We will be accountable to God. We will be accountable to ourselves. We will be accountable to our processes.
                            </p>
                        </div>
                        
                        {/* Value 4 */}
                        <div>
                            <h3 className="text-lg font-bold text-black mb-2">
                                Have a Positive Impact
                            </h3>
                            <p className="text-black leading-relaxed">
                                We will vigilantly look for ways to positively affect others. We will be kind. We will help each other. We will help others.
                            </p>
                        </div>
                        
                        {/* Value 5 */}
                        <div>
                            <h3 className="text-lg font-bold text-black mb-2">
                                Always Be Thankful
                            </h3>
                            <p className="text-black leading-relaxed">
                                There is always something to be thankful for. We will be grateful for our teammates and their efforts. We will be grateful for our opportunities. We will be grateful for our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Blog Section (Black Background) */}
            <div className="lg:w-1/2 bg-black text-white p-6 lg:p-12">
                <div className="max-w-lg mx-auto">
                    {/* Section Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
                        Follow Along
                    </h2>
                    
                    {/* Blog Post Previews */}
                    <div className="space-y-6 mb-12">
                        {/* Blog Post 1 */}
                        <div className="bg-white text-black p-6 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">
                                        Incredible Home Transformation
                                    </h3>
                                    <p className="text-sm text-gray-600">Apr 8</p>
                                </div>
                                <div className="w-16 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                                    <div className="text-2xl">🏠</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Blog Post 2 */}
                        <div className="bg-white text-black p-6 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">
                                        Incredible Home Transformation
                                    </h3>
                                    <p className="text-sm text-gray-600">Apr 8</p>
                                </div>
                                <div className="w-16 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                                    <div className="text-2xl">🏠</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Blog Post 3 */}
                        <div className="bg-white text-black p-6 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">
                                        Incredible Home Transformation
                                    </h3>
                                    <p className="text-sm text-gray-600">Apr 8</p>
                                </div>
                                <div className="w-16 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                                    <div className="text-2xl">🏠</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Blog Post 4 */}
                        <div className="bg-white text-black p-6 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">
                                        Incredible Home Transformation
                                    </h3>
                                    <p className="text-sm text-gray-600">Apr 8</p>
                                </div>
                                <div className="w-16 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                                    <div className="text-2xl">🏠</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Call to Action Button */}
                    <button className="bg-white text-black border border-black px-6 py-3 rounded hover:bg-gray-100">
                        Join Blog Newsletter &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}
