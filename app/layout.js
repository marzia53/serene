import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/ui/Header";
import CursorProvider from "@/components/ui/CursorContext";
import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});


export const metadata = {
  title: "Serene",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${marcellus.variable} ${montserrat.variable} overflow-x-hidden`}
      >
        <CursorProvider>
          <Transition />
          <Header />
          <PageTransition>
          {children}
          </PageTransition> 
        </CursorProvider>
      </body>
    </html>
  );
}
