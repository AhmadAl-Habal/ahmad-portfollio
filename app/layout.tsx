import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ahmad Al-Habal | QA Specialist, Web Engineer & Product Owner",
    template: "%s | Ahmad Al-Habal",
  },
  description:
    "Portfolio of Ahmad Al-Habal, a QA Specialist, Web Engineer, and Product Owner focused on quality assurance, web development, product ownership, and reliable project delivery.",
  applicationName: "Ahmad Al-Habal Portfolio",
  authors: [{ name: "Ahmad Al-Habal" }],
  creator: "Ahmad Al-Habal",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Ahmad Al-Habal",
    "QA Specialist",
    "Quality Assurance",
    "Web Engineer",
    "Product Owner",
    "Portfolio",
    "Web Development",
  ],
  openGraph: {
    title: "Ahmad Al-Habal | QA Specialist, Web Engineer & Product Owner",
    description:
      "Explore Ahmad Al-Habal's portfolio across quality assurance, web engineering, product ownership, and project delivery.",
    type: "website",
    locale: "en_US",
    siteName: "Ahmad Al-Habal Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Ahmad Al-Habal | QA Specialist, Web Engineer & Product Owner",
    description:
      "QA, web development, product ownership, and project delivery portfolio by Ahmad Al-Habal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
