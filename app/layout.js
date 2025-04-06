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
        <div className="min-h-screen bg-green-200 text-black">
          <header className="w-full bg-green-300 border-b">
            <nav className="max-w-4xl flex flex-row items-center py-6 space-y-4">
              <h1 className="text-4xl font-bold my-4 mx-6">Bruner Art</h1>
              <div className="flex flex-wrap justify-center gap-4 px-32">
                <a
                  href="/"
                  className="px-6 py-3 text-lg font-bold bg-gray-500 rounded-md"
                >
                  Home
                </a>
                <a
                  href="/gallery"
                  className="px-6 py-3 text-lg font-bold bg-gray-500 rounded-md"
                >
                  Gallery
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 text-lg font-bold bg-gray-500 rounded-md"
                >
                  Contact
                </a>
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
      </body>
    </html>
  );
}

