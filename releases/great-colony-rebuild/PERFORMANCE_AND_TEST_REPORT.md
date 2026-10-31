# Actual validation — playable increment 1

Environment: Linux, Python Playwright, system Chromium in headless mode, local Python HTTP servers. Not a physical phone or a Playgama iframe.

Executed `python3 test.py`: real clicks on start, SHOW TRAIL, GATHER and HOME; first leaf delivered, chapter advanced to 1, persisted across reload; zero page exceptions. Screenshots captured at desktop and phone/tablet viewports.

Executed `python3 qa.py`: three deposits for each of five resource types; invoked production delivery/hatch/order/build/map/recruit functions to validate progression through index 7, then reload; retained index 7, four workers, two soldiers and a two-soldier escort. This integration scenario is not a natural ten-minute playthrough. Unavailable ad request granted nothing. Zero page exceptions. Layout checks at 360x800, 390x844, 768x1024 and 844x390 found no horizontal document overflow; screenshots were inspected and overlapping quest/squad UI corrected.

175 sampled animation-frame intervals in the small desktop scene: p50 16.7 ms, p95 16.8 ms. These are frame intervals, not isolated CPU/GPU render times. Baseline performance, initial-load timing, memory, 100-ant stress and physical mobile performance were not measured.

Executed `python3 pgqa.py`: actual bundled official Bridge reported version 2.4.0 and mock platform on localhost; start became enabled and game ran without page exceptions; rewards unavailable. This verifies local SDK loading and gameplay, not live Playgama authorization, cloud saves or real advertisements.

Full 12-quest natural playthrough, enemy balance, interrupted ads, corrupted saves, old live-platform save migration, all browser engines, audio listening, complete stress suite and human usability are outstanding. New quest trigger integration is only verified through chapter 8; later triggers are implemented but not end-to-end verified. Original creature/AI systems were preserved, not rebuilt. Premium supplied loading artwork is not bundled. Do not label this a fully certified or final master-prompt release.
