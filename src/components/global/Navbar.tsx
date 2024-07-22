"use client";
import { BsDiscord } from "react-icons/bs"
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className="fixed top-0 z-50 w-full flex justify-between items-center bg-loti-200 text-white h-20 border-b-2 border-loti-300 px-2">
            <div className="flex flex-row justify-between max-w-5xl mx-auto w-full">
                <Link href="/" className="flex items-center">
                    <img src="https://r2.evict.cc/evict.png" alt="evict" className="w-14 h-14 rounded-full" />
                    <h1 className="text-4xl font-bold ml-2">evict</h1>
                </Link>
                <div className="hidden flex-row gap-10 items-center sm:flex">
                    <Link href="/commands" className={`font-semibold py-6 ${pathname === '/commands' ? 'border-b-2 border-loti-pink text-loti-white' : ''}`}>Commands</Link>
                    <Link href="/legal" className={`font-semibold py-6 ${pathname === '/docs' ? 'border-b-2 border-loti-pink text-loti-white' : ''}`}>Legal</Link>
                    <Link href="/status" className={`font-semibold py-6 ${pathname === '/status' ? 'border-b-2 border-loti-pink text-loti-white' : ''}`}>Status</Link>
                </div>
                <Link href='https://discord.gg/evict' className="flex items-center bg-blue-500 px-4 rounded-2xl gap-2 h-10 mt-2 hover:bg-blue-700 sm:mt-4">
                    <BsDiscord />
                    <span>Discord</span>
                </Link>
            </div>
        </div>
    )
}
