// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Space Mono",
      cssVariable: "--font-space-mono",
      weights: [400, 700],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      display: "swap"
    }
  ],
  integrations: [react()],
  site: "https://countdown.heismauri.com",
  vite: {
    plugins: [tailwindcss()]
  }
});
