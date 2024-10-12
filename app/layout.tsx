import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font from Google
import "./globals.css";
import NavbarComponent from "./components/Common/Navbar";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

// Import the Poppins font with weight ranges you need
const poppins = Poppins({
  subsets: ["latin"], // You can add subsets like 'latin' or 'latin-ext'
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Define weights
  variable: "--font-poppins", // Set a CSS variable for font
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} min-h-screen antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <NavbarComponent />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
