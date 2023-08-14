// app/layout.tsx
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import "./globals.css";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}