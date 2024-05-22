import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/components/Navbar/Navbar";
import Footer from "./ui/components/Home/Footer/Footer";

const barlow = Barlow({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '600', '700', '800'], });

export const metadata = {
  title: "Sabbia Construcciones",
  description: "Desarrollos inmobiliarioss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
