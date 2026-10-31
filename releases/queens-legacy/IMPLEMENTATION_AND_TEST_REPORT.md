# Implementation and actual tests — 2026-10-31

Modified the supplied GUI/Quest/Loading build; no replacement demo. Implemented persisted egg requests, timed incubation and hatching, full-Nursery Explorer recovery queue, one-time 10% food charge, zero-food emergency recovery, shared level-12 chamber upgrades, seed storage limits, Queen incubation/soldier-health bonuses, Ranger healing, original procedural Queen/egg art, mobile Nursery UI and additive save migration. Existing gathering, combat AI, recruitment, maps, loading image, missions and reward ledger are retained. Newly provided starter rooms do not count as player-built rooms for the existing building mission.

## Executed checks

Python Playwright with real system Chromium on Linux. Local HTTP servers; not physical mobile hardware.

- `test.py`: actual UI Worker/Soldier purchases; two slots occupied; third order rejected. Reload retained eggs. Death with 75 food charged 8 once and queued Explorer behind the two eggs. Reload during recovery retained transaction. Actual timed incubation hatched all three, restoring one controlled Explorer. Free zero-food recovery passed. Nursery construction charged once, rejected duplicate upgrade, survived reload and reached level 2/four slots. Close button and mobile screenshot passed. Zero page exceptions.
- `extended.py`: all six food snapshots (0,75,100,500,1000,2300) charged (0,8,10,50,100,230), including repeated death-call guards. Advanced the simulation clock for fast integration cases, not claimed as naturally elapsed gameplay. Invoked actual `wildStrike` at a reachable hostile encounter, confirming lethal damage enters rebirth. Shared upgrades reached level 12 for Queen, Granary, Nursery, Seed Vault and Ranger, and rejected level 13. Nursery reached 24 slots. Level-12 newborn soldier maximum health 79 survived reload. Seed deposit at 9998 accepted one unit and returned four overflow. Zero page exceptions.
- `regression.py`: original loading overlay completed, 15 resource deposits remained. Pause and simulated ad-lock flags suspended incubation. Actual navigation/GATHER/HOME UI delivered leaves. Nursery layouts at 360×800, 390×844, 768×1024, 1366×768 had no horizontal modal overflow. Empty-colony pending rebirth survived reload without the legacy fallback worker and restored exactly one Explorer. Actual bundled Bridge reported 2.4.0/mock on localhost; gameplay started and ads remained unavailable. Zero page exceptions.
- `final-check.py`: legacy-format fixture without lifecycle fields retained four ants and initialized two Nursery slots. Barracks and Fungus reached 12 through the shared upgrade path. A 50-ant stress fixture sampled 175 frame intervals: median 16.7 ms, 95th percentile 33.3 ms. This is a headless desktop frame-interval measurement, not a physical mobile benchmark or isolated CPU/GPU cost. Zero page exceptions.
- JavaScript syntax checks for the new lifecycle, music and platform adapter files passed.

The first lethal-strike test location was obstructed and correctly caused no hit; it was corrected to a reachable resource-clearing encounter before verifying combat death. No assertions were disabled.

## Not verified / limitations

Live Playgama cloud storage, deployed-save migration, real rewarded completion/cancel/no-fill callbacks, and platform approval require Sandbox access. Local SDK mock success is not live certification. Original reward ledger is retained; no new nursery monetization is added. The official wiki/CDN returned HTTP 403 earlier in this session; APIs were inspected in official GitHub source and published package declarations.

Firefox, Edge, Safari, physical phones, real human usability, long-session economy balance, 100+ ant stress, detailed audio listening, and failure injection for disk/cloud writes remain unverified. No qualification metrics or advertising impressions were generated. Royal attendants are illustration animation, not reassigned simulated workers. Creature fusion/capture is not implemented and is labeled unavailable. No resin/water resource loops are claimed.

Music supplied by the user is bundled; commercial redistribution rights have not been independently confirmed. No game was published or submitted. These are complete playable packages for further Sandbox evaluation, not a claim that all platform/device acceptance tests have passed.
