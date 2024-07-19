/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export const Footer = () => {
    return (
        <>
            <footer className="bg-loti-200 text-white border-t-2 border-loti-300 px-2">
                <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
                    <div className="grid grid-cols-2 gap-8 py-12 mt-4 mb-12 text-sm font-medium lg:grid-cols-3 xl:col-span-2">
                        <div>
                            <img
                                src="https://r2.evict.cc/evict.png"
                                className="w-[64px] h-[64px] rounded-xl"
                            />
                            <h3 className="text-2xl text-white">Evict</h3>
                            <ul role="list" className="mt-4 space-y-2">
                                <p className="hover:text-white">
                                    An all in one bot dedicated to providing the best experience to the best servers on Discord. 
                                </p>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-base text-white">Legal</h3>
                            <ul role="list" className="mt-4 space-y-2">
                                <li>
                                    <a
                                        href="./tos"
                                        className="text-gray-500 hover:text-white"
                                    >
                                        TOS
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="./privacy"
                                        className="text-gray-500 hover:text-white"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-base text-white">Bot</h3>
                            <ul role="list" className="mt-4 space-y-2">
                                <li>
                                    <a
                                        href="./invite"
                                        className="text-gray-500 hover:text-white"
                                    >
                                        Invite
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="./commands"
                                        className="text-gray-500 hover:text-white"
                                    >
                                        Commands
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://embed.evict.cc"
                                        className="text-gray-500 hover:text-white"
                                    >
                                        Embed
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://docs.evict.cc"
                                        className="text-gray-500 hover:text-white"
                                    >
                                        Docs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="flex items-center"
                        x-data="{ year: new Date().getFullYear() }"
                    >
                        <span className="text-sm font-medium text-gray-500 text-balance">
                            &copy; 2024 Evict - All rights reserved
                            <span className="text-transparent">
                            </span>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};
