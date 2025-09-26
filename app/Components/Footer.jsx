import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">
                            FOUR SEASONS DESIGN & REMODELING, INC.
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Crafting spaces that you&apos;ll love to live in. We remodel and build 
                            to help people live more fully, with over two decades of experience 
                            transforming homes across Northeast Indiana.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-gray-400 text-black px-6 py-2 rounded hover:bg-gray-500">
                                Call Now!
                            </button>
                            <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">
                                Request Evaluation
                            </button>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white">Custom Homes & Additions</a></li>
                            <li><a href="#" className="hover:text-white">Kitchens & Baths</a></li>
                            <li><a href="#" className="hover:text-white">Exterior Renovations</a></li>
                            <li><a href="#" className="hover:text-white">Decks & Outdoor Living</a></li>
                            <li><a href="#" className="hover:text-white">Interior Remodeling</a></li>
                            <li><a href="#" className="hover:text-white">Light Commercial</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-gray-300">
                            <p>Fort Wayne, IN</p>
                            <p>Phone: (260) 555-0123</p>
                            <p>Email: info@fourseasonsdesign.com</p>
                            <div className="mt-4">
                                <h5 className="font-semibold mb-2">Service Areas</h5>
                                <p className="text-sm">South Bend, Goshen, Warsaw, Plymouth, Columbia City, Auburn, Three Rivers</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 Four Seasons Design & Remodeling, Inc. All rights reserved.
                        </div>
                        
                        {/* Legal Links */}
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Service</a>
                            <a href="#" className="hover:text-white">Licensed & Insured</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}