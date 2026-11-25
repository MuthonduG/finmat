import { Link } from 'react-router-dom';
import { BRAND, NAV } from '../config';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brand" aria-hidden="true">
          <Logo size="xl" />
        </div>

        <div className="footer__grid">
          {NAV.map((group) => (
            <div key={group.label}>
              <h4>{group.label}</h4>
              <ul>
                {group.children.map((c) => (
                  <li key={c.to}>
                    <Link to={c.to}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4>Contact us</h4>
            <ul>
              <li>{BRAND.address}</li>
              <li>
                <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </li>
              {BRAND.hours && <li>{BRAND.hours}</li>}
            </ul>
          </div>
        </div>

        <p className="footer__legal">
          &copy; {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.{' '}
          <Link to="/terms-and-conditions">Terms and conditions</Link>
        </p>
      </div>
    </footer>
  );
}
