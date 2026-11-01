# Final GUI and gameplay checks

Executed the actual game in local Chromium with Python Playwright. Both an unmodified official SDK launch and explicitly mocked platform API tests were performed. No final passing run recorded a JavaScript page error. Tests are automated, not a human full-length playthrough.

## Passed gameplay checks
- Worker/Soldier real-time incubation, hatch, save/reload, two-slot initial Nursery; timed Nursery upgrade retained after reload, four slots at level 2, duplicate charge rejected.
- Full Nursery recovery fixture: 75 food -> 8 charged -> 67 remaining; replacement queued, reload retained it, three eggs hatched once with one Explorer. Zero-food recovery passed.
- Actual Show Trail movement, gather and home delivery; recruitment/patrol, reset cancel and confirmed reset.
- All 12 quest transitions and normal rewards persisted; Worker hatch/Queen upgrade completion required; duplicate completion did not repeat rewards. This uses authoritative event APIs and clock/kill/landmark fixtures, not 12 naturally played quests.
- 13 living soldiers fixture recruited only 10. Follow button sets the existing follow order. Escape preserves Explorer control; main menu pauses and Continue resumes.
- Enemy HP frame test recorded fill width 85.41 at 50% and 42.705 at 25%. Screenshot inspected. Unknown threats excluded from new map entries. Map zoom/reset and close controls passed.
- All 40 optimized Part 3 images loaded/decoded. Chest frames 1–6 complete in sequence, with immediate skip/close and no visual-function inventory grant. Duplicate original chest art deduplicated.

## GUI and inherited regressions
Bonus Center/map at 360×800, 390×844, 844×390, 1280×720 and 1920×1080: unsupported buttons disabled, No Thanks closes, map zoom/reset/close functional, no broken network asset responses or horizontal bonus overflow. Quest normal reward persisted and declined/unavailable offers did not reopen on reload. Death frame displayed the actual egg progress and recovery.

Part 1 regression: local Lilita One/Nunito loaded; menu Settings, Play/Continue, pause/resume, main-menu return, Worker hatch/save/reload; settings layouts checked at six sizes (including 768×1024). Screenshots are included under docs/screenshots. Long lists scroll while Bonus Center dismissal controls remain visible.

## Platform tests
See PLAYGAMA_ADS_AND_LIFECYCLE_REPORT.md for mocked reward/lifecycle cases and actual official SDK localhost launch. No claim of successful real ads is made.

## Remaining checks
Physical mobile touch devices, Safari/Firefox, live Playgama Sandbox, actual cloud failure/account migration, audible music listening, extended-session performance/battery use, and a natural complete 12-chapter playthrough were not verified. Existing music files/controller are preserved. Elite health art is reserved for explicit elite enemies; this baseline distinguishes ordinary and apex/boss enemies only.
