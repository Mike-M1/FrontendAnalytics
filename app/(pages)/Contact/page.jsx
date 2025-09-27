import React from 'react'

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-300">
                        Ready to start your next project? We&apos;d love to hear from you.
                    </p>
                </div>
            </div>

            {/* Contact Content */}
            <div className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-black mb-8">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input 
                                        type="tel" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option>Select a service</option>
                                        <option>Custom Homes & Additions</option>
                                        <option>Kitchens & Baths</option>
                                        <option>Exterior Renovations</option>
                                        <option>Decks & Outdoor Living</option>
                                        <option>Interior Remodeling</option>
                                        <option>Light Commercial</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea 
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <button className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-black mb-3">Phone</h3>
                                    <p className="text-gray-700 text-lg">(260) 555-0123</p>
                                    <p className="text-gray-600 text-sm">Mon-Fri: 8:00 AM - 6:00 PM</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-black mb-3">Email</h3>
                                    <p className="text-gray-700 text-lg">info@fourseasonsdesign.com</p>
                                    <p className="text-gray-600 text-sm">We&apos;ll respond within 24 hours</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-black mb-3">Service Areas</h3>
                                    <p className="text-gray-700 text-lg">Northeast Indiana</p>
                                    <p className="text-gray-600 text-sm">
                                        Fort Wayne, South Bend, Goshen, Warsaw, Plymouth, 
                                        Columbia City, Auburn, Three Rivers, and surrounding areas
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-black mb-3">Office Hours</h3>
                                    <div className="text-gray-700">
                                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                                        <p>Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white py-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg mb-6 text-blue-100">
                        Schedule a free consultation and let&apos;s discuss your project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                            Call Now
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
                            Request Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}