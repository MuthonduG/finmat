import StoreButtons from './StoreButtons';

export default function DownloadCta() {
  return (
    <section className="section cta-section" id="get-app">
      <div className="container">
        <div className="cta">
          <div className="cta__rings" aria-hidden="true" />
          <h2>Take your sacco with you</h2>
          <p>Download the finmat app to apply for a Quick Loan and manage your account wherever you are.</p>
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}
