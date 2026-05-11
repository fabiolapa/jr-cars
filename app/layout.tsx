import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "JRCars · Comércio de Automóveis",
  description:
    "Stand de automóveis usados em Portugal. Carros revistos, garantia e financiamento à medida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body className="min-h-screen bg-ink-950 text-ink-100">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
