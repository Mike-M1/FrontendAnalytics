"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const images = [
    '/bathroom.jpg',
    '/kitchen.jpeg',
    '/house.jpg',
    '/porch.jpeg'
]

export default function FadeCarousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="relative h-96 lg:h-screen w-full overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
                <motion.img 
                key={images[index]}
                src={images[index]}
                alt={`Image ${index + 1}`} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover absolute" />
            </AnimatePresence>
        </div>
    )
}