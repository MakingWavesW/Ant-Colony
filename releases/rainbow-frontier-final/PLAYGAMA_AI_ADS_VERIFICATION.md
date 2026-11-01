# Playgama.ai ad compatibility follow-up

## Corrected configuration
The dedicated Playgama ZIP now sets the official `forciblySetPlatformId` configuration to `playgama`. Bridge 2.4.0 has no Playgama-hostname auto-detector: without a host-supplied `platform_id` parameter, the previous configuration could select `mock`, disabling ads. The dedicated build now explicitly uses the real Playgama adapter. This does not simulate ad success or bypass capability checks.

Use UNDERROOT_FINAL_PLAYGAMA.zip for a Playgama-hosted game; use the standalone ZIP for ordinary offline/local play. Without the real platform service, the Playgama build may offer session-only fallback and no ads.

## Actual verification
The unmodified packaged official Bridge 2.4.0 was run in Chromium without a `platform_id` URL parameter. Only its external Playgama host service was replaced by an explicit test double outside the production ZIP. The test verified:
- Bridge selects `playgama` and reports rewarded capability.
- Host `open` then `close` grants no reward.
- Host `open`, duplicate `rewarded`, then `close` grants exactly +150 Food once.
- The game restores its prior manual pause and clears the ad lock.
- A cloud-bundle reload retains one quest receipt.
- No JavaScript page errors.

The earlier test that reported localhost platform `mock` describes the pre-fix configuration. The standalone package remains unchanged. The official SDK itself is not modified; only its documented platform-selection setting changed.

## Live verification still required
Playgama.ai preview/deployment compatibility and real ad inventory cannot be certified from local tests. A hosted game preview/Sandbox URL is needed to verify that environment exposes the expected Playgama host SDK and serves real ads. No publisher monetization settings were changed, and no live game was published. Host capability, ad inventory, account configuration and blockers can affect availability. Canceled, unavailable or failed ads without a verified reward must continue to grant nothing.
