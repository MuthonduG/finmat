# Finmat Sacco website

React + TypeScript + Vite, with React Router. Dark mode is black and red, light mode is white and red. The theme follows the visitor's system setting and can be switched from the nav.

## Run it

```bash
npm install
npm run dev      # local development
npm run build    # production build in dist/
npm run preview  # serve the production build
```

Because the site uses real page URLs, your host must send every path to `index.html` (a "single-page app fallback"). Netlify, Vercel and Cloudflare Pages can do this with a one-line setting or a `_redirects` file containing `/*  /index.html  200`. On Apache or Nginx, add an equivalent rewrite rule.

## Pages

| Page | Route | Old URL |
| --- | --- | --- |
| Home | `/` | `/` |
| Board members | `/board` | `/board-members-2/` |
| Supervisory committee | `/supervisory-committee` | `/board-members/` |
| Savings products | `/savings-products` | same |
| Loan products | `/loan-products` | same |
| Investment products | `/investment-products` | same |
| FAQs | `/faqs` | `/faqs/` |
| Blog | `/blog` | `/blog/` |
| Terms and conditions | `/terms-and-conditions` | same |
| Finmat Friends Welfare | `/welfare` | `/welfare/` |

On the old site the two board URLs were the wrong way round (`board-members-2` was the board). The new site redirects both old URLs to the right pages. If the new site takes over the old domain, also set up permanent (301) redirects on the server for the other old URLs you want to keep.

## Where the content lives

Edit content in `src/data/` and `src/config.ts`. No page needs code changes for a wording fix.

- `config.ts`: contact details, store links, navigation, join steps
- `data/products.ts`: savings, loan and investment products
- `data/moments.ts`: the goal picker on the home page
- `data/people.ts`: board and supervisory committee
- `data/faqs.ts`, `data/blog.ts`, `data/terms.ts`

## Confirm before launch

- `BRAND.appStoreUrl`: add the real App Store link.
- `BRAND.hours`: the old site shows two conflicting sets of hours. Set the correct one. Until then none are shown.
- `BRAND.membershipFormUrl`: add the registration form link. Until then the join section shows call and email buttons.
- `GOVERNING_LAW`: the old Terms page left "[Jurisdiction]" blank. Set it and the clause appears.
- `data/terms.ts`: the Terms wording is a plain-language summary. Replace it with the exact approved legal text.
- `data/faqs.ts`: the answers read as general sacco guidance. Check each against Finmat's own rules.
- Fixed Deposit interest: the old site says 1.5% to 2% per month. Confirm it is not per year.
- Ventures Saving withdrawal: the old page says both "withdrawable" and "only on leaving membership". The new page uses the second.
- `data/people.ts`: add a `photo` path per person to show portraits. Chrisuntus Waswa has no biography yet.
- `data/blog.ts`: posts link back to the old site. Replace each `url` once the posts are moved. The old blog has more pages than the ten listed.

The balance and transactions inside the phone mockup are sample data.
# finmat
