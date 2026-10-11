import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Caveat } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-interface",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["400","500","600"],
});

export const metadata: Metadata = {
  title: {
    default: "Minhas Percepções",
    template: "%s | Minhas Percepções",
  },
  description:
    "Reflexões sobre liderança, política, fé, sociedade, cotidiano e as lições que encontramos pelo caminho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${inter.variable} ${caveat.variable} paper-texture`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}