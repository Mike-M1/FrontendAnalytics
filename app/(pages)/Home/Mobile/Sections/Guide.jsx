import React from 'react'

export default function MobileGuide() {
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
                <div className="lg:w-2/3 flex flex-col justify-center items-center">
                <iframe src="https://www.google.com/maps/d/embed?mid=10YaPVIAcfuO2Gws15VmAkf63OY4czF4&ehbc=2E312F" style={{border:0, margin: '5px', width: '100%', height: '480px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
                </div>

                {/* Industry Association Logos */}
                <div className="lg:w-1/3">
                    <div className="grid grid-cols-2 gap-6">
                        {/* Top Row */}
                        <div className="border-2 border-white rounded-lg flex flex-col justify-center items-center">
                            <img src="/guidelogos/BBB.avif" alt="BBB"
                             className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain' />
                        </div>
                        <div className="border-2 border-white rounded-lg flex flex-col justify-center items-center">
                            <img src="/guidelogos/500logo.avif" alt="Qualified"
                             className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain' />
                            
                        </div>

                        {/* Middle Row */}
                        <div className="border-2 border-white rounded-lg flex flex-col justify-center items-center">
                            <img src="/guidelogos/NARI.avif" alt="NARI"
                             className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain' />
                        </div>
                        <div className="border-2 border-white rounded-lg flex flex-col justify-center items-center">
                            <img src="/guidelogos/Nahb.avif" alt="NAHB"
                             className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain' />
                        </div>

                        {/* Bottom Row */}
                        <div className="border-2 border-white rounded-lg flex flex-col justify-center items-center">
                            <div className="text-xs font-bold">IBA</div>
                            <img src="/guidelogos/IBA.avif" alt="IBA"
                             className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain' />
                        </div>
                        <div className="border-2 border-white rounded-lg flex flex-col justify-center items-center">
                            <img src="/guidelogos/Bani.avif" alt="BANI"
                             className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain' />
                        </div>
                    </div>

                    {/* Additional Logos Row */}
                    <div className="grid grid-cols-2 gap-6 mt-6">
                        <div className="border-2 border-white rounded-lg flex flex-col justify-center items-center">
                            <img src="/guidelogos/nadra.avif" alt="NADRA"
                             className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain' />
                        </div>
                        <div className="border-2 border-white rounded-lg flex flex-col justify-center items-center">
                            <img src="/guidelogos/nkba.avif" alt="NKBA"
                             className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}