// app/layout.tsx
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import "./globals.css";

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