import "./globals.css";
import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

import { seoMetaData } from "@/config/seo-meta-data";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { fontMono, fontSans } from "@/lib/fonts";

export const metadata: Metadata = seoMetaData;

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="en"
        className={`${fontSans.variable} ${fontMono.variable}`}
        suppressHydrationWarning
      >
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
