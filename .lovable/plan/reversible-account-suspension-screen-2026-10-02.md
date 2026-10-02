# Reversible account suspension screen

## Goal

Temporarily replace every public page with one polished suspension notice while preserving the complete website, routes, forms, tracking setup, and content for immediate restoration.

## What will change

1. Create a dedicated full-screen suspension view in the existing dark/orange visual style.
2. Show neutral, professional wording:
   - **Account Suspended**
   - “This service is temporarily unavailable.”
   - “If you are the account owner, please contact your administrator or billing department to resolve this matter and restore service.”
3. Add a single clearly named suspension switch at the top application level. While enabled, it returns only the suspension view before the normal router and page layout render.
4. Add page metadata instructing search engines not to index the temporary notice.
5. Make the notice responsive and accessible across desktop and mobile, with restrained entrance animation that respects reduced-motion settings.

## Restoration safety

- No existing pages, routes, forms, content, assets, menus, tracking, or build configuration will be deleted or rewritten.
- The normal website remains directly behind one isolated switch.
- Restoration requires changing that one switch back and republishing; no reconstruction or file recovery is needed.

## Verification

- Confirm the homepage and a deep URL both display only the suspension notice.
- Confirm the original header, footer, page content, forms, and phone links are not mounted behind the notice.
- Confirm layout and text fit at desktop and mobile sizes.
- Confirm the current build completes without errors.
