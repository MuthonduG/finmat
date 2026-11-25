// Site-wide settings. Items marked TODO are things to confirm before launch.

export const BRAND = {
  name: 'finmat',
  fullName: 'Finmat Sacco',
  tagline: 'Be financially independent',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gindow.taji',
  // TODO: replace with the real App Store link. Until then the button points to the page's download section.
  appStoreUrl: '/#get-app',
  email: 'info@finmatsacco.co.ke',
  phone: '+254 740 031 050',
  address: 'Norwich Union Building, 4th Floor, New Wing, Room 22, Nairobi, Kenya',
  // TODO: the old site shows two different sets of office hours (Mon-Sat 8am-5pm in the header,
  // Mon-Fri 9am-5pm in the footer). Set the correct one here, for example 'Mon to Fri, 9:00am to 5:00pm'.
  // While this is null, no hours are shown.
  hours: null as string | null,
  // TODO: add the URL of the membership registration form. While null, the page shows call and email buttons instead.
  membershipFormUrl: null as string | null,
  // The existing site, used for blog posts that have not been moved across yet.
  oldSiteUrl: 'https://www.finmatsacco.co.ke',
};

// TODO: the old Terms page has "[Jurisdiction]" unfilled in its governing-law clause.
// Set this (for example 'Kenya') and the clause appears on the Terms page. While null the clause is left out.
export const GOVERNING_LAW: string | null = null;

export type NavLinkItem = { label: string; to: string };
export type NavGroup = { label: string; children: NavLinkItem[] };

export const NAV: NavGroup[] = [
  {
    label: 'About',
    children: [
      { label: 'Board members', to: '/board' },
      { label: 'Supervisory committee', to: '/supervisory-committee' },
      { label: 'Finmat Friends Welfare', to: '/welfare' },
    ],
  },
  {
    label: 'Products',
    children: [
      { label: 'Savings products', to: '/savings-products' },
      { label: 'Loan products', to: '/loan-products' },
      { label: 'Investment products', to: '/investment-products' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'FAQs', to: '/faqs' },
      { label: 'Blog', to: '/blog' },
      { label: 'Terms and conditions', to: '/terms-and-conditions' },
    ],
  },
];

export const STEPS = [
  {
    title: 'Apply to join',
    text: 'Complete the membership application, show your identification and pay the registration fee.',
  },
  {
    title: 'Start saving',
    text: 'Pay your share capital of KES 5,000 (you have 3 months) and begin your monthly savings.',
  },
  {
    title: 'Borrow when you qualify',
    text: 'Loans open after a waiting period of 8 weeks to 6 months, depending on the loan. Quick Loans are applied for in the Finmat App.',
  },
];
