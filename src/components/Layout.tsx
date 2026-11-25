import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DownloadCta from './DownloadCta';
import Footer from './Footer';
import Nav from './Nav';

/** Scroll to the top on a new page, or to the element named in the URL hash. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <DownloadCta />
      <Footer />
    </>
  );
}
