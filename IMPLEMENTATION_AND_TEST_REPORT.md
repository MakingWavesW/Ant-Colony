# Implementation and test report

Date: 30 October 2026. Version: 1.0.0. Status: review build, not certified.

## What changed

The uploaded 201,024-byte Phase 3 HTML is retained byte-for-byte in `original/phase3.html` and `src/base.html`. The build script modifies a copy: expands MAP to 4,700, replaces the old full-map raster cache with viewport chunks, routes persistence through the target adapter and appends the maintained Wild Frontier modules. Existing management, explorer, room geometry, tutorial, resource panel, gait and carry art are reused.

The surface area grows from 4,410,000 to 22,090,000 square world units (5.01×). Five supply types have exactly three independently renewable depots, 1,000–2,300 initial units each. Generation is seeded, depot IDs increase across saves, depletion callbacks are idempotent, inventory is bounded, and current depot locations are reachable around isolated rock obstacles. A path graph is built only when needed and paths are cached per ant. Priority reservations and a cached food-support group preserve useful worker assignments. Soldiers use distributed patrols, local separation and nearby threat targeting without per-frame global sorting.

Four biomes, four discovery landmarks, a discovery-aware minimap/full map, shrinking resource piles and optional landmark rewards are implemented. Predators have original procedural silhouettes and articulated legs/arms: eight-legged spiders, plated beetles, fire ant groups and mantises. They patrol territories, wind up attacks, recover, respect obstacle attack lines and stop pursuit outside their home territory. The initial nest area is safe. A defeated explorer returns to the colony with cargo retained; worker losses still matter.

Seeds now have independent inventory and a Colony action converts 10 seeds to 10 food. Existing food stock is retained on migration. New saves retain depot coordinates/remaining stock, RNG/ID state, discovery, priorities, ants/cargo, queen/rooms, enemies, timed boosts and reward transactions. Legacy saves get a separate backup entry before the new schema replaces their small depots and shifts ant coordinates into the larger world.

## Executed verification

**70 checks passed:** 16 core, 34 platform/reward and 20 extended checks. The committed JSON results enumerate them.

- JavaScript syntax checks for every built inline script.
- Baseline game and upgraded game execute in Node VM with a simulated DOM and native Canvas.
- Replaced 100 depots one at a time; repeated stale callbacks; checked counts, type, quantity and IDs.
- Personal harvesting and delivery, bounded overflow, separate seed stock, actual worker priority harvest/return, save roundtrip, legacy migration/backup, queen upgrades, hatching and chamber construction.
- Routes to all 15 initial depots; desktop key input, joystick input, sprint, surface/underground transition and solid-earth geometry.
- Soldier patrol spacing, enemy wind-up/damage/defeat, obstacle attack occlusion, native Canvas rendering of all creature/biome paths and underground rendering.
- Terrain cache remains at or below 36 chunks after traversing many views.
- SDK mocks verify initialization/storage ordering, readiness, pause/resume, mute, ad cancellation/reward signaling, duplicate events, rapid taps, save errors, verified-journal recovery and no resource-depot mutation from rewards.
- Local target size and cross-SDK isolation checks. Release ZIP roots/integrity/sizes are checked by `package.py`.

## Measured simulation timing

Node VM, simulated DOM, no browser rendering in the timed section; 300 simulation ticks per population. These are local simulation costs, **not FPS or device benchmarks**. No peak browser heap, real loading time or mobile frame-rate measurement is claimed.

| Ants | Milliseconds per simulation tick |
| --- | ---: |
| 10 | 0.565 |
| 25 | 1.044 |
| 50 | 1.795 |
| 100 | 4.965 |

## Browser and platform status

A real browser was not available. Playwright was installed but Chromium was missing; its standard download repeatedly returned an unusable archive. No browser play-through, CSS layout validation, mobile hardware test or live ad was executed. Native Canvas images were visually inspected for surface and creature scenes; these images do not validate HTML HUD/touch layout.

SDK calls were checked against the current official references linked in `PUBLISHING_GUIDE.md`, then tested with mocks. No developer login, submission, acceptance, certification or revenue was verified. Playgama's localization and natural-transition interstitial requirements still need implementation/review before submission. Only English UI is shipped. YouTube host-device compatibility and Test Suite execution are outstanding.

## Remaining acceptance checklist

1. Play in actual desktop browsers and on Android/iOS, portrait and landscape. Check six-resource HUD, modal focus, joystick/Sprint/Access clearance, pinch zoom and touch target sizing.
2. Exercise real Playgama and YouTube previews: cloud conflict/failure behavior, lifecycle event order, readiness timing, monetization settings and real ad completion/no fill.
3. Complete Playgama localization and a compliant natural-break interstitial policy; recheck the current Required Steps before submitting.
4. Profile browser/mobile render time, peak memory and startup transfer/readiness. Balance distant journeys and combat with human play-testing.
5. If a platform cannot persist a verified reward journal before eviction, that unsaved confirmation is not recoverable; the UI requests retry and never invents a reward.

No missing local assets were found. Gameplay, art and sound remain procedural and dependency-free at runtime; platform editions require their official remote SDK.
