'use client';
import React, { useState } from 'react';
import Eval from './Eval';

export default function JunkDrawer() {
    const [isEvalOpen, setIsEvalOpen] = useState(false);
    return (
        <div className="bg-gray-100 py-16 px-6">
            {/* Main Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-black">
                    We&apos;re sure you have some questions...
                </h2>
            </div>

            {/* FAQ Content */}
            <div className="max-w-6xl mx-auto">
                <div className="space-y-12">
                    {/* FAQ 1 */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        <div className="lg:w-1/3">
                            <h3 className="text-xl font-bold text-black">
                                We don&apos;t know how to make our house what we want?
                            </h3>
                        </div>
                        <div className="lg:w-2/3">
                            <p className="text-lg text-black leading-relaxed">
                                We work with homeowners every day to define their needs, design a tailor-made solution to their challenges, and then craft exceptional spaces for them to live in. We have a tested and refined plan to guide our clients to solutions to their home challenges.
                            </p>
                        </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        <div className="lg:w-1/3">
                            <h3 className="text-xl font-bold text-black">
                                But will it cost too much money?
                            </h3>
                        </div>
                        <div className="lg:w-2/3">
                            <p className="text-lg text-black leading-relaxed">
                                Choosing to invest in your home is a wise choice, especially if it helps you live the way you want. There are always financial calculations that have to make sense with any project, but we often encourage clients to not ignore the value of living in a space that they love. The value of that can only be determined by each client individually.
                            </p>
                        </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        <div className="lg:w-1/3">
                            <h3 className="text-xl font-bold text-black">
                                Aren&apos;t construction projects disruptive and, generally, kind of a headache?
                            </h3>
                        </div>
                        <div className="lg:w-2/3">
                            <p className="text-lg text-black leading-relaxed">
                                Yes, the process of construction can be challenging, which is why you need a team to guide and support you through a proven, successful process. Construction can be tough, but we have never had a customer say it wasn&apos;t worth it after they are enjoying their functional, beautiful new spaces.
                            </p>
                        </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        <div className="lg:w-1/3">
                            <h3 className="text-xl font-bold text-black">
                                I don&apos;t want to make a poor decision...
                            </h3>
                        </div>
                        <div className="lg:w-2/3">
                            <p className="text-lg text-black leading-relaxed">
                                We&apos;ll work to understand your vision and needs, and make suggestions that align with those objectives. Every project is unique. A successful project requires everyone involved to be on the same team to achieve your objectives. We want to help you be informed, confident, and comfortable in your decisions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
                    <button className="bg-gray-400 text-black px-8 py-3 rounded hover:bg-gray-500">
                        Call Now!
                    </button>
                    <button 
                        onClick={() => setIsEvalOpen(true)}
                        className="bg-gray-600 text-white px-8 py-3 rounded hover:bg-gray-700"
                    >
                        Request Evaluation
                    </button>
                </div>
            </div>
            {/* Evaluation Modal */}
        {/* Evaluation Modal */}
        <Eval isOpen={isEvalOpen} onClose={() => setIsEvalOpen(false)} />
        </div>
    )
}