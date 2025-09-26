"use client"
import HeaderSection from "./Sections/HeaderSection";
import Stakes from "./Sections/Stakes";
import Guide from "./Sections/Guide";
import Guide2 from "./Sections/Guide2";
import Plan from "./Sections/Plan";
import ExPara from "./Sections/ExPara";
import JunkDrawer from "./Sections/JunkDrawer";
import Services from "./Sections/Services";
import Extra1 from "./Sections/Extra1";

export default function Home() {
    return (
        
        <div className="min-h-screen bg-white">
            {/* Main Content */}
            <HeaderSection />
            <Stakes />
            <Guide />
            <Guide2 />
            <Plan />
            <ExPara />
            <JunkDrawer />
            <Services />
            <Extra1/>
        </div>
    )
}