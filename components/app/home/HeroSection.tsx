import {Button} from "@/components/ui/button";
import {PlayCircle} from "@untitledui/icons";
import Image from "next/image";
import NewBadge from "@/components/ui/newBadge";


function HeroSection() {
    return (
        <section className="py-16 max-w-[379px]  md:container mx-auto px-4 xl:px-8">
            <div className="w-full flex flex-col gap-8 items-center md:flex-row md:justify-between">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="gap-4 flex flex-col">
                            <NewBadge/>
                            <p className="font-semibold text-4xl xl:text-6xl text[#181D27]">
                                Smart business credit cards
                            </p>
                        </div>
                        <p className="font-normal text-lg text-[#535862] md:hidden">
                            Mo money, no problems. Untitled is a next-generation financial technology company
                            in the process of reinventing banking. 30-day free trial.
                        </p>

                        <p className="text-xl text-[#535862] hidden md:block max-w-[480px]">
                            Untitled is a next-gen financial technology company in the process of reinventing banking.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:flex-row">
                        <Button variant="secondaryGray" size="xl"><PlayCircle size={24} color="#414651"/>Demo</Button>
                        <Button variant="primary" size="xl">Sign up</Button>
                    </div>
                </div>




                <div className="relative w-full max-w-[592px] aspect-[592/560] bg-[#F5F5F5] rounded-2xl">
                    <Image src="/images/card.svg" alt="Hero image" fill className="object-contain"/>
                </div>




            </div>
        </section>
    );
}

export default HeroSection;