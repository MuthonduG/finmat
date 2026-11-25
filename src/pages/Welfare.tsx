import { BRAND } from '../config';
import PageHero from '../components/PageHero';
import { usePageTitle } from '../usePageTitle';

export default function Welfare() {
  usePageTitle('Finmat Friends Welfare');
  return (
    <>
      <PageHero
        title="Finmat Friends Welfare"
        crumb="Finmat Friends Welfare"
        lead="A member-run group that stands with members and their families when they need it most."
      />
      <section className="page-body">
        <div className="container welfare">
          <p className="welfare__pull">
            It began in 2020, when members from the Ahero region, all Finmat Sacco members, came together to improve each other&rsquo;s socio-economic lives.
          </p>

          <div className="welfare__cols">
            <div>
              <h2>What it does</h2>
              <p>
                The welfare helps members through bereavement. In practice that has meant sending condolences, attending burials and offering psychological support.
              </p>
              <p>
                Members have also come together for other needs, such as helping a child gain admission to secondary school and supporting a dowry arrangement. These are examples from past events, not a fixed list of benefits.
              </p>
            </div>
            <div>
              <h2>Who it is for</h2>
              <p>Joining is not compulsory. The welfare is for willing Finmat Sacco members.</p>
              <p>
                It runs on mutual commitment and a code of ethics, and an interim office directs its affairs. It was officially launched during a visit to Kitale.
              </p>
            </div>
            <div>
              <h2>How to join</h2>
              <p>
                Contribution amounts and benefits are not published here. Call {BRAND.phone} or email {BRAND.email} to ask how to take part.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
