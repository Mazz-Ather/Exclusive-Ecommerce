import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/app/components/Navbar/CartContext';
import Navbar from "./components/Navbar/Navbar";
import TopAnnouncement from "./components/Navbar/TopAnnoucement";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Hackathon",
  description: "create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CartProvider>
   <TopAnnouncement/>
        <Navbar/>
        {children}
        <Footer/>
        </CartProvider>
        </body>
    </html>
  );
}
