import React from 'react'
import directus from '@/app/lib/directus'
import { readItems, readFields, rest, createDirectus } from '@directus/sdk'
import Image from 'next/image'
import Link from 'next/link'


async function getBlogPosts() {
    return directus.request(readItems('Blog'))
}

export default async function Blog() {
    const blogPosts = await getBlogPosts()
    console.log(blogPosts)
    
    // Function to format date to human readable format
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
    
    // Function to get first 20 characters of content
    const getContentSnippet = (content) => {
        return content ? content.substring(0, 20) + '...' : 'No content available'
    }
    
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
                    <p className="text-xl text-gray-600">Insights and updates from our team</p>
                </div>
                
                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 gap-8">
                    {blogPosts.map((post, index) => (
                        <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            {/* Mobile: Stack image over text, Desktop: Side by side */}
                            <div className="flex flex-col lg:flex-row">
                                {/* Blog Image */}
                                <div className="lg:w-1/3">
                                    <div className="relative h-48 lg:h-full lg:min-h-[200px] w-full">
                                        <img
                                            src={`/api/image/${post.Blog_Image}`}
                                            alt={post.Title || 'Blog Image'}
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                
                                {/* Blog Content */}
                                <div className="lg:w-2/3 p-6">
                                    {/* Date */}
                                    <div className="text-sm text-gray-500 mb-2">
                                        {formatDate(post.date_created)}
                                    </div>
                                    
                                    {/* Title */}
                                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                        {post.Title || 'Untitled Post'}
                                    </h2>
                                    
                                    {/* Content Snippet */}
                                    <p className="text-gray-600 text-sm mb-4">
                                        {getContentSnippet(post.Blog_Content)}
                                    </p>
                                    
                                    {/* Read More Button */}
                                    <Link href={`/Blog/${post.id}`}>
                                        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                                            Read More →
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                
                {/* Empty State */}
                {blogPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No blog posts available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
