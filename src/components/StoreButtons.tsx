import { BRAND } from '../config';
import { PhoneIcon, PlayIcon } from './Icons';

export default function StoreButtons() {
  const external = BRAND.appStoreUrl.startsWith('http');
  return (
    <div className="stores">
      <a className="store" href={BRAND.playStoreUrl} target="_blank" rel="noreferrer">
        <PlayIcon className="store__icon" />
        <span className="store__text">
          <small>Get it on</small>
          <strong>Google Play</strong>
        </span>
      </a>
      <a
        className="store"
        href={BRAND.appStoreUrl}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        <PhoneIcon className="store__icon" />
        <span className="store__text">
          <small>Download on the</small>
          <strong>App Store</strong>
        </span>
      </a>
    </div>
  );
}
