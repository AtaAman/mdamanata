import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavDock from "@/components/NavDock";
import Meteors from "@/components/magicui/meteors";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
});


export const metadata: Metadata = {
  title: "Md Aman Ata - Full Stack Developer & Software Engineer",
  description:
    "Md Aman Ata's personal portfolio website for showcasing thier Project and achievement and student of Chandigarh University.",
  keywords:
    "Md Aman Ata, portfolio, web developer, software engineer, React, JavaScript, TypeScript, Full Stack Developer",
  authors: [{ name: "Md Aman Ata" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mdamanata.in",
    siteName: "Md Aman Ata Portfolio",
    title: "Md Aman Ata - Full Stack Developer & Software Engineer",
    description:
      "Founder of EmaanStream, developing an educational platform for authentic podcasts, nasheeds, and religious bayans.",
    images: [
      {
        url: "https://ataaman.github.io/myPortfolio/assets/6563382.png",
        width: 1200,
        height: 630,
        alt: "Md Aman Ata - Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://ataaman.github.io/myPortfolio/assets/6563382.png"
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md Aman Ata",
              url: "https://mdamanata.in",
              image:
                "https://ataaman.github.io/myPortfolio/assets/6563382.png",
              sameAs: [
                "https://www.linkedin.com/in/md-aman-ata-b9bb361bb/",
                "https://github.com/ataaman",
              ],
              jobTitle: "Founder",
              worksFor: {
                "@type": "Organization",
                name: "emaanstream.com",
              },
              knowsAbout: [
                "Web Development",
                "React",
                "JavaScript",
                "TypeScript",
                "Development",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Chandigarh University",
              },
              description:
                "Md Aman Ata is Founder of EmaanStream, developing an educational platform for authentic podcasts, nasheeds, and religious bayans.",
            }),
          }}
        />
        <link rel="canonical" href="https://mdamanata.in" />
      </head>
      <body
        className={`${bricolageGrotesque.className} antialiased z-50 overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <NavDock />
          </TooltipProvider>
        </ThemeProvider>
        <Meteors number={30} />
      </body>
    </html>
  );
}
