# UNDERROOT GUI Checkpoint A — Part 1 only

Start with this checkpoint, not the earlier Queen/Rainbow ZIPs. Root index.html remains the actual game. No framework or simulation rewrite. No balance changes. Nursery artwork and Rainbow advertising overhauls were not started.

## Added files
- gui-foundation.css: local Lilita One/Nunito, image-backed semantic buttons, menu art, resource frames, seven-action dock, settings/loading decorations and responsive rules.
- gui-foundation.js: menu Play/Continue reuse, confirmed New Colony via existing reset, settings volume/mute, manual pause restoration, UnderrootPanels manager, focus return, map/dialog coordination, official icon integration and immediate transaction counter refresh.
- assets/gui: cropped/resized transparent WebP derivatives. ASSET_MANIFEST_USED.json records source, original/runtime dimensions and usage.
- assets/fonts: locally bundled WOFF2 from official google/fonts, SIL OFL licenses included.

Gameplay scripts remain the baseline; only index.html adds the new CSS/script at the end of existing initialization. Runtime extensions wrap UI entry points and transactions. Original music controller remains single. Existing Journey/Queen save serialization remains intact. Settings changed before a new game are session preferences; durable preference saving uses the existing game save once play has begun.

Rollback: rollback/GAME_SOURCE_BASELINE_UNCHANGED.zip is the byte-identical baseline supplied in the asset package. Original source artwork remains in the workspace package; optimized files are in the checkpoint.

## Next milestone
Read TEST_REPORT_A.md. Part 2 may replace Queen/Nursery presentation while retaining QL transactions. Do not add another startup loop, music controller or modal prototype wrapper. UnderrootPanels and the existing compatibility wrappers should be consolidated further if the remaining legacy panels are redesigned. Main-menu return resumes the running colony rather than initializing it twice.

Remaining polish: legacy canvas-rendered labels still use engine fonts; long dynamic action buttons may stretch their background art; full device accessibility/performance and long-session gameplay audits are outstanding. Preface any platform release with live Sandbox checks. This checkpoint retains the supplied standalone adapter; it is not a new Playgama integration.
