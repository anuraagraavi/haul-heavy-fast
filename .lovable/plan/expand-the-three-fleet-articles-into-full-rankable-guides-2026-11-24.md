# Expand the three fleet articles into full, rankable guides

## Goal
Grow each article from roughly 350 to 420 words to about 1,100 to 1,400 words of practical, trade accurate guidance, written in a human professional voice, with no hyphens or dashes, and only facts that are verified or confirmed by the business.

## Fact rule (EEAT)
- Regulatory and road facts (Caltrans permit rules, escort thresholds, travel time restrictions, CHP tow rotation, legal truck dimensions) get checked against official sources (Caltrans, CHP, California Vehicle Code) before they go in. Anything I cannot confirm is left out rather than guessed.
- Business claims (rotators, lowboys, response times, fleet accounts) stay limited to what the site already states. No invented numbers, case studies or testimonials.
- Article copy should advise readers to confirm current rules with Caltrans or CHP where rules change.

## Article 1: Jackknifed Semi on Interstate 880
- New section: the I 880 corridor, covering Port of Oakland access, San Leandro, Hayward and Fremont, written as general context and not as incident claims.
- New section: why you should not drive out of a jackknife, covering air lines, spring brakes, fifth wheel and kingpin damage, and fuel tank leaks.
- New section: CHP rotation tows versus a carrier requesting its own provider, using verified wording only.
- New table: empty dry van versus loaded container versus tanker, comparing likely equipment, typical complexity and lane impact. Kept qualitative, with no promised clearance times.
- FAQ grows from 2 to 5 questions.

## Article 2: California Oversize Load Permits
- New section: single trip versus annual permits and how to apply through Caltrans.
- New table: legal limits, permit range and when escorts may be required, using verified Caltrans figures.
- New section: Bay Area travel time restrictions, included only if verified.
- New section: trailer choice for equipment (flatbed, step deck, RGN or removable gooseneck lowboy), linked to the equipment transport and heavy duty pages.
- New section: city street permits versus state highway permits.
- FAQ grows to 5 questions.

## Article 3: Box Truck Breakdown Checklist
- New sections: liftgate failure, DEF or emissions derate, overheating in stop and go bridge traffic, and low clearance awareness.
- New section: protecting the cargo, covering transfers, photos and paperwork for delivery fleets.
- New block: a short driver checklist that dispatch managers can print or forward.
- New section: urban street breakdowns versus freeway breakdowns.
- New table: loaded versus empty, and wheel lift versus flatbed, comparing considerations.
- FAQ grows to 5 questions, with stronger links to /box-truck-towing and /commercial-fleet-towing.

## For all three
- Update read time, dateModified, table of contents and meta descriptions where the scope changed.
- FAQ schema updates automatically from the expanded FAQ lists. Check that the Article and FAQ structured data still validate.
- Add descriptive internal links to the matching commercial service pages and two or three relevant city pages.

## Quality checks
- Scan all new visible copy for hyphens, en dashes and em dashes, and for common AI phrasing ("in today's fast paced", "navigate", "seamless", "delve", "game changer", "rest assured", "unlock").
- Read each article in the browser at desktop and mobile sizes. Confirm there is one H1, the tables scroll properly on mobile, the table of contents anchors work, and the FAQ renders.
- Typecheck and build checks pass.

## Technical details
- Content stays in `src/data/fleetArticles.ts`. Extend the section type with an optional `table: { caption; headers: string[]; rows: string[][] }`, an optional `subheadings`, and an optional printable `checklist` title.
- Render tables in `src/pages/blog/FleetArticlePage.tsx` (or the current renderer) with an overflow wrapper, a dark theme with an orange header accent, and semantic `<table>`/`<th scope>` markup.
- No new routes, so the sitemap stays unchanged apart from `lastmod` if present.

## Needs confirmation from the business (will be omitted until confirmed)
- Whether you hold any fleet or account agreements to mention.
- Whether oversize permits are handled for the customer or the customer must pull their own.
