import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ 
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"]
 });

export const metadata: Metadata = {
  title: "Surgiline International",
  description: "This is dental tool website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`h-full antialiased ${urbanist.className}`}
      >
        {children}
      </body>
    </html>
  );
}
