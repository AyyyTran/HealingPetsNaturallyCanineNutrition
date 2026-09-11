import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Healing Pets Naturally Canine Nutrition",
  description:
    "Personalized canine nutrition consultations with Karissa — evidence-based diet plans for healthier dogs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@600,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-darkblue antialiased">
        {children}
      </body>
    </html>
  );
}
