"use client"
import React, { useState } from 'react'

export default function Admin() {
    const [activeTab, setActiveTab] = useState(0)

    // TAB CONFIGURATION - Add/remove tabs here
    const tabs = [
        {
            title: "Main Dashboard", // CHANGE TAB TITLE HERE
            iframeSrc: "https://us.posthog.com/embedded/JPp3UWEC7a6HlzKTNnc5UnoVU-4y1w" // CHANGE IFRAME URL HERE
        },
        {
            title: "Real Time Analytics", // CHANGE TAB TITLE HERE
            iframeSrc: "https://us.posthog.com/embedded/SsmmUUCNrvQkYlo-ui_116h0P-A4LA" // CHANGE IFRAME URL HERE
            
        },
        {
            title: "User Research", // CHANGE TAB TITLE HERE
            iframeSrc:  "https://us.posthog.com/embedded/9shqh7gbbQR3r5gjj3Z3vZUy3maaeQ" // CHANGE IFRAME URL HERE
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-1 flex flex-col p-6">
                <div className="w-full max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Admin Dashboard</h1>
                    
                    {/* TAB NAVIGATION */}
                    <div className="flex flex-wrap justify-center mb-6 border-b border-gray-200">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                                    activeTab === index
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* IFRAME CONTAINER */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="800" 
                            frameBorder="0" 
                            allowFullScreen 
                            src={tabs[activeTab].iframeSrc} // IFRAME SOURCE CHANGES WITH TAB
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}