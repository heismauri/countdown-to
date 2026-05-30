# countdown-to

A customizable countdown and timetable site. Point it at any event, for example, an album release, a holiday, a product launch, a gift reveal, etc., and it counts down to it with a scrollable schedule of sub-events.

Currently deployed as a fan countdown for NMIXX's *Heavy Serenade* at [nmixx.heismauri.com](https://nmixx.heismauri.com).

## Features

- Countdown timer to a main target date
- Timetable of scheduled sub-events
- Past events are automatically removed from the timetable
- Background video from a YouTube embed
- Responsive layout with a scrollable event list on larger screens

## Tech stack

- [Astro](https://astro.build) — static site framework
- [React](https://react.dev) — interactive countdown and timetable components
- [Tailwind CSS](https://tailwindcss.com) — styling

## Getting started

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # output to ./dist/
pnpm preview    # preview the build locally
```

## Customizing for a new event

1. Update the site title and description in `src/consts.ts`
2. Set the main countdown timestamp in `src/components/Timetable.tsx`
3. Add or edit entries in the `timetable` array in `src/pages/index.astro`
4. Swap the background video URL in `src/pages/index.astro`
5. Replace the logo/image in `src/assets/`

Each timetable entry is an `Event`:

```ts
{ timestamp: new Date("25 Dec 2026 00:00:00 AM GMT+0").getTime(), label: "Gift reveal" }
```

Past events are filtered out client-side — no manual cleanup needed.
