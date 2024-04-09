import { Poppins } from "next/font/google";
import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import ClientCommons from "./ClientCommons";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";

import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import { ArticleProvider } from "@/context/articleContext";
import { ListingProvider } from "@/context/listingContext";
import { SearchProvider } from "@/context/searchContext";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <SearchProvider>
          <ListingProvider>
            <ArticleProvider>
              <ClientCommons />
              <SiteHeader />
              {children}
              <FooterNav />
              <Footer />
            </ArticleProvider>
          </ListingProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
