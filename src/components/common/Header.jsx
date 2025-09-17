"use client";
import { NAV_LINKS } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cta from "../common/Cta";

const Header = () => {
    const [nav, setNav] = useState(false);
    const toggleMenu = () => {
        setNav(!nav);
    };
    useEffect(() => {
        if (nav) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "auto";
        }
    }, [nav]);

    return (
        <div className="py-1 bg-white">
            <div className="container mx-auto px-5">
                <div className="flex items-center justify-between md:pt-16 pt-7">
                    <Link href="/">
                        <Image
                            width={261}
                            height={97}
                            src="/assets/images/png/logo.png"
                            alt="logo"
                            className="max-xl:max-w-[170px] xl:h-[97px]"
                        />
                    </Link>
                    <div className="flex items-center gap-10">
                        <div
                            className={`${nav ? "left-0" : "-left-full"
                                } flex lg:flex-row flex-col items-center justify-center max-lg:bg-white max-lg:min-h-screen max-lg:fixed top-0 bottom-0 max-lg:h-full max-lg:w-full z-40 transition-all ease-linear duration-300 xl:gap-[17px] gap-2`}
                        >
                            {NAV_LINKS.map((obj, index) => (
                                <Link
                                    onClick={toggleMenu}
                                    className="capitalize font-normal xl:text-custom-2xl text-lg tracking-wider  text-black relative after:absolute after:w-0 after:h-[1px] after:-bottom-1 after:start-1/2 after:-translate-x-1/2 after:bg-black hover:after:w-full after:duration-300 "
                                    href={obj.url}
                                    key={index}
                                >
                                    {obj.title}
                                </Link>
                            ))}

                            <Cta className="!flex lg:!hidden">Downlaod CV</Cta>
                        </div>
                        <Cta className="lg:!flex whitespace-nowrap max-xl:px-6 max-xl:py-2 !hidden">Downlaod CV</Cta>
                        <div
                            onClick={toggleMenu}
                            className="lg:hidden w-[28px] h-[20px] relative z-50 flex justify-between flex-col"
                        >
                            <span
                                className={`${nav ? "rotate-[50deg] translate-y-[14px]" : ""
                                    } bg-orange transition-all duration-300 ease-linear rounded-[3px] h-1 w-full`}
                            ></span>
                            <span
                                className={`${nav
                                        ? "duration-300 rounded-[3px] ease-linear transition-all hidden"
                                        : ""
                                    } bg-orange h-[4px] w-6/12 duration-300 rounded-[3px] ease-linear transition-all`}
                            ></span>
                            <span
                                className={`${nav ? "rotate-[-50deg] translate-y-[-50%]" : ""
                                    } bg-orange h-1 w-full duration-300 rounded-[3px] ease-linear transition-all`}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
