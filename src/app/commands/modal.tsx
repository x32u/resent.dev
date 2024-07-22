"use client";
import { useState, useEffect } from "react";
import Exported from "./commands.json";

export default function Modal({
    isOpen,
    setIsOpen,
    commands
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    commands: any
}) {
    const [open, setOpen] = useState<boolean>(isOpen);
    const [searchInput, setSearchInput] = useState<string>("");

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    setIsOpen(false);
                }
            };

            window.addEventListener("keydown", handleKeyDown);

            return () => {
                window.removeEventListener("keydown", handleKeyDown);
                document.body.style.overflow = "auto";
            };
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open, setIsOpen]);

    const filteredCommands = commands.filter((command: any) =>
        command.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleCommandClick = (commandName: string) => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
    };

    if (!open) return null;

    return (
        <div
            className="w-full h-full backdrop-blur-lg fixed top-0 left-0 flex z-50 justify-center items-center"
            onClick={() => setIsOpen(false)}
        >
            <div
                className="max-w-[542px] w-full sm:w-[542px] bg-[#111212] rounded-3xl overflow-visible"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal rounded-3xl" style={{ color: "white" }}>
                    <div className="header p-0 sticky top-0 w-100 bg-[#161717]">
                        <center>
                            <input
                                type="search"
                                onChange={(e) => setSearchInput(e.target.value)}
                                className="flex items-center justify-center w-full px-12 pl-4 text-lg bg-[#161717] placeholder-zinc-400 text-white focus:outline-none searchbox border-0 py-5 font-semibold"
                                placeholder="Search for a command..."
                                required
                            />
                        </center>
                    </div>
                    {searchInput.length >= 2 && (
                        <div className="content bg-[#111212] py-2 px-3">
                            <div className="mt-1 grid grid-cols-1 gap-3">
                                {filteredCommands.length > 0 ? (
                                    filteredCommands.map((command: any) => (
                                        <a
                                            key={command.name}
                                            onClick={() =>
                                                handleCommandClick(command.name)
                                            }
                                            className="items-start text-left w-full"
                                            href={`/commands#${command.name}`}
                                        >
                                            <CommandSearch
                                                name={command.name}
                                                description={
                                                    command.help ?? "None"
                                                }
                                                category={
                                                    command.category ?? "None"
                                                }
                                            />
                                        </a>
                                    ))
                                ) : (
                                    <p className="text-lg pb-2 mr-2">
                                        No commands found
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

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
        <div className="flex flex-col rounded-lg items-start text-start bg-[#1b1c1c] hover:bg-[#111111] transition-shadow duration-200 ease-linear text-white">
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
        </div>
    );
};
