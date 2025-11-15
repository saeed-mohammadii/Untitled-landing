import {Button} from "@/components/ui/button";
import PricingFeature from "@/components/app/pricing/PricingFeature";
import Image from "next/image";

function Cta() {
    return (

        <section className="overflow-hidden pb-16 md:pb-24">


            <div
                className="max-w-[379px] mx-auto px-4 xl:px-8 md:container grid grid-cols-1 grid-rows-2 gap-16 md:grid-cols-2 md:grid-rows-1">

                <div className="self-center md:py-[100px]">
                    <div className="flex flex-col gap-12 ">
                        <div className="flex flex-col gap-8 ">
                            <h3 className="font-semibold text-3xl xl:text-5xl text-[#181D27] leading-tight">Get started in 5 minutes</h3>
                            <div className="flex flex-col gap-5">
                                <PricingFeature>
                                 <span className="text-lg leading-7"> 30-day free trial</span>

                                </PricingFeature>
                                <PricingFeature>
                                    <span className="text-lg leading-7">Personalized onboarding</span>

                                </PricingFeature>
                                <PricingFeature>
                                    <span className="text-lg leading-7">  Access to all features</span>

                                </PricingFeature>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:flex-row-reverse md:justify-end gap-3">
                            <Button variant="primary" size="xl">Get started</Button>
                            <Button variant="secondaryGray" size="xl">Learn more</Button>
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center">
                    <div className="bg-white p-[1.13px] xl:p-[3.37px] border-[0.56px] xl:border-[1.68px] border-[#D5D7DA] rounded-[9.03px] xl:rounded-[26.95px]
                                    shadow-[0_2px_2px_-1px_rgba(10,13,18,0.03),0_4px_6px_-2px_rgba(10,13,18,0.02)]
                                    w-full max-w-[1017px] aspect-[1017/680] mx-auto xl:w-[1024px] xl:h-[687px] absolute"
                    >

                        <div
                            className="rounded-[7.9px] xl:rounded-[23.58px] p-[1.13px] xl:p-[3.37px] shadow-[inset_0_0_1.13px_0.56px_rgba(10,13,18,0.03),inset_0_0_1.69px_0.56px_rgba(10,13,18,0.02)] ">

                            <div
                                className="bg-[#FAFAFA] border-[0.56px] xl:border-[1.68px] border-[#E9EAEB] rounded-[6.77px] xl:rounded-[20.21px] w-full aspect-[338/225] relative ">
                                <Image src="/images/chart.jpg" alt="chart" fill className=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;
