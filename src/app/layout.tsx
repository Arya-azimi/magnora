import type { Metadata } from "next";
import "./globals.css";
import "./styles/main.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import SmoothScroll from "@/components/SmoothScroll";
import VercelProviders from "@/components/VercelProviders";

export const metadata: Metadata = {
  title: "Magnora - AI ",
  description: "Modern SaaS and Startup Next.js Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <VercelProviders />
      </body>
    </html>
  );
}
