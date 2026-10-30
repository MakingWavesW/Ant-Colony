# Setup and validation

## Preserved source

Imported on 2026-10-30 from `UNDERROOT_Phase3_Smart_Gathering.zip`. That archive contains one file, `UNDERROOT_Phase3_Smart_Gathering.html`, copied byte-for-byte to the repository as `index.html`.

SHA-256 of both original HTML and repository `index.html`:

```text
f6773c786c5d6a0c3236e9b457719a1a56ea26a92164a6682568ac3965626637
```

`WILD_FRONTIER_PLAN.md` is an unchanged copy of the saved Wild Frontier master brief. It describes requested future development, including dual-platform packages and rewarded ads. Importing that brief does not implement its instructions or establish platform readiness. Reference images and videos are not runtime dependencies and are not bundled in this source import.

## Requirements and asset audit

- Modern browser supporting JavaScript, Canvas 2D, pointer events, and localStorage. Audio is synthesized through the browser Web Audio API.
- No dependencies, build toolchain, external URLs, SDK script tags, or external asset references were found in the HTML.
- Ground and material texture constants are empty in this saved build. Existing procedural graphics remain in the source; no separate texture files are referenced or needed to copy alongside it. Optional texture loading and appearance still require browser validation.
- The complete game remains in one HTML file to avoid changing initialization order or game behavior.
- Progress uses `underroot_colony_v1`, with auxiliary scout/tutorial keys such as `underroot_scout_v2`, `underroot_kid_step`, and `underroot_explorer_lesson`.
- Use a stable browser origin for saves. File URLs, private browsing, blocked storage, or changing localhost ports may prevent progress from carrying over. Repository import does not migrate existing browser saves.

## Validation completed

- Inspected the ZIP contents and HTML resource references.
- Node syntax checks passed for every inline script.
- Verified `index.html` matches the archived source byte for byte.
- Browser execution is unverified: the available Playwright installation has no browser executable, as established during the preceding Infinity Empire import. No visual, gameplay, audio, or mobile performance pass is claimed.

## Remaining checks before release

1. Start a new colony; verify management tabs, worker/soldier spawning, chambers, and surface/nest switching.
2. Enter worker exploration, approach each resource type, gather, carry, and deliver; check resource totals and rewards.
3. Send workers on priority, follow their collection/delivery cycle, cancel orders, and check depleted deposits.
4. Reload and confirm saved colony, resource deposits, and priority state restore correctly.
5. Check desktop and mobile controls, map, camera, audio, and layout.
6. Implement and validate separate Playgama and YouTube integrations if proceeding with the Wild Frontier plan. This build includes neither platform SDK nor rewarded ads; submissions and platform acceptance remain outstanding.
