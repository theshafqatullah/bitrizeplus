import type { Metadata } from "next";
import { Lato, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bitrize Plus - AI-Powered Software Development Platform",
  description: "The complete AI-powered software development lifecycle platform. From ideation to continuous improvement, our intelligent agents automate every stage of your product journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${lato.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
