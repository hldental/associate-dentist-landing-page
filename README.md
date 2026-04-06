# Associate Dentist Landing Page

## Run locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

## Files
- `app/page.tsx` – landing page
- `app/thank-you/page.tsx` – thank-you page after form submission
- `app/api/apply/route.ts` – placeholder POST endpoint
- `app/globals.css` – base styles

## Notes
- The hero image currently uses a remote rural landscape image.
- To make the image truly Westphalia-specific, replace the image URL in `app/page.tsx` with a licensed local image or one you own.
- The form currently logs submissions server-side and redirects to `/thank-you`.
- A developer can replace the API route with HubSpot, Zapier, email, an ATS, or a CRM.
