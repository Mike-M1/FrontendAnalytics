import React from 'react'

export default function MobileServices() {
    return (
        <div className="bg-white py-16 px-6">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                    Services
                </h2>
                <p className="text-xl text-red-600">
                    crafting spaces that you&apos;ll love to live in
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {/* Row 1 */}
                    {/* Custom Homes & Additions */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="flex flex-col">
                            <img src="/custom.avif"  alt="Custom Homes & Additions"
                             className='w-full  mx-auto mb-4 object-contain' />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-black text-center">
                                    Custom Homes & Additions
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Kitchens & Baths */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="flex flex-col">
                            <img src="/kitchen.jpeg"  alt="Kitchens & Baths"
                             className='w-full  mx-auto mb-4 object-contain' />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-black text-center">
                                    Kitchens & Baths
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Exterior Renovations */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="flex flex-col">
                            <img src="/externalrenovations.avif"  alt="Exterior Renovations"
                             className='w-full  mx-auto mb-4 object-contain' />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-black text-center">
                                    Exterior Renovations
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    {/* Decks & Outdoor Living */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="flex flex-col">
                            <img src="/decks.avif"  alt="Decks & Outdoor Living"
                             className='w-full  mx-auto mb-4 object-contain' />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-black text-center">
                                    Decks & Outdoor Living
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Interior Remodeling */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="flex flex-col">
                            <img src="/interior.avif"  alt="Interior Remodeling"
                             className='w-full  mx-auto mb-4 object-contain' />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-black text-center">
                                    Interior Remodeling
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Light Commercial */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="flex flex-col">
                            <img src="/commercial.avif"  alt="Light Commercial"
                             className='w-full  mx-auto mb-4 object-contain' />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-black text-center">
                                    Light Commercial
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
