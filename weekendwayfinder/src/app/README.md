# WeekendWayfinder Angular App Structure

This app follows a modular, component-driven architecture suited for extensibility and responsive design.

## Included Pages/Components

- **Sign-In Page**: `/sign-in` — visually appealing sign-in form with validation and scenic background.
- **Home Page**: `/home` — welcoming message, app branding, prominent CTA to trip planner.
- **Trip Planner**: `/trip-planner` — interactive forms for preferences and dynamic suggestion cards (stub).
- **Theme/Styles**: All pages use the defined color palette (`primary`: #2D5F5D, `secondary`: #F7C873, `accent`: #F25C54) with global CSS variables set in `styles.css`.

## Navigation

All navigation is configured in `app.routes.ts` and handled via Angular router. Users land on Sign-In by default.

## Responsiveness

Responsive layouts and cards are implemented so the UI stays fluid across devices.

## How To Extend

- Add new pages by creating new components and updating `app.routes.ts`.
- Update theming in `styles.css`.

---
