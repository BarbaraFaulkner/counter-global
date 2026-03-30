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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content="69c22f7b3c2c56b9bbd2f616" />
        <meta name="base:app_id" content="69c9d08654fba99e37410fd2" />
        <meta
          name="talentapp:project_verification"
          content="c4b064b93c0af5e5b2671898d1940e2a1e12d80f72d8f5459ad3f655e0020c8c04d6a6a511800128a61827e7a6614582230cf5f279ee581665d0ab354e8fd787"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>counter-global</title>
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


