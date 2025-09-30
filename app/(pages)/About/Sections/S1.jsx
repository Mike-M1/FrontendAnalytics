import React from 'react';

export default function S1() {
    return (
        <div className="bg-white py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Headings */}
                <div className="mb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                        What We Believe.
                    </h1>
                    <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                        How We Strive to Be.
                    </h2>
                </div>

                {/* Tagline */}
                <p className="text-xl lg:text-2xl text-red-600 font-medium mb-12">
                    We remodel and build to help people live more fully.
                </p>

                {/* Core Principles List */}
                <div className="space-y-8 text-left max-w-3xl mx-auto">
                    {/* Make Our Best Better */}
                    <div className="flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                                Make Our Best Better
                            </h3>
                            <p className="text-lg text-black leading-relaxed">
                                We will always do the best that we can and know to do. We will always strive to increase our knowledge, competencies, and efficiencies. We will not make the same mistake repeatedly.
                            </p>
                        </div>
                    </div>

                    {/* Embody Integrity */}
                    <div className="flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                                Embody Integrity
                            </h3>
                            <p className="text-lg text-black leading-relaxed">
                                We will do what we say we will do. We will be who we say we are.
                            </p>
                        </div>
                    </div>

                    {/* Own Our Actions */}
                    <div className="flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                                Own Our Actions
                            </h3>
                            <p className="text-lg text-black leading-relaxed">
                                We will own our choices and actions. We will be accountable to God. We will be accountable to ourselves. We will be accountable to our processes.
                            </p>
                        </div>
                    </div>

                    {/* Have a Positive Impact */}
                    <div className="flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                                Have a Positive Impact
                            </h3>
                            <p className="text-lg text-black leading-relaxed">
                                We will vigilantly look for ways to positively affect others. We will be kind. We will help each other. We will help others.
                            </p>
                        </div>
                    </div>

                    {/* Always be Thankful */}
                    <div className="flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                                Always be Thankful
                            </h3>
                            <p className="text-lg text-black leading-relaxed">
                                There is always something to be thankful for. We will be grateful for our teammates and their efforts. We will be grateful for our opportunities. We will be grateful for our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
