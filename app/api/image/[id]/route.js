import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const response = await fetch(`http://44.222.202.60:8055/assets/${params.id}`)
    const buffer = await response.arrayBuffer()
    console.log("buffer", buffer)
    return new NextResponse(buffer, {
        headers: {
            'Content-Type': response.headers.get('Content-Type')
        }
    })
}
