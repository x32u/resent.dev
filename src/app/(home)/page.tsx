"use client";
import { useEffect, useState } from "react";
import { MeshGradient } from "@/components/global/GradientMesh";
import { ReactNode } from "react";
import { BiBookAdd } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { FiCommand } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { FaBookOpen, FaMoneyBillWaveAlt } from "react-icons/fa";
import "@/styles/globals.css";
import Link from 'next/link'


export default function Home() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen items-center justify-center mt-20 sm:mt-0">
                <img
                    src="https://r2.evict.cc/evict.png"
                    className="w-52 h-52 rounded-xl"
                />
                <h1 className="text-6xl font-bold text-white">evict</h1>
                <span className="text-sm pb-4 text-zinc-300 text-center">
                    An all in one bot dedicated to providing the best experience to the best servers on Discord. 
                </span>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <SplashItem
                        name="Commands"
                        link="/commands"
                        icon={<FiCommand />}
                    />
                    <SplashItem
                        name="Authorize"
                        link="/discord"
                        icon={<BsDiscord />}
                    />
                    <SplashItem
                        name="Documentation"
                        link="/docs"
                        icon={<BiBookAdd />}
                    />
                </div>
            </div>
        </>
    );
}

const SplashItem = ({
    name,
    link,
    icon,
}: {
    name: string;
    link: string;
    icon: ReactNode;
}) => {
    return (
        <Link
            href={link}
            className="flex flex-row gap-2 items-center justify-center rounded-lg py-4 px-20 bg-[#121317] bg-opacity-90  border-opacity-10 text-white hover:bg-opacity-50 sm:px-6 hover:scale-105 transition-transform duration-500"
        >
            {icon}
            {name}
        </Link>
    );
};
