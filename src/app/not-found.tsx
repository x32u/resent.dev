import { Navbar } from "@/components/global/Navbar";
import "@/styles/globals.css";

export default function NotFound() {
    return (
        <>
        <Navbar />
            <div className="flex flex-col h-screen w-screen items-center justify-center mt-20 sm:mt-0">
                <h1 className="text-8xl font-bold text-white">404</h1>
                <span className="text-lg pb-4 text-zinc-300 pt-2 text-center">
                    Page not found
                </span>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <SplashItem
                        name="Go Back"
                        link="./"
                    />
                </div>
            </div>
        </>
    );
}

const SplashItem = ({
    name,
    link,
}: {
    name: string;
    link: string;
}) => {
    return (
        <a
            href={link}
            className="flex flex-row gap-2 items-center justify-center rounded-lg py-4 px-20 bg-[#121317] bg-opacity-90  border-opacity-10 text-white hover:bg-opacity-50 sm:px-6 hover:scale-105 transition-transform duration-500"
        >
            {name}
        </a>
    );
};
