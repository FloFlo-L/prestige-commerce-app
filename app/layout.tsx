import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Prestige - L'Excellence du Luxe",
  description: "Découvrez Prestige, la référence ultime en matière de luxe et d'élégance. Une sélection exclusive de mode, accessoires et objets d'exception, incarnant le savoir-faire artisanal et le raffinement intemporel. Explorez nos collections et laissez-vous séduire par une expérience unique, dédiée aux connaisseurs du prestige et du raffinement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
