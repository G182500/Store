import type { Metadata } from "next";
import Admin from "@/components/Admin";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loja de Produtos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col lg:flex-row h-screen w-full gap-4 p-3">
          <Menu />
          <div className="flex flex-col gap-4 lg:p-4 w-full lg:ml-80">
            <Header />
            {children}
            <Admin />
          </div>
        </div>
      </body>
    </html>
  );
}
