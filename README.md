# UNDERROOT — Ant Colony Chronicles

## Latest release: Rainbow Frontier (Part 3)

- [Standalone playable ZIP](releases/rainbow-frontier-final/UNDERROOT_FINAL_STANDALONE.zip)
- [Playgama Sandbox candidate ZIP](releases/rainbow-frontier-final/UNDERROOT_FINAL_PLAYGAMA.zip)
- [Release instructions](releases/rainbow-frontier-final/RELEASE_AND_UPLOAD_GUIDE.md)
- [Gameplay and GUI tests](releases/rainbow-frontier-final/FINAL_RESPONSIVE_AND_REGRESSION_TESTS.md)
- [Playgama integration and live-test gaps](releases/rainbow-frontier-final/PLAYGAMA_ADS_AND_LIFECYCLE_REPORT.md)
- [Preserved Checkpoint B](releases/gui-checkpoint-b/UNDERROOT_GUI_CHECKPOINT_B.zip)

Extract either package and serve its root folder with a static HTTP server. Real Playgama Sandbox ads/cloud/banners still require publisher-side validation; no live Playgama game was published or replaced. The repository-root `index.html` below remains the original prototype.

## Original prototype

The **Phase 3: Smart Gathering & Priority Orders** HTML game prototype. The game is preserved unchanged; the original HTML is named `index.html` for easy local hosting.

## Run

1. Download or clone this repository.
2. Open `index.html` in a modern browser, or start a local server from this folder:
   ```sh
   python3 -m http.server 8000
   ```
   On Windows, use `py -m http.server 8000` if needed.
3. Visit <http://localhost:8000> and start the colony.

No npm install, build step, API keys, or external assets are required. Enable JavaScript and browser storage. Use the same browser and server address to resume saved progress.

## Main gameplay

- Grow a colony of workers and soldiers; upgrade the queen.
- Explore the surface and switch into the underground nest.
- Gather leaves, food, seeds, nectar, and soil.
- Approach a resource as a worker to **GATHER** personally or **SEND WORKERS** on priority.
- Carry resources home, follow priority trails, and cancel worker orders.
- Build and upgrade nest chambers, complete missions, and defend against threats.
- Use the minimap/full map, guided first delivery, and local saves.

## Controls

- **EXPLORE AS WORKER**: enter worker control; click/tap a destination to walk.
- **WASD / arrow keys**: move; touch controls are also included.
- **E**: contextual interaction while exploring; **HOME**: return home.
- Drag to pan; mouse wheel to zoom.
- **1 / 2**: switch surface/underground; **M**: world map; **Escape**: exit/close the active exploration or map view.
- Use the Colony, Build, Army, Explore, and Missions tabs for management.

## Files and status

```text
index.html                    Complete playable prototype: UI, art, sound, logic, saves
docs/SETUP.md                 Source, asset audit, validation, and remaining checks
docs/WILD_FRONTIER_PLAN.md    Future upgrade brief; not a list of shipped features
```

No missing local assets were found. Empty optional texture slots use the existing procedural drawing paths. JavaScript syntax checks passed; browser gameplay is not verified in this environment. Playgama, YouTube SDK integration, and rewarded ads described in the plan are future work, not included in this build. See [setup notes](docs/SETUP.md).
