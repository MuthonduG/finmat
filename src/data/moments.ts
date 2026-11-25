export type Pick = {
  kind: 'Loan' | 'Savings' | 'Investment' | 'Welfare';
  name: string;
  detail: string;
  to: string;
};

export type Moment = {
  id: string;
  label: string;
  intro: string;
  picks: Pick[];
};

export const MOMENTS: Moment[] = [
  {
    id: 'business',
    label: 'Grow my business',
    intro: 'Two finmat loans are made for business.',
    picks: [
      {
        kind: 'Loan',
        name: 'Kuza Biashara Loan',
        detail: 'Up to KES 100,000 over 12 months, after 8 weeks of saving.',
        to: '/loan-products',
      },
      {
        kind: 'Loan',
        name: 'Asset Finance Loan',
        detail: 'Buy business products with a KES 15,000 deposit and up to 18 months to repay.',
        to: '/loan-products',
      },
    ],
  },
  {
    id: 'school',
    label: 'Pay school fees',
    intro: 'Borrow for fees, or save for them in advance.',
    picks: [
      {
        kind: 'Loan',
        name: 'Education Loan',
        detail: 'Paid directly to the school. Repay termly, up to 12 months, with a KES 200 registration fee.',
        to: '/loan-products',
      },
      {
        kind: 'Savings',
        name: 'Finmat Junior',
        detail: 'Save from KES 500 a month and withdraw once every quarter.',
        to: '/savings-products',
      },
    ],
  },
  {
    id: 'quick',
    label: 'Cover something small, fast',
    intro: 'For a small need that cannot wait.',
    picks: [
      {
        kind: 'Loan',
        name: 'Quick Loan',
        detail: 'Up to KES 10,000 for one month, applied for in the Finmat App.',
        to: '/loan-products',
      },
    ],
  },
  {
    id: 'build',
    label: 'Build or buy something big',
    intro: 'Save steadily, then borrow against it.',
    picks: [
      {
        kind: 'Savings',
        name: 'Ventures Saving',
        detail: 'Save from KES 1,000 a month. It counts towards how much you can borrow.',
        to: '/savings-products',
      },
      {
        kind: 'Loan',
        name: 'Development Loan',
        detail: 'Up to KES 300,000 over 24 months, with KES 50,000 in savings and security.',
        to: '/loan-products',
      },
    ],
  },
  {
    id: 'grow',
    label: 'Grow my money',
    intro: 'Two ways to invest with finmat.',
    picks: [
      {
        kind: 'Investment',
        name: 'Finmat Fixed Deposit',
        detail: 'From KES 20,000 for at least 12 months, at 1.5% to 2% per month.',
        to: '/investment-products',
      },
      {
        kind: 'Investment',
        name: 'Capital Call',
        detail: 'From KES 100,000 with no joining fee, earning preferential interest.',
        to: '/investment-products',
      },
    ],
  },
  {
    id: 'together',
    label: 'Stand with family in hard times',
    intro: 'Members look after each other.',
    picks: [
      {
        kind: 'Welfare',
        name: 'Finmat Friends Welfare',
        detail: 'A member-run group that supports members through bereavement. Joining is optional.',
        to: '/welfare',
      },
    ],
  },
];
