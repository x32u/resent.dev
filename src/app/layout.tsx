import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { MeshGradient } from "@/components/global/GradientMesh";
import { Navbar } from "@/components/global/Navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: 'transparent',
};

export const metadata: Metadata = {
  title: "resent",
  description: "an aesthetic all-in-one bot, enhancing communities with user-focused commands.",
  twitter: {
    site: 'https://resent.dev/',
    card: 'player'
  },
  openGraph: {
    url: 'https://resent.dev/',
    type: 'website',
    title: 'resent',
    siteName: 'resent.dev',
    description: 'an aesthetic all-in-one bot, enhancing communities with user-focused commands.',
    images: [
      {
        url: 'https://cdn.resent.dev/resent.webp',
        width: 500,
        height: 500,
        alt: 'Loti'
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-loti-100`}>
        <MeshGradient />
        {/* <Navbar /> */}
        {children}
        </body>
    </html>
  );
}
