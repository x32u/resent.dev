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
    const [stats, setStats] = useState({ members: 0, servers: 0 });
    const [apiIssue, setApiIssue] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("api/stats");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                if (data.members === 0 || data.servers === 0) {
                    setApiIssue(true);
                } else {
                    setStats(data);
                }
            } catch (error) {
                console.error(
                    "There was a problem with your fetch operation:",
                    error
                );
                setApiIssue(true);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="flex flex-col h-screen w-screen items-center justify-center mt-20 sm:mt-0">
                <img
                    src="https://cdn.resent.dev/resent.png"
                    className="w-52 h-52 rounded-xl"
                />
                <h1 className="text-6xl font-bold text-white">resent</h1>
                <span className="text-sm pb-4 text-zinc-300 text-center">
                    an aesthetic all-in-one bot, enhancing communities with
                    user-focused commands.
                </span>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <SplashItem
                        name="Commands"
                        link="/commands"
                        icon={<FiCommand />}
                    />
                    <SplashItem
                        name="Discord"
                        link="https://discord.gg/resent"
                        icon={<BsDiscord />}
                    />
                    <SplashItem
                        name="Documentation"
                        link="https://docs.resent.dev/"
                        icon={<BiBookAdd />}
                    />
                    <SplashItem
                        name="Invite"
                        link="https://discord.com/api/oauth2/authorize?client_id=716939297009434656&permissions=8&scope=bot%20applications.commands"
                        icon={<FaRegEnvelope />}
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
