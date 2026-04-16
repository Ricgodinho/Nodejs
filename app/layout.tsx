import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RVA Hub",
  description: "A modern full-stack React application with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
