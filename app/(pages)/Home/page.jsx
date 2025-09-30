"use client"
import { useState, useEffect } from 'react';
import MobileHeaderSection from "./Mobile/Sections/HeaderSection";
import MobileStakes from "./Mobile/Sections/Stakes";
import MobileGuide from "./Mobile/Sections/Guide";
import MobileGuide2 from "./Mobile/Sections/Guide2";
import MobilePlan from "./Mobile/Sections/Plan";
import MobileExPara from "./Mobile/Sections/ExPara";
import MobileJunkDrawer from "./Mobile/Sections/JunkDrawer";
import MobileServices from "./Mobile/Sections/Services";
import MobileExtra1 from "./Mobile/Sections/Extra1";
import MobileBottomSec from "./Mobile/Sections/BottomSec";

import DesktopHeaderSection from "./Desktop/Sections/HeaderSection";
import DesktopStakes from "./Desktop/Sections/Stakes";
import DesktopGuide from "./Desktop/Sections/Guide";
import DesktopGuide2 from "./Desktop/Sections/Guide2";
import DesktopPlan from "./Desktop/Sections/Plan";
import DesktopExPara from "./Desktop/Sections/ExPara";
import DesktopJunkDrawer from "./Desktop/Sections/JunkDrawer";
import DesktopServices from "./Desktop/Sections/Services";
import DesktopExtra1 from "./Desktop/Sections/Extra1";

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        // Check on mount
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup event listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className="min-h-screen flex flex-col h-fit bg-white">
            {/* Main Content */}
            {isMobile ? (
                // Mobile Components
                <>
                    <MobileHeaderSection />
                    <MobileStakes />
                    <MobileGuide />
                    <MobileGuide2 />
                    <MobilePlan />
                    <MobileExPara />
                    <MobileJunkDrawer />
                    <MobileServices />
                    <MobileExtra1/>
                    <MobileBottomSec />
                </>
            ) : (
                // Desktop Components
                <>
                    <DesktopHeaderSection />
                    <DesktopStakes />
                    <MobileGuide />
                    <MobileGuide2 />
                    <MobilePlan />
                    <MobileExPara />
                    <DesktopJunkDrawer />
                    <MobileServices />
                    <MobileExtra1/>
                    <MobileBottomSec />
                </>
            )}
        </div>
    )
}