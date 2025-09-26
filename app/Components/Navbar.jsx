"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="bg-black text-white px-6 py-4 sticky top-0 z-50">
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center justify-between">
                <Image src="/fsl.png" alt="logo" width={200} height={100} onClick={() => router.push("/")} className="cursor-pointer" />
                <nav className="flex space-x-8">
                    <a href="/About" className="hover:text-gray-300">About</a>
                    <a href="/Services" className="hover:text-gray-300">Services</a>
                    <a href="/Process" className="hover:text-gray-300">Process</a>
                    <a href="/Contact" className="hover:text-gray-300">Contact</a>
                    <a href="/Blog" className="hover:text-gray-300">Blog</a>
                    <a href="/Admin" className="hover:text-gray-300">Admin</a>
                </nav>
                <div className="flex space-x-3">
                    <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Call Now!</button>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Request Evaluation</button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden flex items-center justify-between">
                <Image src="/fsl.png" alt="logo" width={150} height={75} onClick={() => router.push("/")} className="cursor-pointer" />
                
                {/* Hamburger Menu Button */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex flex-col space-y-1 p-2"
                >
                    <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </button>
            </div>

            {/* Mobile Full-Screen Menu */}
            <div className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* X Button */}
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors"
                >
                    ×
                </button>
                
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <nav className="flex flex-col items-center space-y-6 text-2xl">
                        <a href="/About" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a href="/Services" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
                        <a href="/Process" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Process</a>
                        <a href="/Contact" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
                        <a href="/Blog" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</a>
                        <a href="/Admin" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Admin</a>
                    </nav>
                    
                    <div className="flex flex-col space-y-4">
                        <button className="bg-gray-400 text-white px-8 py-3 rounded text-lg">Call Now!</button>
                        <button className="bg-gray-600 text-white px-8 py-3 rounded text-lg">Request Evaluation</button>
                    </div>
                </div>
            </div>
        </header>
    )
}