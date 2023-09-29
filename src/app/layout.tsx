import type { Metadata } from "next";
import Menu from "@/components/Menu";
import "./globals.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
//https://react-icons.github.io/react-icons/icons?name=fa
//npm install react-icons --save

export const metadata: Metadata = {
  title: "Next.js - Loja de Rock",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid sm:grid-cols-1 h-screen w-full">
        <Menu />
        {children}
        <div className="lg:hidden bg-[#1b1b1b] flex flex-row justify-start items-center p-6 gap-8">
          <a
            href="https://www.instagram.com/o_californiaa/"
            className="flex flex-row gap-2"
          >
            <FaInstagram size="20px" color="white" />
            <span className="text-sm font-semibold opacity-50">Instagram</span>
          </a>
          <a href="" className="flex flex-row gap-2">
            <FaWhatsapp size="20px" color="white" />
            <span className="text-sm font-semibold opacity-50">WhatsApp</span>
          </a>
        </div>
      </body>
    </html>
  );
}
