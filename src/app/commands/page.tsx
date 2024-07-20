"use client";
import { FaLastfmSquare } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { ReactNode, useRef, useState } from "react";
import { BiCommand, BiCopy } from "react-icons/bi";
import { FaMoneyBillWaveAlt, FaSearch } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { PiNotebookFill } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { SiFsecure, SiFunimation } from "react-icons/si";
import { FaMusic } from "react-icons/fa6";
import { RiChatVoiceFill } from "react-icons/ri";
import { PiMaskHappyFill } from "react-icons/pi";
import { GiHammerNails } from "react-icons/gi";
import { MdEmojiEmotions } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { IoIosGift } from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { TbMilitaryRank } from "react-icons/tb";
import Exported from "./commands.json";
import { Navbar } from "@/components/global/Navbar";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Commands() {
    const [activeCategory, setActiveCategory] = useState("Donator");
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollStartX, setScrollStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [searchInput, setSearchInput] = useState<string>("");

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsScrolling(true);
        setScrollStartX(event.clientX - scrollContainerRef.current!.offsetLeft);
        setScrollLeft(scrollContainerRef.current!.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsScrolling(false);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isScrolling) return;
        const scrollX = event.clientX - scrollContainerRef.current!.offsetLeft;
        const scrollDelta = scrollX - scrollStartX;
        scrollContainerRef.current!.scrollLeft = scrollLeft - scrollDelta;
    };

    const handleCategoryClick = (category: string) => {
        if (isScrolling) return;
        setActiveCategory(category);
    };

    const commands = Object.values(Exported)
        .flat()
        .sort((a, b) => a.name.localeCompare(b.name));

    const activeCommands = commands.filter(
        (command) => command.category === activeCategory
    );

    const activeCommandsSearch = commands.filter(
        (command) => command.category === activeCategory
    );

    return (
        <>
            <Navbar />
            <main className="mt-20 mx-10" onMouseUp={handleMouseUp}>
                <section className="max-w-5xl mx-auto w-full pb-20 pt-20">
                    <div className="flex flex-row justify-between gap-20">
                        <div className="flex flex-row items-center gap-2 text-white">
                            <div className="flex flex-row justify-center items-center w-12 h-12 bg-loti-200 rounded-full">
                                <BiCommand className="w-6 h-6" />
                            </div>
                            <h1 className="text-3xl font-bold">Commands</h1>
                        </div>
                        <div className="flex flex-row gap-4"></div>
                        <div className="flex flex-row gap-12">
                            <Popup
                                className="gap-20 color-white w-100"
                                trigger={
                                    <button className="float-right block w-full px-4 py-4 pl-4 text-sm rounded-lg bg-[#1a1a19] placeholder-zinc-400 text-white focus:outline-none">
                                        <FaSearch className="w-5 h-5 font-thin" />
                                    </button>
                                }
                                modal
                                closeOnDocumentClick
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center" onClick={() => close()}>
                                    <div className="max-w-[542px] w-full sm:w-[542px] bg-[#111212] rounded-3xl overflow-hidden">
                                        <div
                                            className="modal rounded-3xl"
                                            style={{ color: "white" }}
                                        >
                                            <div className="header p-0 sticky top-0 w-100 bg-[#161717]">
                                                <center>
                                                    <input
                                                        type="search"
                                                        onChange={(e) =>
                                                            setSearchInput(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="flex items-center justify-center w-full px-12 pl-4 text-lg bg-[#161717] placeholder-zinc-400 text-white focus:outline-none searchbox border-0 py-5 font-semibold"
                                                        placeholder="Search for a command..."
                                                        required
                                                    />
                                                </center>
                                            </div>
                                            <div className="content bg-[#111212] py-2 px-3">
                                                <div className="mt-1 grid grid-cols-1 gap-3">
                                                    {searchInput.length >= 2 ? (
                                                        activeCommandsSearch.filter(
                                                            (command) => {
                                                                return command.name
                                                                    .toLowerCase()
                                                                    .includes(
                                                                        searchInput.toLowerCase()
                                                                    );
                                                            }
                                                        ).length > 0 ? (
                                                            activeCommandsSearch
                                                                .filter(
                                                                    (
                                                                        command
                                                                    ) => {
                                                                        return command.name
                                                                            .toLowerCase()
                                                                            .includes(
                                                                                searchInput.toLowerCase()
                                                                            );
                                                                    }
                                                                )
                                                                .map(
                                                                    (
                                                                        commandsSearch
                                                                    ) => (
                                                                        <CommandSearch
                                                                            key={
                                                                                commandsSearch.name
                                                                            }
                                                                            name={
                                                                                commandsSearch.name
                                                                            }
                                                                            description={
                                                                                commandsSearch.help ??
                                                                                "None"
                                                                            }
                                                                            category={
                                                                                commandsSearch.category ??
                                                                                "None"
                                                                            }
                                                                        />
                                                                    )
                                                                )
                                                        ) : (
                                                            <p className="text-lg pb-2">
                                                                No commands
                                                                found
                                                            </p>
                                                        )
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Popup>
                        </div>
                    </div>
                    <div
                        ref={scrollContainerRef}
                        className="mt-10 flex items-center overflow-x-scroll no-scrollbar touch-scroll h-14 bg-loti-200 rounded-2xl w-full border border-loti-300"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                    >
                        <SelectorItem
                            name="Donator"
                            amount={commands
                                .filter(
                                    (command) => command.category === "Donator"
                                )
                                .length.toString()}
                            icon={<FaMoneyBillWaveAlt className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="AntiNuke"
                            amount={commands
                                .filter(
                                    (command) => command.category === "AntiNuke"
                                )
                                .length.toString()}
                            icon={<SiFsecure className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="AutoMod"
                            amount={commands
                                .filter(
                                    (command) => command.category === "AutoMod"
                                )
                                .length.toString()}
                            icon={<GiHammerNails className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="Chat"
                            amount={commands
                                .filter(
                                    (command) => command.category === "Chat"
                                )
                                .length.toString()}
                            icon={<IoChatbubbleEllipses className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="Emoji"
                            amount={commands
                                .filter(
                                    (command) => command.category === "Emoji"
                                )
                                .length.toString()}
                            icon={<MdEmojiEmotions className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="Fun"
                            amount={commands
                                .filter((command) => command.category === "Fun")
                                .length.toString()}
                            icon={<SiFunimation className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="Giveaway"
                            amount={commands
                                .filter(
                                    (command) => command.category === "Giveaway"
                                )
                                .length.toString()}
                            icon={<IoIosGift className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="LastFM"
                            amount={commands
                                .filter(
                                    (command) => command.category === "LastFM"
                                )
                                .length.toString()}
                            icon={<FaLastfmSquare className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="Leveling"
                            amount={commands
                                .filter(
                                    (command) => command.category === "Leveling"
                                )
                                .length.toString()}
                            icon={<TbMilitaryRank className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="Logging"
                            amount={commands
                                .filter(
                                    (command) => command.category === "Logging"
                                )
                                .length.toString()}
                            icon={<PiNotebookFill className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="Moderation"
                            amount={commands
                                .filter(
                                    (command) =>
                                        command.category === "Moderation"
                                )
                                .length.toString()}
                            icon={<FaShield className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="Music"
                            amount={commands
                                .filter(
                                    (command) => command.category === "Music"
                                )
                                .length.toString()}
                            icon={<FaMusic className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="Roleplay"
                            amount={commands
                                .filter(
                                    (command) => command.category === "Roleplay"
                                )
                                .length.toString()}
                            icon={<PiMaskHappyFill className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="Server"
                            amount={commands
                                .filter(
                                    (command) => command.category === "Server"
                                )
                                .length.toString()}
                            icon={<FaCog className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="Tickets"
                            amount={commands
                                .filter(
                                    (command) => command.category === "Tickets"
                                )
                                .length.toString()}
                            icon={<IoTicket className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="Utility"
                            amount={commands
                                .filter(
                                    (command) => command.category === "Utility"
                                )
                                .length.toString()}
                            icon={<IoIosSettings className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                        <SelectorItem
                            name="VoiceMaster"
                            amount={commands
                                .filter(
                                    (command) =>
                                        command.category === "VoiceMaster"
                                )
                                .length.toString()}
                            icon={<RiChatVoiceFill className="w-6 h-6" />}
                            active={activeCategory}
                            onClick={handleCategoryClick}
                        />
                    </div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {activeCommands.map((command) => (
                            <Command
                                key={command.name}
                                name={command.name}
                                description={command.description}
                                args={command.help ?? "None"}
                                permissions={command.brief ?? "None"}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

const SelectorItem = ({
    name,
    amount,
    icon,
    active,
    onClick,
}: {
    name: string;
    amount: string;
    icon: ReactNode;
    active: string;
    onClick: (category: string) => void;
}) => {
    const handleButtonClick = () => {
        onClick(name);
    };

    return (
        <button
            className={`flex flex-row gap-2 items-center h-full px-4 ${
                active == name
                    ? "text-white bg-loti-300"
                    : "text-loti-500 hover:bg-loti-dim hover:text-white"
            }`}
            onClick={handleButtonClick}
        >
            <div className="text-loti-500">{icon}</div>
            <span className="text-base font-medium">{name}</span>
            <div className="flex bg-loti-400 px-2 py-1 rounded-xl">
                <span className="text-sm font-semibold text-loti-500">
                    {amount}
                </span>
            </div>
        </button>
    );
};

const CommandSearch = ({
    name,
    description,
    category,
}: {
    name: string;
    description: string;
    category: string;
}) => {
    return (
        <div className="flex flex-col rounded-lg bg-[#1b1c1c] hover:bg-[#111111] transition-shadow duration-200 ease-linear text-white">
            <a href={`/commands#${name}`}>
                <div className="pl-4">
                    <p className="text-sm mt-3 text-neutral-400 font-medium pr-4">
                        {category}
                    </p>
                    <p className="text-xl font-semibold inline-flex items-center">
                        {name}
                    </p>
                    <p className="text-sm mt-1 mb-2 text-neutral-400 font-medium pr-4">
                        {description}
                    </p>
                </div>
            </a>
        </div>
    );
};

const Command = ({
    name,
    description,
    args,
    permissions,
}: {
    name: string;
    description: string;
    args: string;
    permissions: string;
}) => {
    const [tooltipText, setTooltipText] = useState("Copy");

    const handleCopyClick = () => {
        navigator.clipboard.writeText(name);
        setTooltipText("Copied");
        setTimeout(() => {
            setTooltipText("Copy");
        }, 2500);
    };

    return (
        <>
            <div
                className="flex flex-col py-6 rounded-3xl bg-loti-200 border transition-shadow duration-200 ease-linear border-loti-300 text-white"
                id={name}
            >
                <div className="h-full flex flex-col justify-between">
                    <div className="px-6">
                        <div className="flex items-start justify-between gap-x-4">
                            <div className="flex items-center gap-2">
                                <p className="text-xl font-semibold inline-flex items-center">
                                    {name}
                                </p>
                            </div>
                            <button
                                data-clipboard-text={name}
                                className="text-neutral-500 transition duration-200 ease-linear hover:text-white relative"
                                onClick={handleCopyClick}
                            >
                                <BiCopy className="w-6 h-6" />
                                <span className="tooltip">{tooltipText}</span>
                            </button>
                        </div>
                        <p className="text-sm mt-3 text-neutral-400 font-medium pr-4">
                            {description}
                        </p>
                    </div>
                    <div>
                        <hr className="border-t border-loti-300 w-full my-4" />
                        <div className="px-6 flex flex-col gap-4">
                            <div>
                                <p className="text-sm tracking-wide text-loti-pink font-medium">
                                    arguments
                                </p>
                                <div className="flex items-center gap-2 mt-3">
                                    <p className="text-neutral-200 inline-block text-sm py-1">
                                        {args}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm tracking-wide text-loti-pink font-medium">
                                    permissions
                                </p>
                                <div className="flex items-center gap-2 mt-3">
                                    <p className="text-white font-medium inline-block text-xs py-1.5">
                                        {permissions}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
