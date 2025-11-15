"use client"

import { useState } from "react"
import NavLink from "@/components/ui/navLink"
import ChevronDownIcon from "@/components/icons/ChevronDownIcon"
import MenuIcon from "@/components/icons/MenuIcon"
import XIcon from "@/components/icons/XIcon";
import {Button} from "@/components/ui/button";
import Image from "next/image";

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    function handleOpen() {
        setIsOpen((prev) => !prev)
    }

// className="flex items-center justify-between w-full gap-8 flex-wrap"
    // <nav className="container mx-auto px-4 flex items-center justify-between gap-8 flex-wrap">
    // <nav className="w-full max-w-[379px] md:container mx-auto px-4 flex items-center justify-between gap-8 flex-wrap">

    return (
        <header className="fixed bg-white top-0 left-0 w-full py-2.5 xl:py-3.5  z-50 ">
            <div className="max-w-[379px] mx-auto px-4 xl:px-8 md:container">
                <nav
                    className="w-full flex items-center justify-between gap-8 flex-wrap">


                    <div className="flex justify-between gap-8">
                        <div className="flex gap-1">
                            <div className="relative w-[32px] h-[32px] rounded-md">
                                <Image
                                    src="/images/logo.png"
                                    alt="logo"
                                    fill
                                    className="object-contain rounded-md"
                                />
                            </div>

                            <div className="flex items-center justify-center">
                                <h1 className="text-lg text-[#181D27] font-bold whitespace-nowrap">
                                    Untitled UI
                                </h1>
                            </div>
                        </div>


                        <ul className="hidden lg:flex items-center gap-[20px]">
                            <NavLink label="Products" icon={<ChevronDownIcon/>}/>
                            <NavLink label="Services" icon={<ChevronDownIcon/>}/>
                            <NavLink label="Pricing"/>
                            <NavLink label="Resources" icon={<ChevronDownIcon/>}/>
                            <NavLink label="About"/>
                        </ul>
                    </div>

                    <div className="hidden lg:flex items-center gap-[6px]">
                        <Button variant="secondaryGray" size="lg">Log in</Button>
                        <Button variant="primary" size="lg">Sign up</Button>
                    </div>
                    <button
                        onClick={handleOpen}
                        className="bg-[#fff] border-0 w-[24] h[24] lg:hidden"
                    >
                        {!isOpen ? <MenuIcon/> : <XIcon/>}
                    </button>
                </nav>
            </div>


            {isOpen && (
                <ul className="flex flex-col list-none lg:hidden border-t border-gray-200 z-40 bg-white">
                    <NavLink label="Products" icon={<ChevronDownIcon/>}/>
                    <NavLink label="Services" icon={<ChevronDownIcon/>}/>
                    <NavLink label="Pricing"/>
                    <NavLink label="Resources" icon={<ChevronDownIcon/>}/>
                    <NavLink label="About"/>
                    <NavLink label="Login"/>
                    <NavLink label="Signup" textColor="#FFF" bgColor="#7F56D9"/>
                </ul>
            )}
        </header>
    )
}

export default Header
