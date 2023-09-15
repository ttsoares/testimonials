import "./globals.css";
import { Barlow_Semi_Condensed } from "next/font/google";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata = {
  title: "Testimonials",
  description: "FrontEnd mentor challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen h-screen">
      <body className={`${barlow.className} w-full h-full`}>{children}</body>
    </html>
  );
}
