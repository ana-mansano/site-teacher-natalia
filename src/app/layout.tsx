import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inglês com Natalia | Vamos ver se damos match?",
  description:
    "Aulas de inglês com uma professora que quer saber se o método combina com você. Faça um teste rápido e veja se a gente combina!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <body className="font-sans antialiased min-h-screen bg-off-white text-marrom-escuro">
        {children}
      </body>
    </html>
  );
}
