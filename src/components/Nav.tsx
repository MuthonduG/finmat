import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BRAND, NAV } from '../config';
import { useTheme } from '../hooks';
import Logo from './Logo';
import { ChevronDownIcon, CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus after navigating.
  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenGroup(null);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__bar" ref={barRef}>
        <Link to="/" className="nav__logo" aria-label="finmat home">
          <Logo />
        </Link>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {NAV.map((group) => (
            <div key={group.label} className={`nav__group ${openGroup === group.label ? 'is-open' : ''}`}>
              <button
                type="button"
                className="nav__group-btn"
                aria-expanded={openGroup === group.label}
                aria-haspopup="true"
                onClick={() => setOpenGroup((g) => (g === group.label ? null : group.label))}
              >
                {group.label}
                <ChevronDownIcon width={16} height={16} />
              </button>
              <div className="nav__menu">
                <div className="nav__menu-inner">
                  {group.children.map((c) => (
                    <NavLink key={c.to} to={c.to}>
                      {c.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <a className="btn btn--red nav__cta-mobile" href={BRAND.playStoreUrl} target="_blank" rel="noreferrer">
            Get the app
          </a>
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="btn btn--red nav__cta" href={BRAND.playStoreUrl} target="_blank" rel="noreferrer">
            Get the app
          </a>
          <button
            type="button"
            className="icon-btn nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
