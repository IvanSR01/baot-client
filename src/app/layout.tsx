import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import MainProvider from "@/provider/MainProvider";

const inter = Manrope({ subsets: ["latin"] });
import "./globals.scss";

export const metadata: Metadata = {
  title: "На лодку",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
