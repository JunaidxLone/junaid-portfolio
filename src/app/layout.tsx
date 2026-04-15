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
  title: "Junaid Lone - Financial Crime Specialist",
  description:
    "Junaid Lone is a Financial Crime Specialist in Manchester with experience in transaction monitoring, investigations, KYC/EDD, and risk analysis.",
  keywords: [
    "Junaid Lone",
    "Financial Crime Specialist",
    "Financial Crime",
    "Transaction Monitoring",
    "KYC",
    "EDD",
    "Risk Analysis",
    "Manchester"
  ],
  openGraph: {
    title: "Junaid Lone - Financial Crime Specialist",
    description:
      "Financial crime professional in Manchester focused on transaction monitoring, investigations, KYC/EDD, and practical risk decisioning.",
    type: "website",
    locale: "en_GB",
    siteName: "Junaid Lone Portfolio"
  },
  icons: {
    icon: "data:,",
    shortcut: "data:,"
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
