# Monetization and test report

The six optional offers are +150 food, +120 leaves, +100 seeds, +75 nectar, +120 soil, and 2× worker harvest rate for 180 seconds. Inventory caps apply; full storage disables the affected offer, partial space is disclosed. No depot quantity/population is changed by an ad. No compulsory or simulated production ad is shipped.

## Shared transaction service

The UI calls `WFRewards`. An explicit request records a UUID transaction and saves before calling an adapter. Only strict verified success creates a verified journal; that journal is persisted before inventory is changed. Consumed IDs and inventory are then saved together. A pending verified transaction can be recovered after reload; requested-but-unverified transactions are discarded. Replayed consumed IDs do not grant again. Concurrent requests are rejected.

An ad freeze clears input and blocks simulation, hostile attacks, movement, timers and SFX. Host pause/audio events and the user's own mute preference remain separate. Bridge ads continue freezing gameplay through their close event even if the reward event arrived first. Backgrounding also freezes simulation and clears controls.

Remote writes are serialized. A failed pre-ad save prevents the ad. A failed verified-journal write leaves a retryable confirmed transaction without granting yet. If final grant saving fails, the current credit stays in memory, new offers are blocked and Retry Saving syncs without regrant. If the tab is evicted before any verified journal can be persisted remotely, recovery is impossible; keep the tab open and retry. This limitation is explicit, not disguised as guaranteed cloud durability.

## Platform adapters

- **Playgama:** official stable Bridge v2; initialize; batched `storage.get`, `storage.set`; audio/pause events; `game_ready`; `isRewardedSupported`; `showRewarded(placement)` and only the `rewarded` event confirms a reward. Local mock platforms are excluded. No direct browser persistence in this target.
- **YouTube:** official game_api/v1 first script; environment guard; `game.loadData` / `saveData`; firstFrameReady / gameReady; system mute/pause/resume/language; `ads.requestRewardedAd(stableRewardTypeId)`. Only strict `true` confirms a reward. Outside the host environment, preview uses local saves and no ads.
- **Standalone:** browser-local progress, no SDK, no real ad provider, disabled ad offers. Test doubles exist only in the test files, which are excluded from release ZIPs.

## Executed versus outstanding

34 mocked platform/reward checks passed, covering readiness/storage ordering, mute/pause, close/no fill, reward success, duplicate events, rapid taps, storage bounds, save failure before/after verification, retry, interrupted requests, replay and reload recovery. See `tests/platform-results.json` for exact names. Tests are Node VM tests, not a browser or live platform.

No live ad, real platform cloud save, portal setting, device Test Suite, certification, submission, acceptance or payout was executed or confirmed. Playgama localization/interstitial policy and all real-device checks remain open. Official documentation links and beginner steps are in `PUBLISHING_GUIDE.md`.
