import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { TRPCProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";
import { Roboto_Serif } from "next/font/google";
import { Open_Sans } from "next/font/google";

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "MatSci YAMZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSerif.variable} ${openSans.variable} min-h-screen antialiased bg-[rgba(50,61,97,0.21)] flex flex-col text-foreground`}
      >
        <TRPCProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="flex-1 overflow-x-hidden">{children}</div>
            <Toaster />
          </ThemeProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
