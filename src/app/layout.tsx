import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryClientProviderWrapper } from "./component/query-client-provider-wrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PortFolio - Ishan Srivastava",
  description: "This is portfolio of Ishan Srivastava. Built in NextJS.",
  icons: {
    icon: "/TitleIcon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212] w-full flex flex-col items-center`}
      >
          <QueryClientProviderWrapper>{children}</QueryClientProviderWrapper>
      </body>
    </html>
  );
}
