import React from 'react'

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        About Four Seasons Design & Remodeling
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
                        Crafting exceptional spaces that transform how you live, work, and enjoy your home.
                    </p>
                </div>
            </div>

            {/* Company Story Section */}
            <div className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8 text-center">
                        Our Story
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <p className="mb-6">
                            For over two decades, Four Seasons Design & Remodeling has been Northeast Indiana&apos;s 
                            trusted partner in transforming houses into dream homes. Founded on the principle that 
                            every home should be a reflection of its owner&apos;s unique lifestyle and needs, we&apos;ve 
                            built our reputation on exceptional craftsmanship, innovative design, and unwavering 
                            commitment to our clients.
                        </p>
                        <p className="mb-6">
                            What started as a small family business has grown into a full-service design and 
                            remodeling company that serves communities across Fort Wayne, South Bend, Goshen, 
                            Warsaw, and beyond. Our team of skilled craftsmen, designers, and project managers 
                            work together to bring your vision to life while ensuring every detail exceeds your 
                            expectations.
                        </p>
                        <p>
                            We believe that your home should be your sanctuary – a place where memories are made, 
                            families grow, and life&apos;s most precious moments unfold. That&apos;s why we approach 
                            every project with the same care and attention we would give our own homes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🏗️</span>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Quality Craftsmanship</h3>
                            <p className="text-gray-700">
                                We use only the finest materials and employ time-tested techniques to ensure 
                                your renovation stands the test of time.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Client Partnership</h3>
                            <p className="text-gray-700">
                                We work closely with you throughout the entire process, keeping you informed 
                                and involved every step of the way.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💡</span>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Innovative Design</h3>
                            <p className="text-gray-700">
                                Our designers stay ahead of trends to create spaces that are both beautiful 
                                and functional for modern living.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Staff Photos Section */}
            <div className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Staff Member 1 */}
                        <div className="text-center">
                            <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-6xl text-gray-400">👨‍💼</span>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">John Smith</h3>
                            <p className="text-blue-600 font-semibold mb-2">Founder & CEO</p>
                            <p className="text-gray-700 text-sm">
                                With over 25 years in the industry, John leads our team with passion 
                                and expertise in custom home design.
                            </p>
                        </div>

                        {/* Staff Member 2 */}
                        <div className="text-center">
                            <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-6xl text-gray-400">👩‍💼</span>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">Sarah Johnson</h3>
                            <p className="text-blue-600 font-semibold mb-2">Lead Designer</p>
                            <p className="text-gray-700 text-sm">
                                Sarah brings creativity and attention to detail to every project, 
                                ensuring each space is both beautiful and functional.
                            </p>
                        </div>

                        {/* Staff Member 3 */}
                        <div className="text-center">
                            <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-6xl text-gray-400">👨‍🔧</span>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">Mike Davis</h3>
                            <p className="text-blue-600 font-semibold mb-2">Project Manager</p>
                            <p className="text-gray-700 text-sm">
                                Mike ensures every project runs smoothly and on time, coordinating 
                                with our skilled craftsmen and keeping clients informed.
                            </p>
                        </div>

                        {/* Staff Member 4 */}
                        <div className="text-center">
                            <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-6xl text-gray-400">👩‍🔨</span>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">Lisa Wilson</h3>
                            <p className="text-blue-600 font-semibold mb-2">Master Carpenter</p>
                            <p className="text-gray-700 text-sm">
                                Lisa&apos;s precision and craftsmanship bring our designs to life, 
                                creating custom built-ins and architectural details.
                            </p>
                        </div>

                        {/* Staff Member 5 */}
                        <div className="text-center">
                            <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-6xl text-gray-400">👨‍💻</span>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">David Brown</h3>
                            <p className="text-blue-600 font-semibold mb-2">Client Relations</p>
                            <p className="text-gray-700 text-sm">
                                David ensures every client experience is exceptional, from initial 
                                consultation through project completion and beyond.
                            </p>
                        </div>

                        {/* Staff Member 6 */}
                        <div className="text-center">
                            <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-6xl text-gray-400">👩‍🎨</span>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">Emily Taylor</h3>
                            <p className="text-blue-600 font-semibold mb-2">Interior Designer</p>
                            <p className="text-gray-700 text-sm">
                                Emily specializes in creating cohesive design schemes that reflect 
                                each client&apos;s unique style and personality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Ready to Transform Your Home?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Let&apos;s discuss your vision and create something extraordinary together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                            Schedule Consultation
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
                            View Our Work
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
