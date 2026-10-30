# Publishing guide — review builds, not certified releases

These packages are distinct outputs of one maintained gameplay source. Read the current official rules before submission. The SDK references below were inspected on 30 October 2026.

## Start here

1. Play the **Standalone** edition first. Test gathering all five resources, deliveries, orders, queen/hatching, chamber building, enemies, save/reload, keyboard and touch.
2. Keep a copy of your Phase 3 game and existing browser data. Use the same origin when checking migration.
3. Treat the other two packages as platform integration candidates. Their APIs have mocked checks, not live platform validation.
4. Use an eligible developer account and an adult/guardian where platform agreements require it. No accounts or agreements were created or accepted for you.

## Playgama

1. Extract `UNDERROOT_Wild_Frontier_Playgama.zip` and confirm `index.html` and `playgama-bridge-config.json` are at its root.
2. The first script is the official stable Bridge v2 CDN. The game waits for Bridge initialization and a batched storage read before booting. All progress/settings writes use Bridge Storage.
3. Open the official configuration editor linked from the Bridge docs. Check the `food`, `leaves`, `seeds`, `nectar`, `soil` and `rush` placements against the selected destination platforms. Add account-specific identifiers only where required; no fabricated account IDs are shipped.
4. Test on the actual Playgama preview. Confirm supported ad buttons, rewarded events, pause and audio changes, storage across sessions and cancellation/no fill. Local Bridge mocks never earn rewards.
5. Finish localization: the adapter reads the platform language, but this review build's UI remains English. Review all current Required Steps, including the platform's natural-break interstitial requirements. This continuous game currently ships only optional rewarded ads; a compliant interstitial transition design is still pending.
6. Verify portrait/landscape controls, fullscreen behavior, one-handed touch access and no HUD overlaps. Escape is replaced with F8 in this target; on-screen close controls remain.
7. Submit only after these checks pass. The documented archive cap is 300 MB; this build is far smaller. Do not describe it as already accepted.

Official references:
- https://wiki.playgama.com/playgama/bridge-sdk/setup
- https://wiki.playgama.com/playgama/bridge-sdk/api
- https://wiki.playgama.com/playgama/bridge-sdk/config
- https://wiki.playgama.com/playgama/bridge-sdk/api/storage
- https://wiki.playgama.com/playgama/bridge-sdk/api/platform
- https://wiki.playgama.com/playgama/bridge-sdk/api/advertisement/rewarded
- https://wiki.playgama.com/playgama/game-requirements/technical-requirements

## YouTube Playables

1. Confirm you have Playables Developer Portal access. Access, listing eligibility, IARC information and account approval have not been verified.
2. Use **only** `UNDERROOT_Wild_Frontier_YouTube_Playables.zip`. Its first script is `https://www.youtube.com/game_api/v1`; no Bridge SDK is included.
3. The adapter checks `ytgame.IN_PLAYABLES_ENV`, loads cloud data before boot, calls first-frame/ready in order at the interactive start screen, and handles host pause, resume and audio settings.
4. Enable the intended rewarded-ad settings in the portal. Offers call `ytgame.ads.requestRewardedAd` with a stable reward-type ID and grant only for a strict `true` result.
5. Use the official Test Suite, then web and the YouTube apps on Android and iOS. Check readiness timing on the real host, cloud persistence, background/eviction, mute, no fill and ad cancellation.
6. Verify initial loading under 30 MiB (recommended under 15), bundle under 250 MiB, individual files under 30 MiB, cloud saves under 3 MiB and peak JS heap at or below 512 MB. Package sizes pass local checks; load time, actual transferred SDK size and real device heap remain unmeasured.
7. Prepare a general-audience listing, original-art disclosures, title, screenshots and age-rating answers. Do not market this YouTube target specifically as made for children. No listing or submission was made.

Official references:
- https://developers.google.com/youtube/gaming/playables/reference/sdk
- https://developers.google.com/youtube/gaming/playables/certification/requirements_stability
- https://developers.google.com/youtube/gaming/playables/certification/requirements_monetization
- https://developers.google.com/youtube/gaming/playables/developer_portal

## Bonus/save recovery

If saving fails after ad completion, the confirmed transaction waits for **RETRY SAVING** in Bonus Center. Keep the tab open until it saves. A durable verified journal can recover an unapplied reward after reload; credited transactions cannot be credited again. If the platform cannot persist even the verified journal and the tab is evicted, that unsaved confirmation cannot be recovered from the platform. No false bonus is granted to compensate for an unverified ad.
