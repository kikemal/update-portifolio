import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { site } from "@/lib/content";
import "./globals.css";

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans-actual",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif-actual",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Creative developer`,
    template: `%s · ${site.name}`,
  },
  description:
    "Kidist Kemal is a creative developer from Ethiopia. She turns quiet questions into useful digital experiences for freelance clients and collaborators.",
  openGraph: {
    title: `${site.name} — Creative developer`,
    description:
      "A cinematic personal portfolio for Kidist Kemal, creative developer from Ethiopia.",
    type: "website",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem("kidist-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <CustomCursor />
          <div className="page">
            <Navigation />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
