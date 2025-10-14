'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MobileExtra1() {
    const [blogPosts, setBlogPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getBlogPosts() {
            try {
                const response = await fetch('/api/blog')
                const posts = await response.json()
                console.log(posts)
                setBlogPosts(posts || [])
            } catch (error) {
                console.error('Error fetching blog posts:', error)
                setBlogPosts([])
            } finally {
                setIsLoading(false)
            }
        }
        
        getBlogPosts()
    }, [])
    
    // Function to format date to human readable format
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        })
    }
    
    // Function to get first 30 characters of content
    const getContentSnippet = (content) => {
        return content ? content.substring(0, 30) + '...' : 'No content available'
    }
    return (
        <div className="flex flex-col lg:flex-row">
            {/* Left Section - Company Values (White Background) */}
            <div className="lg:w-1/2 bg-white p-6 lg:p-12">
                <div className="max-w-lg mx-auto">
                    {/* Main Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-red-600 mb-8">
                        What We Believe,<br />
                        How We Strive to Be
                    </h2>
                    
                    {/* Introductory Paragraph */}
                    <p className="text-xl text-black mb-12">
                        We remodel and build to help people live more fully.
                    </p>
                    
                    {/* Core Values List */}
                    <div className="space-y-8">
                        {/* Value 1 */}
                        <div>
                            <h3 className="text-lg font-bold text-black mb-2">
                                Make Our Best Better
                            </h3>
                            <p className="text-black leading-relaxed">
                                We will always do the best that we can and know to do. We will always strive to increase our knowledge, competencies, and efficiencies. We will not make the same mistake repeatedly.
                            </p>
                        </div>
                        
                        {/* Value 2 */}
                        <div>
                            <h3 className="text-lg font-bold text-black mb-2">
                                Embody Integrity
                            </h3>
                            <p className="text-black leading-relaxed">
                                We will do what we say we will do. We will be who we say we are.
                            </p>
                        </div>
                        
                        {/* Value 3 */}
                        <div>
                            <h3 className="text-lg font-bold text-black mb-2">
                                Own Our Actions
                            </h3>
                            <p className="text-black leading-relaxed">
                                We will own our choices and actions. We will be accountable to God. We will be accountable to ourselves. We will be accountable to our processes.
                            </p>
                        </div>
                        
                        {/* Value 4 */}
                        <div>
                            <h3 className="text-lg font-bold text-black mb-2">
                                Have a Positive Impact
                            </h3>
                            <p className="text-black leading-relaxed">
                                We will vigilantly look for ways to positively affect others. We will be kind. We will help each other. We will help others.
                            </p>
                        </div>
                        
                        {/* Value 5 */}
                        <div>
                            <h3 className="text-lg font-bold text-black mb-2">
                                Always Be Thankful
                            </h3>
                            <p className="text-black leading-relaxed">
                                There is always something to be thankful for. We will be grateful for our teammates and their efforts. We will be grateful for our opportunities. We will be grateful for our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Blog Section (Black Background) */}
            <div className="lg:w-1/2 bg-black text-white p-6 lg:p-12">
                <div className="max-w-lg mx-auto">
                    {/* Section Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
                        Follow Along
                    </h2>
                    
                    {/* Blog Post Previews */}
                    <div className="space-y-4 mb-8 flex flex-col gap-4 items-center justify-center">
                        {isLoading ? (
                            // Loading skeleton
                            <div className="space-y-4 flex flex-col gap-4 items-center justify-center">
                                {[...Array(4)].map((_, index) => (
                                    <div key={index} className="bg-white text-black p-4 rounded-lg animate-pulse">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1 min-w-0">
                                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                                <div className="h-3 bg-gray-200 rounded w-16 mb-2"></div>
                                                <div className="h-3 bg-gray-200 rounded w-24"></div>
                                            </div>
                                            <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : blogPosts.length > 0 ? (
                            blogPosts.map((post, index) => (
                                <Link key={index} href={`/Blog/${post.id}`} className="block w-full">
                                    <div className="bg-white text-black p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 w-full">
                                        <div className="flex items-start justify-between gap-3 w-full">
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-base font-semibold mb-1 line-clamp-2">
                                                    {post.Title || 'Untitled Post'}
                                                </h3>
                                                <p className="text-xs text-gray-600 mb-2">
                                                    {formatDate(post.date_created)}
                                                </p>
                                                <p className="text-xs text-gray-500 line-clamp-2">
                                                    {getContentSnippet(post.Blog_Content)}
                                                </p>
                                            </div>
                                            <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center flex-shrink-0">
                                                {post.Blog_Image ? (
                                                    <img
                                                        src={`/api/image/${post.Blog_Image}`}
                                                        alt={post.Title || 'Blog Image'}
                                                        width={100}
                                                        height={100}
                                                        className="w-full h-full object-cover rounded"
                                                    />
                                                ) : (
                                                    <div className="text-lg">🏠</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="bg-white text-black p-4 rounded-lg">
                                <p className="text-sm text-gray-500">No blog posts available at the moment.</p>
                            </div>
                        )}
                    </div>
                    
                    {/* Call to Action Button */}
                    <Link href="/Blog" className="block">
                        <button className="bg-white text-black border border-black px-6 py-3 rounded hover:bg-gray-100 transition-colors duration-200 w-full">
                            View All Posts →
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
