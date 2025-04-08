import Link from "next/link";
import { AuthContextProvider } from "./_utils/auth-context";
import AuthButton from "./authorization/AuthButton";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bruner Art",
  description: "Art Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
      <AuthContextProvider>
        <div className="min-h-screen bg-green-200 text-black">
          <header className="w-full bg-green-300 border-b">
            <nav className="min-w-screen py-6">
              <h1 className="flex justify-center text-4xl font-bold mx-6 items-center">Bruner Art</h1>
              <div className="flex justify-center gap-1">
                
                <Link 
                  href="/"
                  className="px-6 py-3 ml-32 text-lg font-bold bg-amber-400 hover:bg-amber-600"
                >
                  Home
                </Link>
                <Link
                  href="/gallery"
                  className="px-6 py-3 h-full w-28 text-lg font-bold bg-amber-400 hover:bg-amber-600"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 h-full w-28 text-lg font-bold bg-amber-400 hover:bg-amber-600"
                >
                  Contact
                </Link>
                <div className="">
                <AuthButton className=" h-full w-28 text-lg font-bold ml-4 text-amber-500 hover:text-amber-600 " />
              </div>
              </div>
            </nav>
          </header>

          <main className="flex-1 max-w-4xl mx-auto p-6">{children}</main>

          <footer className="w-full bg-green-300 border-t shadow mt-4">
            <div className="max-w-4xl mx-auto py-6 text-center">
              <p className="text-sm text-gray-600">© 2025 Bruner Art. All rights reserved.</p>
            </div>
          </footer>
        </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}

