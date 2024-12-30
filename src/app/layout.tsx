import type { Metadata } from "next";
import { Noto_Sans_KR as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({ subsets: [], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "웹개발자 서민석",
  description: "웹개발자 서민석의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="max-w-[40rem] mx-auto my-0 px-4 pt-16 pb-24 min-h-[calc(100vh-4rem)]">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
