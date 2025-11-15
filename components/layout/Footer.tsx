import FooterContainer from "@/components/layout/footer/FooterContainer";
import {Button} from "@/components/ui/button";

import Image from "next/image";
import FooterLink from "@/components/layout/footer/FooterLink";
import {PlayCircle} from "@untitledui/icons";

function Footer() {
    return (
        <footer className="bg-[#0C0E12] flex flex-col items-center gap-12 py-12 z-50">
            <FooterContainer>
                <div className="w-full border-b border-[#22262F] flex flex-col gap-8 pb-8 text-center">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-2xl xl:text-3xl text-[#F7F7F7]">
                            No long-term contracts. No catches. Simple.
                        </h3>
                        <p className="font-normal text-md xl:text-lg text-[#94979C]">
                            Start your 30-day free trial. Cancel anytime.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 w-full md:flex-row md:flex-row-reverse md:justify-center">
                        <Button variant="primaryDark" size="xl">Get started</Button>
                        <Button variant="secondaryGrayDark" size="xl"><PlayCircle size={16} color="#CECFD2"/>View demo</Button>
                    </div>
                </div>
            </FooterContainer>

            <FooterContainer>
                <div className="flex flex-col gap-8 flex-grow w-full">
                    <div className=" flex flex-col gap-8">
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-2.5">
                                <div className="relative bg-[#0A0D12] w-[32px] h-[32px] rounded-md">
                                    <Image
                                        src="/images/logo.png"
                                        alt="logo"
                                        fill
                                        className="object-contain rounded-md"
                                    />
                                </div>

                                <div className="flex items-center justify-center">
                                    <h1 className="text-lg text-white font-bold whitespace-nowrap">
                                        Untitled UI
                                    </h1>
                                </div>
                            </div>
                            <p className="max-w-[300px]">
                                Design amazing digital experiences that create more happy in the world.
                            </p>
                        </div>
                    </div>

                    <div className=" flex gap-8 hidden md:flex">
                        <FooterLink>
                            Overview
                        </FooterLink>
                        <FooterLink>
                            Features
                        </FooterLink>
                        <FooterLink>
                            Pricing
                        </FooterLink>
                        <FooterLink>
                            Careers
                        </FooterLink>
                        <FooterLink>
                            Help
                        </FooterLink>
                        <FooterLink>
                            Privacy
                        </FooterLink>
                    </div>
                </div>

                <div className="flex flex-col gap-4 hidden md:flex">
                    <h4 className="font-medium text-[#CECFD2]">Get the app</h4>
                    <div className="flex flex-col gap-4 ">
                        <div className="relative w-[135px] h-[40px]">
                            <Image src="/images/footer/appstore.svg" fill alt="appstore"/>
                        </div>
                        <div className="relative w-[135px] h-[40px]">
                            <Image src="/images/footer/playstore.svg" fill alt="playstore"/>
                        </div>
                    </div>
                </div>

                <div className="w-full flex gap-8 md:hidden">
                    <div className="flex flex-col gap-4 w-full ">
                        <div className="flex flex-col gap-3">
                            <FooterLink>
                                Overview
                            </FooterLink>
                            <FooterLink>
                                Features
                            </FooterLink>
                            <FooterLink>
                                Pricing
                            </FooterLink>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col gap-3">
                            <FooterLink>
                                Careers
                            </FooterLink>
                            <FooterLink>
                                Help
                            </FooterLink>
                            <FooterLink>
                                Privacy
                            </FooterLink>
                        </div>
                    </div>
                </div>
            </FooterContainer>

            <FooterContainer>
                <div className="flex flex-col gap-4 md:hidden">
                    <h4 className="font-medium text-[#CECFD2]">Get the app</h4>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="relative w-[135px] h-[40px]">
                            <Image src="/images/footer/appstore.svg" fill alt="appstore"/>
                        </div>
                        <div className="relative w-[135px] h-[40px]">
                            <Image src="/images/footer/playstore.svg" fill alt="playstore"/>
                        </div>
                    </div>
                </div>
            </FooterContainer>

            <FooterContainer>
                <div className="w-full flex flex-col md:flex-row md:justify-between md:flex-row-reverse gap-6 border-t border-[#22262F] pt-8">
                    <div className="flex gap-6">
                        <div className="w-6 h-6 relative">
                            <Image src="/images/footer/social/x.svg" alt="X icon" fill></Image>
                        </div>
                        <div className="w-6 h-6 relative">
                            <Image src="/images/footer/social/linkedin.svg" alt="linkedin icon" fill></Image>
                        </div>
                        <div className="w-6 h-6 relative">
                            <Image src="/images/footer/social/facebook.svg" alt="facebook icon" fill></Image>
                        </div>
                        <div className="w-6 h-6 relative">
                            <Image src="/images/footer/social/github.svg" alt="github icon" fill></Image>
                        </div>
                        <div className="w-6 h-6 relative">
                            <Image src="/images/footer/social/hand.svg" alt="hand icon" fill></Image>
                        </div>
                        <div className="w-6 h-6 relative">
                            <Image src="/images/footer/social/ball.svg" alt="ball icon" fill></Image>
                        </div>
                        <div className="w-6 h-6 relative">
                            <Image src="/images/footer/social/layer.svg" alt="layer icon" fill></Image>
                        </div>
                    </div>
                    <span className="text-[#94979C]">© 2077 Untitled UI. All rights reserved.</span>
                </div>
            </FooterContainer>
        </footer>
    );
}

export default Footer;