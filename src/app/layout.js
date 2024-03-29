import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Subtitle from "@/components/subtitle/subtitle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="navbar-container">
          <Navbar/>
        </div>
        <div className="subtitle-container">
          <Subtitle/>
        </div>

        <div className="children-container">
          {children}
        </div>



      </body>
    </html>
  );
}
