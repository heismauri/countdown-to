import { type Event } from "@/types/event";

export { default as logo } from "@/assets/strange-muse-logo.png";

export const preOrderUrl = "https://nmixx.lnk.to/StrangeMuse";

const backgroundVideoId = "k6K0UadWsL0";

export const releaseTimestamp = new Date("2026-10-19T18:00:00+09:00").getTime();

export const events: Event[] = [
  {
    timestamp: new Date("2026-09-23T22:00:00+09:00").getTime(),
    label: '"Strange Muse" Motion Poster'
  },
  {
    timestamp: new Date("2026-09-28T22:00:00+09:00").getTime(),
    label: '"Strange Muse" Album Trailer'
  },
  {
    timestamp: new Date("2026-09-29T00:00:00+09:00").getTime(),
    label: "Concept Photo: Muse Ver."
  },
  {
    timestamp: new Date("2026-09-30T00:00:00+09:00").getTime(),
    label: "Concept Photo: Strange Ver."
  },
  {
    timestamp: new Date("2026-10-11T22:00:00+09:00").getTime(),
    label: "A Capella Highlight Medley (Choir Ver.)"
  },
  {
    timestamp: new Date("2026-10-15T22:00:00+09:00").getTime(),
    label: "Original Highlight Medley"
  },
  {
    timestamp: new Date("2026-10-18T00:00:00+09:00").getTime(),
    label: '"Birthday Wish" M/V Teaser'
  },
  {
    timestamp: new Date("2026-12-09T00:00:00+09:00").getTime(),
    label: "N=MIXX Japanese debut"
  }
].sort((a, b) => a.timestamp - b.timestamp);

const backgroundVideoParams = new URLSearchParams({
  autoplay: "1",
  mute: "1",
  loop: "1",
  playlist: backgroundVideoId,
  controls: "0",
  rel: "0",
  playsinline: "1",
  disablekb: "1",
  fs: "0",
  iv_load_policy: "3",
  modestbranding: "1"
});

export const backgroundVideoUrl = `https://www.youtube.com/embed/${backgroundVideoId}?${backgroundVideoParams}`;
