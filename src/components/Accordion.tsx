import { useState } from 'react';
import type { Faq } from '../data/faqs';
import { PlusIcon } from './Icons';

type AccordionProps = {
  items: Faq[];
  idPrefix: string;
  defaultOpen?: number | null;
};

export default function Accordion({ items, idPrefix, defaultOpen = null }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="faq__list">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`acc ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button
                type="button"
                className="acc__btn"
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-panel-${i}`}
                id={`${idPrefix}-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{f.q}</span>
                <PlusIcon className="acc__icon" />
              </button>
            </h3>
            <div className="acc__panel" id={`${idPrefix}-panel-${i}`} role="region" aria-labelledby={`${idPrefix}-btn-${i}`}>
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
