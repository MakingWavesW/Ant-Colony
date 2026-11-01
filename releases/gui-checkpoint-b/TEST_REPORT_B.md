# Checkpoint B — actual test results

Test environment: local static HTTP server, installed Chromium driven by Python Playwright. Executed the actual playable game and interacted with HTML controls; tests monitored pageerror. Final passing runs recorded no browser JavaScript errors. These are automated browser checks, not a human ten-minute playthrough or a physical-device audit.

## Passed
- Real-time Worker and Soldier incubation, hatch exactly once, queued save/reload, real ants created; initial two-slot capacity.
- Recruitment and patrol/dismiss commands. Separate population fixture hatched 12 soldiers through QL (13 total); recruitment stopped at 10 escorts.
- Nursery upgrade purchase, duplicate purchase rejection/no second charge, real-time timer after reload, level 2/four slots. Level 12 fixture rendered 24 slots and rejected further upgrade.
- Full-Nursery death fixture: 75 stored food charged ceil(7.5)=8, leaving 67; Explorer egg queued behind two active eggs. Reload retained one reservation; all three hatched once and exactly one controllable Explorer remained. Zero-food emergency recovery passed.
- Actual wildStrike combat damage at a reachable enemy position caused death, charged 10 from 100, and recovered one Explorer. Test positioned the actors and set HP to 1; it was not a naturally encountered battle playthrough.
- Actual Show Trail movement, Gather and Home buttons delivered a resource. Worker forage, discovered deposit priority and cancel commands updated AI state. Original autonomous AI code is retained.
- All 12 Journey transitions and completed-arc reload; Chapter 3 did not complete at egg purchase and Chapter 12 did not complete at upgrade purchase. Duplicate completion did not duplicate reward. This test drove real event APIs with resource, kill/landmark and simulation-clock fixtures; it was not 12 naturally played chapters.
- Queen, Worker, Soldier, Upgrade, Nursery and Journal: 18 dialog/viewport combinations at 390×844, 844×390 and 1280×720; one open dialog, no horizontal dialog overflow, bounds inside viewport, working Escape. Visual screenshots inspected for mobile/desktop readability; long panels scroll vertically.
- Nursery close X, map/dialog exclusivity, 12 journal entries and original trail command; Escape closes the modal while retaining Explorer control.
- Part 1 repeat: local Lilita One/Nunito font load, menu Settings, Play/Continue, pause/resume, main-menu return, hatch/save/reload. Settings tested at 360×800, 390×844, 768×1024, 844×390, 1280×720 and 1920×1080.
- Progress reset cancellation retained progress; confirmed reset restored starting capacity and quest index.

## Fixes found during testing
An inherited tutorial marker dereferenced a temporarily absent Explorer after reload. It now checks Explorer availability. Escape formerly also triggered the legacy stop-exploring shortcut behind dialogs; modal Escape is now isolated. Main-menu pause is retained when the native settings dialog emits its asynchronous close event. Tests were rerun after their related fixes.

## Limits
No physical touch-device, Safari/Firefox, live Playgama, live ad/reward, prolonged battery/performance or audible music listening validation. Existing music/controller files and standalone adapter are unchanged. This is the Part 2 standalone checkpoint; production platform integration is deferred per the milestone boundary. Screenshots and executable browser QA scripts are retained in the workspace under gui-part2.
