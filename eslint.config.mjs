import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "tailwind.config.ts",
    "components/ui/CanvasRevealsEffect.tsx",
    "components/ui/GridGlobe.tsx",
    "components/ui/globe.tsx",
    "components/ui/background-gradient-animation.tsx",
    "components/ui/bento-grid.tsx",
    "components/ui/infinite-moving-cards.tsx",
    "components/ui/Pin.tsx",
    "components/ui/text-generate-effect.tsx",
    "components/ui/spotlight.tsx",
    "components/ui/magicButton.tsx",
  ]),
]);

export default eslintConfig;
