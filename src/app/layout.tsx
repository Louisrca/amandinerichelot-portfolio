import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor/Cursor";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amandine Richelot",
  description: "Hi, I'm Amandine Richelot, a passionate photographer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${roboto.className} antialiased`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
