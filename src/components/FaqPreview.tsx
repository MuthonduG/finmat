import { Link } from 'react-router-dom';
import { HOME_FAQS } from '../data/faqs';
import Accordion from './Accordion';

export default function FaqPreview() {
  return (
    <section className="section section--alt" id="faq">
      <div className="container faq">
        <div className="faq__intro">
          <h2>Questions members ask</h2>
          <p>Short answers to the most common questions about joining, borrowing and leaving.</p>
          <Link to="/faqs" className="link-more">
            Read all the FAQs
          </Link>
        </div>

        <Accordion items={HOME_FAQS} idPrefix="home-faq" defaultOpen={0} />
      </div>
    </section>
  );
}
