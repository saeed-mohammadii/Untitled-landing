import HeroSection from "@/components/app/home/HeroSection";
import Features from "@/components/app/home/Features";
import Pricing from "@/components/app/home/Pricing";
import Testimonial from "@/components/app/home/Testimonial";
import SocialProof from "@/components/app/home/SocialProof";
import Cta from "@/components/app/home/Cta";

function Main() {
    return (
        <>
            <HeroSection/>
            <Features/>
            <Pricing/>
            <Testimonial/>
            <SocialProof/>
            <Cta/>
        </>
    );
}

export default Main;