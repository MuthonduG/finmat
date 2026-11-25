// People and bios come from the existing finmatsacco.co.ke board and supervisory committee pages.
// TODO: add a `photo` path (for example '/team/henry-ozianyi.jpg') to show portraits instead of initials.

export type Person = {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
};

export const BOARD: Person[] = [
  {
    name: 'Henry Ozianyi',
    role: 'Chairman',
    bio: 'A Certified Public Accountant and Certified Financial Education Instructor with over 20 years in banking, including as Regional CFO for IT and Operations in Africa at an international bank. He has trained over 40,000 people in financial literacy across East Africa and has received the SCB CEO CSR Award and the Africa CFO Award. A founding member of Finmat Sacco, he has served on the board since 2019. He holds a Bachelor of Commerce (Accounting) from Kenyatta University and is pursuing an MBA at the University of Nairobi.',
  },
  {
    name: 'Chrisuntus Waswa',
    role: 'Vice Chairman',
  },
  {
    name: 'Nelius Wangui',
    role: 'Honorable Secretary',
    bio: 'Over 15 years of experience in banking, risk management and digital transformation. As Board Secretary she oversees governance, documentation and communication between the board and members. Her work focuses on supporting SMEs, youth programmes and digital skills training.',
  },
  {
    name: 'Jacinta Muriithi',
    role: 'Board member',
    bio: 'Over 20 years in financial services, vendor relations, finance and sacco operations. Known for streamlining processes, managing multi-country operations and leading customer service teams. She holds diplomas in Banking and in Business Management.',
  },
  {
    name: 'Dickson Abuka',
    role: 'Board member',
    bio: 'Holds a Bachelor of Arts in Economics and Mathematics from the University of Nairobi and has knowledge of data science. He has experience in sacco governance and credit administration, and focuses on operations, data systems and automation to improve efficiency and governance.',
  },
  {
    name: 'Silas Omondi Ogongo',
    role: 'Board member',
    bio: 'An accountant at Elians Ltd, a pharmaceutical company in Kisumu, and a CPA Part IV student with over six years of accounting and auditing experience. He also handles bookkeeping for Ahero Irrigation Co-operative Society and has served on the sacco board in various roles for the past four years.',
  },
];

export const SUPERVISORY: Person[] = [
  {
    name: 'Silas Wanyama',
    role: 'Chairman, Supervisory Committee',
    bio: 'An experienced banker with 26 years of service and a degree in Economics and Sociology from the University of Nairobi. He joined Standard Chartered Bank in 1993 in the supplies department, moved to Operations and rose to a managerial role in Risk and Compliance. He has been active in sacco supervisory roles for more than four years.',
  },
  {
    name: 'Modestar Wiyema',
    role: 'Secretary, Supervisory Committee',
    bio: 'Over 20 years in financial services, with leadership in banking operations, risk and compliance, customer service and governance. He focuses on aligning sacco objectives with member needs, promoting financial sustainability and transparency, and supporting compliance with laws and best practice.',
  },
  {
    name: 'Francisca Kamene',
    role: 'Member, Supervisory Committee',
    bio: 'A results-oriented financial analyst and debt consultant with over five years of experience in risk management, accounts receivable and credit control. Her expertise covers financial planning, debt portfolios and cash flow, and she has two years of experience in sacco supervisory roles.',
  },
];
