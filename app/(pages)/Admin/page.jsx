"use client"
import React, { useState, useEffect, useRef } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Admin() {
    const { data: session } = useSession()

    const [activeTab, setActiveTab] = useState(0)
    const [showCredentials, setShowCredentials] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowCredentials(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    if (!session) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Dashboard</h1>
                    <button 
                        onClick={() => signIn("google")}
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Sign In With Google
                    </button>
                </div>
            </div>
        )
    }
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
            <div className="flex-1 flex flex-col p-3 sm:p-6">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Hello {session.user.name}</h1>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            {/* CMS Link Button */}
                            <a 
                                href="http://44.222.202.60:8055/admin" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Manage CMS
                            </a>
                            
                            {/* Credentials Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button 
                                    onClick={() => setShowCredentials(!showCredentials)}
                                    className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                    CMS Login
                                </button>
                                
                                {/* Dropdown Content */}
                                {showCredentials && (
                                    <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-3">CMS Login Credentials</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-600 mb-1">Username:</label>
                                                    <div className="flex items-center gap-2">
                                                        <input 
                                                            type="text" 
                                                            value="admin@example.com" 
                                                            readOnly 
                                                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm font-mono"
                                                        />
                                                        <button 
                                                            onClick={() => navigator.clipboard.writeText('admin@example.com')}
                                                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                                                            title="Copy to clipboard"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-600 mb-1">Password:</label>
                                                    <div className="flex items-center gap-2">
                                                        <input 
                                                            type="password" 
                                                            value="supersecret" 
                                                            readOnly 
                                                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm font-mono"
                                                        />
                                                        <button 
                                                            onClick={() => navigator.clipboard.writeText('supersecret')}
                                                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                                                            title="Copy to clipboard"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <button 
                                onClick={() => signOut()}
                                className="bg-gray-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm sm:text-base"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                    
                    {/* TAB NAVIGATION */}
                    <div className="flex flex-wrap justify-center mb-6 border-b border-gray-200 overflow-x-auto">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-3 sm:px-6 py-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
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
                            height="600" 
                            frameBorder="0" 
                            allowFullScreen 
                            src={tabs[activeTab].iframeSrc} // IFRAME SOURCE CHANGES WITH TAB
                            className="w-full sm:h-[800px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}