import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DREAM™ — Build Better Nights",
  description:
    "A modular sleep system designed around the way you actually sleep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
