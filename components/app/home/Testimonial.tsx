"use client"

import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react'
import {Button} from "@/components/ui/button";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Image from "next/image";
import Slide from "@/components/ui/slide";

function Testimonial() {



    const [sliderRef, instanceRef] = useKeenSlider({
        loop: false,
        slides: {
            // origin: -0.1,
            perView: 1.2,
            spacing: 24
        },
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 2.2, spacing: 32 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 2.8, spacing: 32},
            },
            "(min-width: 1280px)": {
                slides: { perView: 3.4, spacing: 32},
            },
        },
    })


    return (
        <section className="py-16 flex flex-col gap-16">

                <div className="max-w-[379px] mx-auto px-4 xl:px-8 md:container">
                    <div className="w-full flex flex-col md:flex-row md:justify-between gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-3xl xl:text-4xl text-[#181D27]">Don’t just take our word for it</h3>
                            <p className="font-normal text-lg xl:text-xl text-[#535862]">
                                Hear from some of our amazing customers
                                who
                                are automating their finances.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row md:flex-row-reverse gap-3">
                            <Button variant="primary" size="xl">Create account</Button>
                            <Button variant="secondaryGray" size="xl">Our customers</Button>
                        </div>
                    </div>
                </div>

                <div className="max-w-[379px] mx-auto px-4 xl:px-8 md:container">
                    <div className="w-full flex flex-col gap-8">
                        <div ref={sliderRef} className="keen-slider flex ">
                            <Slide name="Alisa Hester" company="PM, Hourglass" position="Web Design Agency">
                                <Image
                                    src="/images/testimonial/alisa.jpg"
                                    alt="customer picture"
                                    fill
                                    className="object-cover"
                                />
                            </Slide>
                            <Slide name="Rich Wilson" company="COO, Command+R " position="Web Development Agency" quote={true}>
                                <Image
                                    src="/images/testimonial/rich.jpg"
                                    alt="customer picture"
                                    fill
                                    className="object-cover"
                                />
                            </Slide>
                            <Slide name="Aney Stanley" company="Designer, Catalog " position="UX Agency">
                                <Image
                                    src="/images/testimonial/anie.jpg"
                                    alt="customer picture"
                                    fill
                                    className="object-cover"
                                />
                            </Slide>
                            <Slide name="Johnny Bell" company="PM, Sisyphus " position="Machine Learning">
                                <Image
                                    src="/images/testimonial/johnny.jpg"
                                    alt="customer picture"
                                    fill
                                    className="object-cover"
                                />
                            </Slide>
                            <Slide name="Mia Ward" company="Fullstack Dev, Quotient " position="Performance Marketing">
                                <Image
                                    src="/images/testimonial/mia.jpg"
                                    alt="customer picture"
                                    fill
                                    className="object-cover"
                                />
                            </Slide>
                            <Slide name="Archie Young" company="Marketing, Layers " position="Machine Learning">
                                <Image
                                    src="/images/testimonial/archie.jpg"
                                    alt="customer picture"
                                    fill
                                    className="object-cover"
                                />
                            </Slide>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 border border-[#E9EAEB] rounded-full flex justify-center items-center" onClick={() => instanceRef.current?.prev()}>
                                <ArrowLeftIcon size={20}/>
                            </div>
                            <div className="w-12 h-12 border border-[#E9EAEB] rounded-full flex justify-center items-center" onClick={() => instanceRef.current?.next()}>
                                <ArrowRightIcon size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Testimonial;