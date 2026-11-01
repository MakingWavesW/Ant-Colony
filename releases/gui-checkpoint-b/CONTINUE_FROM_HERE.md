# UNDERROOT GUI Checkpoint B — Part 2 complete

Use this checkpoint as the baseline for future work. Serve the directory containing index.html with an ordinary static HTTP server; no build step, package installation, or runtime font network request is required. All playable files are at the ZIP root.

## Implementation
- kingdom.js and kingdom.css integrate the supplied Queen, Nursery, chamber upgrade, Worker, Soldier, quest journal/tracker and medal art. They reuse QL, Journey and UnderrootPanels; there is no second simulation or save schema.
- assets/kingdom contains optimized transparent WebP derivatives. ASSET_MANIFEST_USED_B.json maps original package paths to runtime files, dimensions, size and SHA-256. Part 1 assets/fonts remain intact.
- Queen level, costs, benefits, eggs, progress, queue and population read authoritative game data. Breeding and upgrading call QL transactions. Soldier and Worker controls call existing AI commands.
- A native modal presents management/upgrade pages. Nursery and Journal reuse existing dialogs. Only one major dialog opens at a time. Dialog Escape now preserves Explorer control; X, scrolling and focus return remain available.
- index.html adds the presentation files and a null-Explorer guard to the inherited tutorial marker. gui-foundation.js preserves pause on return to the main menu despite the asynchronous dialog close event.
- queens-legacy.js, adventure.js, music.js and rainbow.js remain byte-for-byte from Checkpoint A. No new ad integration was introduced.

## Save and recovery
Existing serialization, Journey rewards, incubating eggs, chamber construction and replacement Explorer reservations remain authoritative. No save migration or reset is introduced. Timers retain the baseline simulation-clock behavior: remaining duration survives reload; this milestone does not add offline incubation.

## Rollback
The completed A archive is preserved separately as CHECKPOINT_A_ROLLBACK.zip, byte-identical to UNDERROOT_GUI_CHECKPOINT_A.zip.
SHA-256: f36f51ea5af2c0b1dc61f958053ba8d1889b79168b7dabb1ea5f0504bb468f47
The older source rollback already inside A remains in rollback/. Do not confuse that older source with the completed A backup.

## Next milestone boundary
STOP after Part 2. Read TEST_REPORT_B.md and QUEEN_NURSERY_QUEST_INTEGRATION_REPORT.md before further work. This checkpoint retains A's standalone platform adapter. Live Playgama SDK/monetization/Advanced Banner work is explicitly deferred; do not describe this archive as live-platform certified.

Remaining verification: physical mobile devices, Safari/Firefox, production Playgama runtime, live ad transactions, audible music listening and extended-session performance. Browser mobile checks used Chromium viewports, not physical devices. See the test report for fixture versus real-time coverage.
