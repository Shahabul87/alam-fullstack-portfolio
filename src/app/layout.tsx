import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeInitializer from "@/components/ThemeInitializer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md Shahabul Alam - AI Engineer Portfolio",
  description: "Personal portfolio showcasing my work and experience in AI engineering",
};

// Server and client will now render the same initial HTML
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        {/* Inline script to handle theme before any React code runs */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  }
                  // Remove any "hydrated" class if it exists (for debugging)
                  document.documentElement.classList.remove('hydrated');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} scroll-smooth`}>
        <ThemeInitializer />
        {children}
      </body>
    </html>
  );
}
