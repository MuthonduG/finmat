// Questions and answers follow the existing finmatsacco.co.ke FAQ page.
// TODO: the answers read as general sacco guidance. Check each one matches Finmat Sacco's own rules.

export type Faq = { q: string; a: string };
export type FaqCategory = { id: string; title: string; items: Faq[] };

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'membership',
    title: 'Membership',
    items: [
      {
        q: 'Who can join?',
        a: 'Individuals, groups and organisations that meet the eligibility criteria, such as sector of employment or region of residence.',
      },
      {
        q: 'How do I become a member?',
        a: 'Complete a membership application, provide identification and pay the registration fee.',
      },
      {
        q: 'Can I belong to more than one sacco?',
        a: 'Yes, as long as you meet the requirements of each sacco.',
      },
    ],
  },
  {
    id: 'savings',
    title: 'Savings and deposits',
    items: [
      {
        q: 'What savings accounts are offered?',
        a: 'Shares, which are the minimum capital needed for membership, regular monthly savings, and fixed deposits that earn higher interest on money you lock in.',
      },
      {
        q: 'Can I withdraw my savings at any time?',
        a: 'Regular savings can be accessed under set terms. Shares, and deposits used as security for a loan, cannot be withdrawn unless you leave the sacco.',
      },
      {
        q: 'What if I stop contributing?',
        a: 'Your account stays open, but long periods without contributions may lead to penalties or dormancy.',
      },
    ],
  },
  {
    id: 'loans',
    title: 'Loans',
    items: [
      {
        q: 'What loans are offered?',
        a: 'Emergency, development, business, school fees, agricultural, and quick or digital loans. See the loan products page for the current list and terms.',
      },
      {
        q: 'How do I qualify?',
        a: 'Be an active member with the required savings, and meet the guarantor or collateral requirements for the loan.',
      },
      {
        q: 'How much can I borrow?',
        a: 'It depends on your savings, your ability to repay and the type of loan. Members can typically borrow up to three times their savings.',
      },
      {
        q: 'What is the interest rate?',
        a: 'It varies by loan type and is generally lower than bank rates. Contact us for the current rate on the loan you want.',
      },
      {
        q: 'Can I top up my loan?',
        a: 'Yes. Eligible members with a good repayment history can top up.',
      },
      {
        q: 'Can I hold more than one loan?',
        a: 'Yes, depending on your savings. Members with a good repayment history may hold different loan types at the same time, such as business, education and quick loans.',
      },
    ],
  },
  {
    id: 'repayment',
    title: 'Loan repayment',
    items: [
      {
        q: 'How do I repay?',
        a: 'Through payroll deduction if you are employed, by M-Pesa Paybill, or by bank deposit.',
      },
      {
        q: 'What happens if I default?',
        a: 'You and your guarantors are notified. Persistent default can lead to recovery action, including deductions from your guarantors’ savings.',
      },
      {
        q: 'Can I repay early?',
        a: 'Yes, without penalty.',
      },
    ],
  },
  {
    id: 'exit',
    title: 'Withdrawals and leaving',
    items: [
      {
        q: 'How do I withdraw from membership?',
        a: 'Submit a written request after you have cleared all outstanding loans. Shares and deposits are refunded under sacco policy.',
      },
      {
        q: 'How long does it take?',
        a: 'About 30 to 60 days, depending on sacco regulations.',
      },
      {
        q: 'What happens when a member dies?',
        a: 'A nominated beneficiary receives the member’s savings, and insurance may settle outstanding loans.',
      },
    ],
  },
  {
    id: 'dividends',
    title: 'Dividends and interest',
    items: [
      {
        q: 'Do members earn dividends?',
        a: 'Yes. Members earn annual dividends on share capital and interest rebates on savings, depending on the sacco’s performance.',
      },
      {
        q: 'When are dividends paid?',
        a: 'Usually once a year, after the Annual General Meeting.',
      },
    ],
  },
  {
    id: 'operations',
    title: 'About the sacco',
    items: [
      {
        q: 'Is the sacco regulated?',
        a: 'Yes. Saccos are regulated by SASRA, the Sacco Societies Regulatory Authority, and follow government regulations.',
      },
      {
        q: 'How can I contact the sacco?',
        a: 'Visit the office, call, email or reach us on social media. The contact details are at the bottom of every page.',
      },
    ],
  },
];

export const SHARE_CAPITAL_EXPLAINER = {
  title: 'What is share capital?',
  text: 'Share capital is your ownership stake in the sacco. You cannot withdraw it while you remain a member, it earns dividends that are set at the AGM, and there is a minimum share requirement. For example, 50 shares at KES 100 each come to KES 5,000.',
};

// A short selection shown on the home page.
export const HOME_FAQS: Faq[] = [
  FAQ_CATEGORIES[0].items[1],
  FAQ_CATEGORIES[2].items[1],
  FAQ_CATEGORIES[2].items[2],
  FAQ_CATEGORIES[3].items[2],
  FAQ_CATEGORIES[6].items[0],
];
