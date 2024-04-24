import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/components/Navbar/Navbar";
import Footer from "./ui/components/Home/Footer/Footer";
import localFont from 'next/font/local';
import ProjectModal from "./ui/components/Home/MainProjects/Modal/Modal";


const barlow = Barlow({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '600', '700', '800'], });

const customFont = localFont({
  src: [
    {
      path: '../public/fonts/helvetica-light.ttf',
      weight: '300',
    },
    {
      path: '../public/fonts/Helvetica.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Helvetica-Bold.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Helvetica-Oblique.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/Helvetica-BoldOblique.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
})

export const metadata = {
  title: "Sabbia Construcciones",
  description: "Desarrollos inmobiliarioss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={customFont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
