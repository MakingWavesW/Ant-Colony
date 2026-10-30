# UNDERROOT — The Wild Frontier

A playable upgrade of your Phase 3 ant colony game. Keep the original as a backup.

## Play on your computer

1. Extract `UNDERROOT_Wild_Frontier_Standalone.zip`.
2. Open `index.html` in Chrome, Edge, Firefox or Safari.
3. Click **ENTER THE COLONY**. Your explorer has a gold ring.
4. Approach a supply pile. Choose **GATHER MYSELF**, then **HOME** to deliver, or **SEND WORKERS**.
5. Hatch workers and soldiers, upgrade your queen, and excavate new rooms. Keep food coming in.
6. Explore beyond the meadow to find four landmarks. Watch for enemy warning rings.

If opening the file directly prevents saving, open a terminal in the extracted folder and run `python3 -m http.server 8000` (Windows: `py -m http.server 8000`). Visit http://localhost:8000. Keep the same browser and address for your saves.

## Controls

- WASD / arrows: walk. Shift / hold Sprint: sprint.
- Click or tap: walk to a destination. Drag: pan. Wheel / pinch: zoom.
- E / Access button: gather, enter the nest, or inspect a nearby room.
- HOME button: bring a carried supply home. M / MAP: full map.
- Surface / Underground buttons: switch scenes. Use pale underground tunnels.
- Mobile: joystick, Sprint, Access and on-screen management buttons.
- Escape: leave explorer / map in standalone and YouTube. Playgama retains on-screen close controls and uses F8 instead.

## What changed

- 4,700 × 4,700 surface instead of 2,100 × 2,100: 5.01 times the area.
- Three large depots for each of food, leaves, seeds, nectar and soil. Each begins at 1,000–2,300 units.
- One exhausted depot produces one replacement of the same type, with a new ID.
- Green Meadow, Forest Floor, Sunstone Ridge and Shadow Wilds; four discoverable landmarks.
- Local ant separation, distinct soldier patrols, worker reservations and obstacle routes.
- Articulated spiders, armored beetles, rival fire ants and mantises; attack wind-ups and bounded pursuit.
- Safe nest area, resource labels, shrinking piles, explored map markers and supply trails.
- Separate seeds inventory. Convert **10 seeds → 10 food** in the Colony tab when storage has room.
- Optional Bonus Center. Offline ads are disabled; ordinary play always works.

## Saves

Old colony progress is retained on the same browser origin. Old surface coordinates move into the larger world; old small resource nodes are replaced. The first migrated save is retained as `underroot_colony_v1_before_frontier`. New saves include deposits, discovery, priorities, enemies, cargo, settings and reward transactions. Remote targets use their own platform storage. Saves do not transfer automatically between platforms or addresses.

## Source and rebuilding

`src/base.html` and `original/phase3.html` retain the uploaded game. `src/frontier.js`, `navigation.js`, `rewards.js`, CSS and platform adapters maintain the upgrade. Run `python3 build.py` to regenerate `index.html` and the three `dist/` folders. No npm installation or build dependencies are needed for the game.

Automated checks use Node, the test DOM harness, and `@napi-rs/canvas`. They are code-level tests, not browser play-testing. Install that package for local tests or use the configured Codex runtime. From the parent of this repository run `node underroot/tests/core.cjs` and `node underroot/tests/platforms.cjs`; if the folder has another name, update the test paths or use the test runner described in `tests/README.md`.

## Status

This is a review build. Browser/mobile play-testing and real platform QA remain required. No account registration, submission, live hosting or advertising revenue has been performed. See the publishing guide and test report.
