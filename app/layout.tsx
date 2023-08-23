// app/layout.tsx
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Rohan Moniz',
  verification: {
    google: 'lQm_zdGsK0ksSPXP7pnX7FJQjZz7H7BnHPyWNbUDRzs',
  },
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark scroll-smooth'>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}