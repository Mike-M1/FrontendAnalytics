import React from 'react'

export default function Guide() {
    return (
        <div className="bg-white py-16 px-6">
            {/* Main Text Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                    We know how uncomfortable a home that doesn&apos;t perform can be.
                </h2>
                <p className="text-xl text-black">
                    Join hundreds of your neighbors who are loving their homes!
                </p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
                {/* Google Maps Embed */}
                <div className="lg:w-2/3">
                    <div className="bg-gray-100 rounded-lg p-4 h-64 lg:h-96 flex items-center justify-center">
                        <div className="text-center text-gray-600">
                            <div className="text-6xl mb-4">🗺️</div>
                            <p className="text-lg font-semibold">Google My Maps Embed</p>
                            <p className="text-sm">Service area map with location markers</p>
                            <p className="text-xs mt-2">Fort Wayne, South Bend, Goshen, Warsaw, Plymouth, etc.</p>
                        </div>
                    </div>
                </div>

                {/* Industry Association Logos */}
                <div className="lg:w-1/3">
                    <div className="grid grid-cols-2 gap-6">
                        {/* Top Row */}
                        <div className="bg-blue-600 text-white p-4 rounded text-center">
                            <div className="text-xs font-bold">BBB</div>
                            <div className="text-xs">ACCREDITED</div>
                            <div className="text-xs">BUSINESS</div>
                        </div>
                        <div className="bg-green-600 text-white p-4 rounded text-center">
                            <div className="text-xs font-bold">Qualified</div>
                            <div className="text-xs">Remodeler</div>
                            <div className="text-lg font-bold">500</div>
                            <div className="text-xs">2024</div>
                        </div>

                        {/* Middle Row */}
                        <div className="bg-blue-500 text-white p-4 rounded text-center">
                            <div className="text-xs font-bold">NARI</div>
                            <div className="text-xs">MEMBER</div>
                        </div>
                        <div className="bg-blue-700 text-white p-4 rounded text-center">
                            <div className="text-xs font-bold">NAHB</div>
                            <div className="text-xs">National Association</div>
                            <div className="text-xs">of Home Builders</div>
                        </div>

                        {/* Bottom Row */}
                        <div className="bg-blue-600 text-white p-4 rounded text-center">
                            <div className="text-xs font-bold">IBA</div>
                            <div className="text-xs">Indiana Builders</div>
                            <div className="text-xs">Association</div>
                            <div className="text-xs">Since 1952</div>
                        </div>
                        <div className="bg-blue-500 text-white p-4 rounded text-center">
                            <div className="text-xs font-bold">BANI</div>
                            <div className="text-xs">Builders Association</div>
                            <div className="text-xs">of Northeast Indiana</div>
                        </div>
                    </div>

                    {/* Additional Logos Row */}
                    <div className="grid grid-cols-2 gap-6 mt-6">
                        <div className="bg-amber-700 text-white p-4 rounded text-center">
                            <div className="text-xs font-bold">NADRA</div>
                            <div className="text-xs">North American Deck</div>
                            <div className="text-xs">and Railing Association</div>
                        </div>
                        <div className="bg-blue-600 text-white p-4 rounded text-center">
                            <div className="text-xs font-bold">NKBA</div>
                            <div className="text-xs">National Kitchen</div>
                            <div className="text-xs">& Bath Association</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}