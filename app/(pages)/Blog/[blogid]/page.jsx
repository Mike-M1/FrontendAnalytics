import React from 'react'
import directus from '@/app/lib/directus'
import { readItems } from '@directus/sdk'
import Link from 'next/link'
import Image from 'next/image'

async function getBlogPost(id) {
    try {
        const posts = await directus.request(readItems('Blog', {
            filter: {
                id: {
                    _eq: id
                }
            }
        }))
        return posts[0] || null
    } catch (error) {
        console.error('Error fetching blog post:', error)
        return null
    }
}

export default async function BlogPost({ params }) {
    const post = await getBlogPost(params.blogid)
    
    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                    <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
                    <Link href="/Blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        Back to Blog
                    </Link>
                </div>
            </div>
        )
    }
    
    // Function to format date to human readable format
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
    
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header with Back Button */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <Link href="/Blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </Link>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Article Header */}
                <header className="mb-12">
                    {/* Date */}
                    <div className="text-sm text-gray-500 mb-4">
                        {formatDate(post.date_created)}
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {post.Title || 'Untitled Post'}
                    </h1>
                    
                    {/* Featured Image */}
                    {post.Blog_Image && (
                        <div className="relative h-64 lg:h-96 w-full mb-8 rounded-lg overflow-hidden">
                            <img
                                src={`/api/image/${post.Blog_Image}`}
                                alt={post.Title || 'Blog Image'}
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </header>
                
                {/* Article Content */}
                <article className="prose prose-lg max-w-none">
                    <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
                        {post.Blog_Content ? (
                            <div 
                                className="text-gray-700 leading-relaxed whitespace-pre-wrap"
                                dangerouslySetInnerHTML={{ __html: post.Blog_Content }}
                            />
                        ) : (
                            <p className="text-gray-500 italic">No content available for this post.</p>
                        )}
                    </div>
                </article>
                
                {/* Footer Actions */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <Link href="/Blog" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                            ← All Posts
                        </Link>
                        
                        <div className="flex gap-3">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                Share Post
                            </button>
                            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                                Print
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
