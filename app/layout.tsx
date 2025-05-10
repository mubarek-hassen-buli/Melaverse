import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundBeams } from "@/components/ui/background-beams";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MELAVERSE - Unleashing the Future of Technology",
  description:
    "We build intelligent software solutions that elevate businesses and solve real-world challenges.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <BackgroundBeams />
        </ThemeProvider>
      </body>
    </html>
  );
}
