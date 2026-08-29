import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Connect with Magnora",
  description: "Magnora AI Team Contacts",
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#f1f4f6]">{children}</body>
    </html>
  );
}
