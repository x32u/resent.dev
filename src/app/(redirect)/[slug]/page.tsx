"use client";
import NotFound from "@/app/not-found";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Redirects = ({ params }: { params: { slug: string } }) => {
    const router = useRouter();

    const redirects: Redirect[] = [
        {
            path: "/discord",
            url: "https://discord.gg/evict",
        },
        {
            path: "/support",
            url: "https://discord.gg/evict",
        },
        {
            path: "/cmds",
            url: "/commands",
        },
        {
            path: "/help",
            url: "/commands",
        },
        {
            path: "/invite",
            url: "https://discordapp.com/oauth2/authorize?client_id=1203514684326805524&scope=bot+applications.commands&permissions=8",
        },
        {
            path: "/docs",
            url: "https://docs.evict.cc",
        },
        {
            path: "/variables",
            url: "https://docs.evict.cc/embeds/variables",
        },
        {
            path: "/privacy",
            url: "/legal/privacy",
        },
        {
            path: "/terms",
            url: "/legal/terms",
        },
    ];

    const redirect = redirects.find(
        (r) => r.path.replace("/", "") == params.slug,
    );

    useEffect(() => {
        setTimeout(() => {
            if (redirect) router.push(redirect.url);
        }, 500);
    }, [router, redirect]);

    if (!redirect) {
        return <NotFound />;
    }

    return (
        <div className="grid place-items-center text-center py-48 gap-5">
            <div className="text-7xl font-semibold text-zinc-400">
                Redirecting
            </div>
            <p>You are currently redirecting to evict.cc/{params.slug}...</p>
        </div>
    );
};

interface Redirect {
    path: string;
    url: string;
}

export default Redirects;
