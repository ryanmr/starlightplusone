// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    starlight({
      title: "Docs",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Components",

          items: [
            { label: "Components", slug: "components" },
            { label: "Buttons", slug: "components/buttons" },
          ],
        },
        {
          label: "Patterns",
          items: [{ label: "Patterns", slug: "patterns" }],
        },
        {
          label: "Scenarios",
          items: [{ label: "Scenarios", slug: "scenarios" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      components: {
        Hero: "./src/astro/overrides/Hero.astro",
        ContentPanel: "./src/astro/overrides/ContentPanel.astro",
        PageTitle: "./src/astro/overrides/PageTitle.astro",
        Footer: "./src/astro/overrides/Footer.astro",
      },
    }),
    react({
      // experimentalReactChildren: true,
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
