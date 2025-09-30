import React from 'react';

export default function S5() {
    return (
        <div className="bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                        Our Clients
                    </h2>
                    <div className="w-16 h-1 bg-red-600 mx-auto"></div>
                </div>

                {/* Client Logos Grid */}
                <div className="flex flex-wrap justify-center flex-row gap-8 items-center justify-items-center">
                    
                    {/* Talo */}
                    <img src="/talo.avif" alt="Talo" className="w-16 h-16" />

                    {/* Solid State */}
                    <img src="/solid.avif" alt="Solid State" className="w-16 h-16" />

                    {/* Noted */}
                    <img src="/noted.avif" alt="Noted" className="w-16 h-16" />

                    {/* Goan */}
                    <img src="/goan.avif" alt="Goan" className="w-16 h-16" />

                    {/* Mowi */}
                    <img src="/mowi.avif" alt="Mowi" className="w-16 h-16" />
                        
                </div>
            </div>
        </div>
    );
}
