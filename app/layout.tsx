import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Ma Bio | Dieudonné Houndagnon",
  description: "Frontend Craftsman - Je façonne des interfaces web d'exception, rapides et orientées conversion.",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="bg-slate-50 text-slate-800 font-sans min-h-full flex items-center justify-center p-4">
        {children}
        <Analytics />
      </body>
    </html>
  );
}