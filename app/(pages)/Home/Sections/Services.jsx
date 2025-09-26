import React from 'react'

export default function Services() {
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Row 1 */}
                    {/* Custom Homes & Additions */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="flex h-48">
                            <div className="w-2/3 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                                <div className="text-center text-gray-700">
                                    <div className="text-4xl mb-2">🏠</div>
                                    <p className="text-sm font-semibold">Custom Home</p>
                                </div>
                            </div>
                            <div className="w-1/3 flex items-center justify-center p-4">
                                <h3 className="text-lg font-semibold text-black text-center">
                                    Custom Homes & Additions
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Kitchens & Baths */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="flex h-48">
                            <div className="w-2/3 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <div className="text-center text-gray-700">
                                    <div className="text-4xl mb-2">🚿</div>
                                    <p className="text-sm font-semibold">Modern Bath</p>
                                </div>
                            </div>
                            <div className="w-1/3 flex items-center justify-center p-4">
                                <h3 className="text-lg font-semibold text-black text-center">
                                    Kitchens & Baths
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Exterior Renovations */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="flex h-48">
                            <div className="w-2/3 bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                                <div className="text-center text-gray-700">
                                    <div className="text-4xl mb-2">🏡</div>
                                    <p className="text-sm font-semibold">Exterior</p>
                                </div>
                            </div>
                            <div className="w-1/3 flex items-center justify-center p-4">
                                <h3 className="text-lg font-semibold text-black text-center">
                                    Exterior Renovations
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    {/* Decks & Outdoor Living */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="flex h-48">
                            <div className="w-2/3 bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
                                <div className="text-center text-gray-700">
                                    <div className="text-4xl mb-2">🌅</div>
                                    <p className="text-sm font-semibold">Outdoor Living</p>
                                </div>
                            </div>
                            <div className="w-1/3 flex items-center justify-center p-4">
                                <h3 className="text-lg font-semibold text-black text-center">
                                    Decks & Outdoor Living
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Interior Remodeling */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="flex h-48">
                            <div className="w-2/3 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                                <div className="text-center text-gray-700">
                                    <div className="text-4xl mb-2">🛋️</div>
                                    <p className="text-sm font-semibold">Interior</p>
                                </div>
                            </div>
                            <div className="w-1/3 flex items-center justify-center p-4">
                                <h3 className="text-lg font-semibold text-black text-center">
                                    Interior Remodeling
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Light Commercial */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="flex h-48">
                            <div className="w-2/3 bg-gradient-to-br from-indigo-200 to-indigo-300 flex items-center justify-center">
                                <div className="text-center text-gray-700">
                                    <div className="text-4xl mb-2">🏢</div>
                                    <p className="text-sm font-semibold">Commercial</p>
                                </div>
                            </div>
                            <div className="w-1/3 flex items-center justify-center p-4">
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
