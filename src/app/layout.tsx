import type { Metadata } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap"
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://junaid-lone-portfolio.vercel.app"),
  title: {
    default: "Junaid Lone | Junior Financial Crime Analyst",
    template: "%s | Junaid Lone"
  },
  description:
    "Portfolio of Junaid Lone, a Junior Financial Crime Analyst focused on transaction monitoring, investigations, KYC/EDD, and risk analysis.",
  keywords: [
    "Junaid Lone",
    "Junior Financial Crime Analyst",
    "Financial Crime",
    "Transaction Monitoring",
    "KYC",
    "EDD",
    "Risk Analysis",
    "Manchester"
  ],
  openGraph: {
    title: "Junaid Lone | Junior Financial Crime Analyst",
    description:
      "Ambitious financial crime professional in Manchester with experience in monitoring, investigations, KYC/EDD, and risk analysis.",
    type: "website",
    locale: "en_GB",
    siteName: "Junaid Lone Portfolio"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${ibmPlexMono.variable} antialiased`}>
        <a
          href="#content"
          className="focus-ring sr-only absolute left-4 top-4 z-[100] rounded-md bg-surface px-4 py-2 text-sm text-text focus:not-sr-only"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
