// Titles, dates and links come from the existing finmatsacco.co.ke blog. Excerpts are short summaries.
// The full posts still live on the old site. When you move them across, replace `url` with an internal route.
// The old blog has more pages of posts than the ten listed here.

export type Post = {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  url: string;
};

const base = 'https://www.finmatsacco.co.ke';

export const POSTS: Post[] = [
  {
    title: 'Welcome to the 7th Finmat Sacco AGM',
    date: 'Aug 2026',
    author: 'Henry Ozianyi',
    excerpt: 'A welcome to members for the seventh annual general meeting of Finmat Sacco.',
    url: `${base}/welcome-to-the-7th-finmat-sacco-agm/`,
  },
  {
    title: 'From Pressure to Peace: How Financial Discipline Reduces Stress',
    date: 'Feb 2026',
    author: 'Henry Ozianyi',
    excerpt: 'Unexpected costs, debt and irregular income create stress. Steady saving and responsible borrowing can ease it.',
    url: `${base}/from-pressure-to-peace-how-financial-discipline-reduces-stress/`,
  },
  {
    title: 'Borrowing with Wisdom: When a Loan Helps, and When It Hurts',
    date: 'Jan 2026',
    author: 'Henry Ozianyi',
    excerpt: 'Loans can help you reach goals but cause stress when misused. Know why you need one and how you will repay it.',
    url: `${base}/borrowing-with-wisdom-when-a-loan-helps-and-when-it-hurts/`,
  },
  {
    title: 'Saving with Intention: Why Small Consistent Amounts Beat Big Promises',
    date: 'Jan 2026',
    author: 'Henry Ozianyi',
    excerpt: 'Regular small savings often do better than occasional large deposits.',
    url: `${base}/saving-with-intention-why-small-consistent-amounts-beat-big-promise/`,
  },
  {
    title: 'Reflecting on the Year 2025: A Thank You to Our Finmat Sacco Family',
    date: 'Jan 2026',
    author: 'Henry Ozianyi',
    excerpt: 'A year-end reflection thanking members for the journey taken together.',
    url: `${base}/reflecting-on-the-year-2025-a-thank-you-to-our-finmat-sacco-family/`,
  },
  {
    title: 'Purposeful Money: Why True Financial Growth Begins with Values',
    date: 'Jan 2026',
    author: 'Henry Ozianyi',
    excerpt: 'Lasting financial growth starts with personal values, even when fast loans and instant wealth are on offer.',
    url: `${base}/purposeful-money-why-true-financial-growth-begins-with-values/`,
  },
  {
    title: '“Next Year” Is Not a Savings Plan',
    date: 'Dec 2025',
    author: 'Henry Ozianyi',
    excerpt: 'For members who keep postponing saving to the following year: start now.',
    url: `${base}/next-year-is-not-a-savings-plan/`,
  },
  {
    title: 'When Life Throws Floods and Fires',
    date: 'Nov 2025',
    author: 'Henry Ozianyi',
    excerpt: 'Finmat Sacco supports members through disasters, so they do not face them alone.',
    url: `${base}/when-life-throws-floods-and-fires/`,
  },
  {
    title: 'Happy Customer Service Week 2025',
    date: 'Oct 2025',
    author: 'Henry Ozianyi',
    excerpt: 'Celebrating Customer Service Week and the idea that good service helps members and the community grow.',
    url: `${base}/customer-service-week-2025/`,
  },
  {
    title: 'Successful Board Training on SACCO Compliance and Investment Strategies',
    date: 'Aug 2025',
    author: 'Henry Ozianyi',
    excerpt: 'A report on the board training held on 7 August 2025, led by a Ministry of Cooperatives officer.',
    url: `${base}/successful-board-training-on-sacco-compliance-and-investment-strategies/`,
  },
];
