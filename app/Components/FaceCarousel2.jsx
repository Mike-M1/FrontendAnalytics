"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const images = [
   {photo:'/guide1.jpg', testimonial:'    “They just completed a total kitchen / dining room renovation on a 55 year old home.  They told us 6-8 weeks and were done in 7.  They quoted us an estimate, and with 6 additions on our part, still came in less than 1% of quoted price.  The quality is tremendous.  The attention to detail fantastic.  It\'s a quality company with dedicated employees."', person: 'Roy Meyer'},
   {photo:'/guide2.jpeg', testimonial:'    "These people really care which is something hard to find these days."', person: 'Carl Renner'},
   {photo:'/guide3.jpg', testimonial:'    "I cannot express the gratitude my wife and I have for Four Seasons.  They completed the roof and it was done to perfection.  The crew was clean, professional, and, most importantly, my wife felt comfortable around them.  They will be our first call for any project we may have!  Thanks again for everything!"', person: 'Zach Ritchie'},
   {photo:'/guide4.jpg', testimonial:'    “A year ago we kicked off an addition and whole home remodel project with Four Seasons.  Our timing was fairly compressed as we wanted to be back in our home by the start of summer.  The work was done well and any and all concerns were addressed quickly as we went through the project.  It has been six months since we moved in and we have not been disappointed with any aspect of the project.  We are happy in our new home and we would highly recommend Four Seasons."', person: 'Ed Kopkowski'},


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
                src={images[index].photo}
                alt={`Image ${index + 1}`} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover object-center absolute" />
            </AnimatePresence>
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 max-w-md mx-4 text-center">
                    <p className="text-white text-sm mb-3 leading-relaxed">
                        {images[index].testimonial.length > 200 
                            ? images[index].testimonial.substring(0, 200) + "..."
                            : images[index].testimonial
                        }
                    </p>
                    {images[index].testimonial.length > 200 && (
                        <button className="text-white/80 text-xs underline hover:text-white transition-colors mb-2">
                            Full Testimonial
                        </button>
                    )}
                    <p className="text-white font-semibold text-sm">
                        - {images[index].person}
                    </p>
                </div>
            </div>
        </div>
    )
}