import type { Metadata } from "next";
import "./globals.css";
import { LoaderProvider } from "@/context/LoaderContext";
import { ToastContainer } from "react-toastify";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "CareMatch AI - Find the Perfect Senior Care Facility",
  description:
    "CareMatch AI helps families find the perfect senior care facilities by using advanced matching technology to consider care needs, preferences, location, and budget.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <LoaderProvider>
          <div className="min-h-screen flex flex-col">{children}</div>
        </LoaderProvider>
        <ToastContainer />
      </body>
      <GoogleTagManager gtmId="G-TK771CYHS5" />
    </html>
  );
}
