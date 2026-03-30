import type { ReactNode } from "react";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SignalHeader } from "@/components/signal-header";
import { BottomNav } from "@/components/bottom-nav";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const frameEmbed = {
  version: "next",
  imageUrl: "https://counter-global.vercel.app/og.svg",
  button: {
    title: "Open Counter",
    action: {
      type: "launch_frame",
      name: "counter-global",
      url: "https://counter-global.vercel.app",
      splashImageUrl: "https://counter-global.vercel.app/splash.svg",
      splashBackgroundColor: "#FFFDF8",
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content="69c9d08654fba99e37410fd2" />
        <meta
          name="talentapp:project_verification"
          content="c4b064b93c0af5e5b2671898d1940e2a1e12d80f72d8f5459ad3f655e0020c8c04d6a6a511800128a61827e7a6614582230cf5f279ee581665d0ab354e8fd787"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>counter-global</title>
        <meta name="description" content="A public global counter on Base where anyone can add one." />
        <link rel="canonical" href="https://counter-global.vercel.app" />
        <link rel="manifest" href="/.well-known/farcaster.json" />
        <meta property="og:title" content="counter-global" />
        <meta property="og:description" content="A public global counter on Base where anyone can add one." />
        <meta property="og:image" content="https://counter-global.vercel.app/og.svg" />
        <meta property="og:url" content="https://counter-global.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="counter-global" />
        <meta name="twitter:description" content="A public global counter on Base where anyone can add one." />
        <meta name="twitter:image" content="https://counter-global.vercel.app/og.svg" />
        <meta name="fc:frame" content={JSON.stringify(frameEmbed)} />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <Providers>
          <div className="app-shell">
            <div className="background-grid" />
            <div className="background-orb background-orb-coral" />
            <div className="background-orb background-orb-cyan" />
            <SignalHeader />
            <main className="page-frame">{children}</main>
            <BottomNav />
          </div>
        </Providers>
      </body>
    </html>
  );
}
