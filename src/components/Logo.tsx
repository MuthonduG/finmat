type LogoProps = {
  size?: 'md' | 'xl';
};

/** The name is the logo: a lowercase wordmark closed with a red square full stop. */
export default function Logo({ size = 'md' }: LogoProps) {
  return (
    <span className={`logo logo--${size}`} aria-label="finmat">
      <span className="logo__word" aria-hidden="true">
        finmat
      </span>
      <span className="logo__dot" aria-hidden="true" />
    </span>
  );
}
