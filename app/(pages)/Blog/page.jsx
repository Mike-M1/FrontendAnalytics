import React from 'react'

export default function Blog() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        Our Blog
                    </h1>
                    <p className="text-xl text-gray-300">
                        Design inspiration, remodeling tips, and project showcases.
                    </p>
                </div>
            </div>

            {/* Blog Posts */}
            <div className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Blog Post 1 */}
                        <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                <span className="text-6xl">🏠</span>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">March 15, 2024</div>
                                <h2 className="text-xl font-bold text-black mb-3">10 Kitchen Design Trends for 2024</h2>
                                <p className="text-gray-700 mb-4">
                                    Discover the latest kitchen design trends that are transforming homes this year, 
                                    from smart appliances to sustainable materials.
                                </p>
                                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">Read More →</a>
                            </div>
                        </article>

                        {/* Blog Post 2 */}
                        <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                                <span className="text-6xl">🌱</span>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">March 10, 2024</div>
                                <h2 className="text-xl font-bold text-black mb-3">Sustainable Remodeling: Eco-Friendly Choices</h2>
                                <p className="text-gray-700 mb-4">
                                    Learn how to make environmentally conscious decisions during your home renovation 
                                    without compromising on style or quality.
                                </p>
                                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">Read More →</a>
                            </div>
                        </article>

                        {/* Blog Post 3 */}
                        <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                                <span className="text-6xl">🚿</span>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">March 5, 2024</div>
                                <h2 className="text-xl font-bold text-black mb-3">Bathroom Renovation: Before & After</h2>
                                <p className="text-gray-700 mb-4">
                                    See how we transformed a dated 1980s bathroom into a modern spa-like retreat 
                                    with smart storage solutions and elegant finishes.
                                </p>
                                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">Read More →</a>
                            </div>
                        </article>

                        {/* Blog Post 4 */}
                        <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                                <span className="text-6xl">🌅</span>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">February 28, 2024</div>
                                <h2 className="text-xl font-bold text-black mb-3">Creating the Perfect Outdoor Living Space</h2>
                                <p className="text-gray-700 mb-4">
                                    Tips for designing an outdoor area that extends your living space and provides 
                                    year-round enjoyment for your family.
                                </p>
                                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">Read More →</a>
                            </div>
                        </article>

                        {/* Blog Post 5 */}
                        <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                                <span className="text-6xl">💡</span>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">February 20, 2024</div>
                                <h2 className="text-xl font-bold text-black mb-3">Lighting Design: Illuminating Your Space</h2>
                                <p className="text-gray-700 mb-4">
                                    Master the art of lighting design to create ambiance, improve functionality, 
                                    and highlight your home&apos;s best features.
                                </p>
                                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">Read More →</a>
                            </div>
                        </article>

                        {/* Blog Post 6 */}
                        <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                                <span className="text-6xl">🏡</span>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">February 15, 2024</div>
                                <h2 className="text-xl font-bold text-black mb-3">Curb Appeal Makeover: Exterior Updates</h2>
                                <p className="text-gray-700 mb-4">
                                    Simple exterior improvements that can dramatically increase your home&apos;s 
                                    curb appeal and market value.
                                </p>
                                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">Read More →</a>
                            </div>
                        </article>
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Load More Posts
                        </button>
                    </div>
                </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-50 py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-black mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Subscribe to our newsletter for the latest design tips, project showcases, and remodeling insights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
