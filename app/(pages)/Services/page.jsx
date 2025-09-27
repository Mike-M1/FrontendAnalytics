import React from 'react'

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
                        Comprehensive design and remodeling solutions tailored to your unique vision and lifestyle.
                    </p>
                </div>
            </div>

            {/* Services Overview */}
            <div className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8 text-center">
                        What We Do
                    </h2>
                    <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
                        From concept to completion, we offer a full range of design and construction services 
                        to transform your space into the home of your dreams. Our experienced team handles 
                        every aspect of your project with precision and care.
                    </p>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">🏠</div>
                            <h3 className="text-xl font-bold text-black mb-4">Custom Homes & Additions</h3>
                            <p className="text-gray-700 mb-4">
                                Build your dream home from the ground up or add the perfect addition to your existing space.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• New construction</li>
                                <li>• Home additions</li>
                                <li>• Second story additions</li>
                                <li>• Garage conversions</li>
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">🚿</div>
                            <h3 className="text-xl font-bold text-black mb-4">Kitchens & Baths</h3>
                            <p className="text-gray-700 mb-4">
                                Transform the heart of your home with stunning kitchen and bathroom renovations.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Kitchen remodeling</li>
                                <li>• Bathroom renovation</li>
                                <li>• Custom cabinetry</li>
                                <li>• Fixture upgrades</li>
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">🏡</div>
                            <h3 className="text-xl font-bold text-black mb-4">Exterior Renovations</h3>
                            <p className="text-gray-700 mb-4">
                                Enhance your home&apos;s curb appeal with beautiful exterior updates and improvements.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Siding replacement</li>
                                <li>• Window & door updates</li>
                                <li>• Roofing projects</li>
                                <li>• Exterior painting</li>
                            </ul>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">🌅</div>
                            <h3 className="text-xl font-bold text-black mb-4">Decks & Outdoor Living</h3>
                            <p className="text-gray-700 mb-4">
                                Create the perfect outdoor space for entertaining and relaxation.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Deck construction</li>
                                <li>• Patio installation</li>
                                <li>• Outdoor kitchens</li>
                                <li>• Pergolas & gazebos</li>
                            </ul>
                        </div>

                        {/* Service 5 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">🛋️</div>
                            <h3 className="text-xl font-bold text-black mb-4">Interior Remodeling</h3>
                            <p className="text-gray-700 mb-4">
                                Refresh and modernize your interior spaces with thoughtful design updates.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Living room updates</li>
                                <li>• Bedroom renovations</li>
                                <li>• Basement finishing</li>
                                <li>• Flooring installation</li>
                            </ul>
                        </div>

                        {/* Service 6 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">🏢</div>
                            <h3 className="text-xl font-bold text-black mb-4">Light Commercial</h3>
                            <p className="text-gray-700 mb-4">
                                Professional renovation services for small businesses and commercial spaces.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Office renovations</li>
                                <li>• Retail space updates</li>
                                <li>• Restaurant fit-outs</li>
                                <li>• Medical office design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
                        Our Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Consultation</h3>
                            <p className="text-gray-700">
                                We start with a detailed discussion about your vision, needs, and budget to understand your goals.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Design & Planning</h3>
                            <p className="text-gray-700">
                                Our team creates detailed plans and 3D renderings to bring your vision to life before construction begins.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Construction</h3>
                            <p className="text-gray-700">
                                Our skilled craftsmen execute the project with precision, keeping you informed throughout the process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Contact us today for a free consultation and let&apos;s discuss how we can transform your space.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                            Get Free Quote
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}