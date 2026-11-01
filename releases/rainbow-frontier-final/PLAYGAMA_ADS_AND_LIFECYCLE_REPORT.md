# Playgama integration report

## Official API reviewed
The wiki URL https://wiki.playgama.com/playgama/bridge-sdk/ was attempted and blocked by the environment's HTTP policy (CONNECT 403). No bypass was attempted. Official README and current SDK source were inspected instead at https://github.com/Playgama/bridge (commit 938cb44690ea60d57e617d759389f45921469fa2).

Packaged official npm distribution: @playgama/bridge 2.4.0, unmodified vendor/playgama-bridge.js, with its license and README. The README explicitly documents self-contained npm builds. API signatures checked against AdvertisementModule.ts, AdvancedBannersController.ts, advertisement/types.ts, StorageModule.ts, platform/constants.ts and PlaygamaPlatformBridge.ts. No separate YouTube adapter or YouTube SDK initialization was added.

## Lifecycle and saving
Initialize once with the local JSON config, read `bridge.storage.get('underroot_bundle_v1', false)` before enabling Play/Continue, then seed the existing cache. GAME_READY is sent once after SDK/storage and loading-art/font readiness. GAMEPLAY_STARTED/STOPPED tracks actual play, manual pause, platform pause, ads, menu and document visibility. Audio follows SDK pause/audio events plus existing mute/autoplay guards.

SDK storage is unified: the platform/account determines cloud or guest/local backing. Writes are serialized through the existing queue using `bridge.storage.set`. An initialization failure/12-second timeout exposes Retry and explicit session-only play; it never writes an empty local game over an unread cloud bundle. A late initialization cannot replace that session. No private backend/API keys are bundled.

## Reward authorization
Only REWARDED_STATE.REWARDED authorizes inventory credit. The adapter listens to REWARDED_STATE_CHANGED, calls showRewarded with a placement string, rejects redundant requests, and cleans up listeners. OPENED/LOADING pause and mute; CLOSED/FAILED without REWARDED grant nothing. REWARDED persists the verified pending record before close where possible; duplicates are ignored. A watchdog closes the transaction and disables further ads for that session to avoid late callbacks affecting another request.

The existing service persists requested/verified states and the inventory-plus-consumed receipt. Quest offers use `quest:<quest-id>:<reward>` IDs and persist offer decisions in Journey. Manual bonuses have UUIDs. Existing receipt history is bounded to 256 records; completed quest offer state also prevents repeating old offers. Save failure retains a recoverable verified transaction or marks final saving pending; the player is told to retry. No chest animation or button click grants an extra reward.

## Optional ads
Rewarded calls require the actual `playgama` platform ID and isRewardedSupported; the official SDK's localhost `mock` platform is deliberately not eligible. Advanced Banners use isAdvancedBannersSupported and one configured main_menu placement (left 83%, top 30%, width 16%, height 40%) only with sufficient unused space at >=1400×650. They hide for gameplay, modals, ads, hidden tabs and small screens. Interstitials use isInterstitialSupported and only a guarded return-to-menu break after 180 seconds. No autoShow triggers are configured.

## Evidence and gaps
Actual official SDK 2.4.0 launched on localhost, reported platform `mock`, game launched, ads were false, and no page errors occurred. This is not a real Playgama ad test.

Explicit test-only SDK interception verified ready once, banner show/hide, cancellation/failure=no reward, duplicate rewarded/closed events=one grant, repeated quest request denied, reload receipt/offer persistence, pre-ad save failure=no ad reward, manual pause preservation, platform audio/pause separation, and natural-break interstitial close. Mock scripts are outside production packages.

Real Playgama Sandbox callbacks, cloud persistence/account transitions, live banner inventory and real interstitial/rewarded ads remain unverified. Publisher access was not used and no live game was changed.
