import { NextResponse } from "next/server";
import directus from '@/app/lib/directus'
import { readItems } from '@directus/sdk'

export async function GET() {
    try {
        const posts = await directus.request(readItems('Blog', {
            limit: 4, // Only get 4 posts for the mobile section
            sort: ['-date_created'] // Sort by newest first
        }))
        
        return NextResponse.json(posts || [])
    } catch (error) {
        console.error('Error fetching blog posts:', error)
        return NextResponse.json([], { status: 500 })
    }
}
