// Product details come from the existing finmatsacco.co.ke product pages.
// The old site does not publish interest rates for loans, so none are shown here.

export type Fact = { label: string; value: string };
export type Product = {
  name: string;
  blurb: string;
  facts: Fact[];
};

export const SAVINGS: Product[] = [
  {
    name: 'Ventures Saving',
    blurb: 'Your core monthly savings. They set how much you can borrow and earn dividends.',
    facts: [
      { label: 'Minimum monthly contribution', value: 'KES 1,000' },
      { label: 'Loan multiplier', value: 'Counts towards how much you can borrow' },
      { label: 'Dividends', value: 'Earned' },
      { label: 'Withdrawal', value: 'When you withdraw from membership' },
    ],
  },
  {
    name: 'Share Capital',
    blurb: 'Your ownership stake in the sacco.',
    facts: [
      { label: 'Amount', value: 'KES 5,000, payable within 3 months' },
      { label: 'Dividends', value: 'Earned' },
      { label: 'Refund', value: 'Not refundable' },
      { label: 'Transfer', value: 'Can be transferred to another member' },
    ],
  },
  {
    name: 'Jitahidi',
    blurb: 'A savings account that opens up once a year.',
    facts: [
      { label: 'Minimum monthly savings', value: 'KES 500' },
      { label: 'Minimum balance', value: 'KES 500' },
      { label: 'Withdrawal', value: 'Once a year' },
      { label: 'Dividends', value: 'Earned annually' },
    ],
  },
  {
    name: 'Finmat Junior',
    blurb: 'A savings account with a withdrawal every quarter.',
    facts: [
      { label: 'Minimum monthly savings', value: 'KES 500' },
      { label: 'Minimum balance', value: 'KES 500' },
      { label: 'Withdrawal', value: 'Once every quarter' },
    ],
  },
];

export const LOANS: Product[] = [
  {
    name: 'Salaried Loan',
    blurb: 'A loan for members with a regular salary.',
    facts: [
      { label: 'Waiting period', value: '6 months' },
      { label: 'Borrow up to', value: '3 times your savings' },
      { label: 'Repayment', value: '12 months' },
      { label: 'Security', value: 'Guarantee from active members' },
    ],
  },
  {
    name: 'Kuza Biashara Loan',
    blurb: 'Boosts micro and small-scale businesses.',
    facts: [
      { label: 'Waiting period', value: '8 weeks' },
      { label: 'Borrow up to', value: '3 times your savings, to a maximum of KES 100,000' },
      { label: 'Repayment', value: '12 months' },
      { label: 'Security', value: 'Guarantee from active members' },
    ],
  },
  {
    name: 'Education Loan',
    blurb: 'Pay school fees. The money goes directly to the school.',
    facts: [
      { label: 'Eligibility', value: 'Scheme member with 8 weeks of regular savings' },
      { label: 'Borrow up to', value: '3 times your savings' },
      { label: 'Repayment', value: 'Termly, up to 12 months' },
      { label: 'Registration fee', value: 'KES 200' },
    ],
  },
  {
    name: 'Quick Loan',
    blurb: 'A small, fast loan you apply for in the Finmat App.',
    facts: [
      { label: 'How to apply', value: 'Through the Finmat App' },
      { label: 'Borrow up to', value: 'KES 10,000' },
      { label: 'Repayment', value: '1 month' },
    ],
  },
  {
    name: 'Development Loan',
    blurb: 'A larger loan with a longer repayment period, backed by security.',
    facts: [
      { label: 'Waiting period', value: '6 months' },
      { label: 'Minimum savings', value: 'KES 50,000' },
      { label: 'Borrow up to', value: '3 times your savings, to a maximum of KES 300,000' },
      { label: 'Repayment', value: '24 months' },
      { label: 'Security', value: 'Chattels or logbook' },
    ],
  },
  {
    name: 'Asset Finance Loan',
    blurb: 'Buy business products and pay over time.',
    facts: [
      { label: 'Minimum deposit', value: 'KES 15,000' },
      { label: 'Repayment', value: 'Up to 18 months' },
    ],
  },
];

export const INVESTMENTS: Product[] = [
  {
    name: 'Finmat Fixed Deposit',
    blurb: 'Lock money away for a year or more and earn interest on it.',
    facts: [
      { label: 'Minimum deposit', value: 'KES 20,000' },
      { label: 'Interest', value: '1.5% to 2% per month' },
      { label: 'Minimum period', value: '12 months' },
      { label: 'Terms', value: 'Other terms and conditions apply' },
    ],
  },
  {
    name: 'Capital Call',
    blurb: 'A larger investment that earns preferential interest.',
    facts: [
      { label: 'Minimum investment', value: 'KES 100,000' },
      { label: 'Joining fee', value: 'None' },
      { label: 'Interest', value: 'Preferential interest' },
      { label: 'Refund', value: 'Not refundable, but transferable to another member' },
    ],
  },
];
