/**
 * Gwin Bookkeeping LLC — Page Layout Wrapper
 *
 * Wraps every page with the Header and Footer.
 * Usage: wrap your page content in <PageLayout> ... </PageLayout>
 */

import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  /** Adds top padding to account for fixed header. Default: true */
  withTopPadding?: boolean;
}

export default function PageLayout({
  children,
  withTopPadding = true,
}: PageLayoutProps) {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className={withTopPadding ? "pt-16 lg:pt-20" : ""}
        tabIndex={-1} // Allows skip-link to focus this element
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
