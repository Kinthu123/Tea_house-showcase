import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rangoon Tea House Bangkok — Burmese Tea & Cuisine",
  description:
    "A celebration of the century-old Burmese teahouse tradition. CNN's World's Best Tea Houses. Located in Thonglor, Bangkok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
