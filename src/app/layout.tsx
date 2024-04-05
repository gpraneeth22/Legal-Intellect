import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation-bar/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "sonner";

import "react-loading-skeleton/dist/skeleton.css";
import 'simplebar-react/dist/simplebar.min.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legal Intellect",
  description: "Legal services at your Door step",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <Providers>
        <body
          className={cn(
            "min-h-screen font-sans antialiased grainy",
            inter.className
          )}
        >
          <Toaster richColors/>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
