import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mt. Pleasant Christian School",
  description:
    "Christian based home school co-op located in Mt. Pleasant, North Carolina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
