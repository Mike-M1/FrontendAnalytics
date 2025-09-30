"use client"

import React, { useState } from 'react';

export default function MobileBottomSec() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        notes: ''
    });

    const [errors, setErrors] = useState({});

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.notes.trim()) newErrors.notes = 'Project description is required';

        setErrors(newErrors);

        // If no errors, submit form
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            // Here you would typically send the data to your backend
            alert('Thank you! We will contact you soon.');
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Two-column layout */}
            <div className="flex flex-col lg:flex-row min-h-screen">
                
                {/* Left Section - Contact Form */}
                <div className="lg:w-1/2 bg-black p-8 lg:p-12 flex flex-col justify-center">
                    {/* Logo */}
                   <img src="/fsl.png" alt="logo" className="w-[200px] mx-auto" />

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                        {/* Name Field */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Name*
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="First & Last Name"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            {errors.name && (
                                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Primary Phone Number*
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            {errors.phone && (
                                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Email*
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Address Field */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Address*
                            </label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows="3"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                            />
                            {errors.address && (
                                <p className="text-red-400 text-sm mt-1">{errors.address}</p>
                            )}
                        </div>

                        {/* Notes Field */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Notes*
                            </label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Description of Project"
                                rows="4"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                            />
                            {errors.notes && (
                                <p className="text-red-400 text-sm mt-1">{errors.notes}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Right Section - Contact Information */}
                <div className="lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center">
                    {/* Contact Heading */}
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8">
                        Contact
                    </h2>

                    {/* Contact Details */}
                    <div className="space-y-6 mb-8">
                        {/* Phone */}
                        <div>
                            <a 
                                href="tel:260-665-2772" 
                                className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                260-665-2772
                            </a>
                        </div>

                        {/* Email */}
                        <div>
                            <a 
                                href="mailto:office@fourseasonsdr.com" 
                                className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                office@fourseasonsdr.com
                            </a>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <span className="text-white font-bold">f</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-green-600 rounded flex items-center justify-center hover:bg-green-700 transition-colors">
                                <span className="text-white font-bold text-sm">in</span>
                            </a>
                        </div>

                        {/* Address */}
                        <div className="text-lg text-black">
                            <p>201 W Harcourt Road</p>
                            <p>Angola, IN 46703</p>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.1234567890!2d-85.000000!3d41.600000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM2JzAwLjAiTiA4NcKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Four Seasons Design & Remodeling Location"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
