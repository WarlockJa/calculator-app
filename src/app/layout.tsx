import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { readCookie, writeCookie } from "@/lib/calculator-cookies";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculator App",
  description: "Front-end Mentor Challenge: Calculator App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultTheme = await readCookie();

  return (
    <html lang="en" className={defaultTheme}>
      <body
        className={`${leagueSpartan.variable} ${leagueSpartan.className} bg-custom-bg-main antialiased transition-colors`}
      >
        <ThemeProvider initTheme={defaultTheme} setNewTheme={writeCookie}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
