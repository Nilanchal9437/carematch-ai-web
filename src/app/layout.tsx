import type { Metadata } from "next";
import "./globals.css";

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
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
