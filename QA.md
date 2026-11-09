# Validation notes

## Passed

- TypeScript: `npm run typecheck`.
- ESLint: `npm run lint`.
- Production build: `npm run build`.
- Nine automated tests cover next/previous navigation, wraparound, repeated input, single/empty decks, drag thresholds, fast flicks, and direction precedence.
- Desktop visual inspection of hero, project deck, project dialog, and contact footer.
- Responsive browser inspection in 390 px and 320 px iframe viewports. No horizontal document overflow; navigation and project cards remain usable.
- Card navigation by buttons, indicators, repeated keyboard arrows, and pointer drag at phone layout width.
- Native dialog repeated open/close, Escape dismissal, focus return, and body-scroll restoration.
- Mobile menu opens, navigation selection closes it, and desktop breakpoint hides the mobile menu.
- Contact copy success feedback and original mailto/social destinations.
- Original project data preserved byte-for-byte from the prior redesign. Original CV and four project screenshots retained.
- Custom Blender model and two final render angles visually inspected. GLB contains the actual modeled object.
- Unsupported-WebGL fallback: the hero retains the Blender render rather than showing an empty canvas.

## Verification limits

- The available browser has WebGL/GPU rendering disabled. Interactive GLB rotation on a WebGL2-enabled device could not be visually verified. The viewer is optional, lazy-loaded, guarded by WebGL2 detection, and has an error fallback. The main portfolio does not depend on it.
- Phone layouts were checked in real browser iframe viewports with pointer drag, not on physical iOS/Android touch devices.
- Reduced-motion behavior was checked in source/CSS, not through OS-level preference emulation.
- External project applications, GitHub destinations, and the existing Hiji architecture link were preserved; their availability/authentication state was not changed or end-to-end tested.
- No remote repository push or deployment was performed.
