import type { Metadata } from "next";
import "./globals.css";
import "./styles/main.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

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
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
        <Analytics
          beforeSend={(event) => {
            const hostname = window.location.hostname;

            if (hostname.includes("-git-") || hostname.includes("localhost")) {
              return null;
            }

            const url = new URL(event.url);
            if (
              url.searchParams.has("fbclid") ||
              url.searchParams.has("gclid")
            ) {
              url.searchParams.delete("fbclid");
              url.searchParams.delete("gclid");
              return {
                ...event,
                url: url.toString(),
              };
            }

            return event;
          }}
        />
      </body>
    </html>
  );
}
