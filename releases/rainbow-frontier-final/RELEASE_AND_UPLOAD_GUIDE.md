> **Platform-selection correction:** See [Playgama.ai ad verification](PLAYGAMA_AI_ADS_VERIFICATION.md). The dedicated build now explicitly selects the real Playgama adapter; the earlier localhost `mock` result is historical.

# UNDERROOT — Rainbow Frontier release candidates

Release date: 2026-11-01. Built from the completed Checkpoint B, not an older game. Keep CHECKPOINT_B_ROLLBACK.zip as rollback. No live Playgama publication was performed.

## Packages
- UNDERROOT_FINAL_STANDALONE.zip: local browser saving; advertisements explicitly unavailable; complete playable game.
- UNDERROOT_FINAL_PLAYGAMA.zip: same game, official locally bundled Bridge 2.4.0 and platform adapter. Candidate for Playgama Sandbox validation, not live-approved.

Extract either ZIP, then run `python3 -m http.server 8000` inside the extracted folder. Open http://localhost:8000. index.html is at each ZIP root; no npm/build step is needed. Serve over HTTP(S); avoid file URLs for platform APIs.

## Playgama acceptance before publishing
Upload the Playgama ZIP to your game's Sandbox. Verify cloud-state load before Continue, guest/authenticated storage behavior, real rewarded cancellation/failure/completion, manual pause/audio restoration, interstitial return-to-menu behavior, and any actually supported Advanced Banner placement. Test mobile touch controls and portrait/landscape. Record real Sandbox evidence before replacing a live build.

The adapter supports one percentage-based Advanced Banner on a wide main menu only, gated by SDK capability and available space; mobile and gameplay hide it. Interstitial requests occur only on a genuine return to menu after three minutes, outside encounters/rebirth/ad transactions. No startup ad, no respawn ad, no autoShow config.

## Architecture
Checkpoint B simulation, Queen/Nursery production and Journey save fields remain. frontier.js/frontier.css add supplied artwork, animated chest, map zoom/markers, health frames, command icons and real replacement-egg presentation. rainbow.js handles optional offers through the existing WFRewards transaction ledger. index.html extends that ledger with quest-specific IDs and prompt verified-state persistence. build.py in the workspace derives both targets from the same game directory.

Original Part 1/2 reports are historical under docs/history-checkpoint-b. Current reports are at the ZIP root. Source artwork remains in the original uploaded package; runtime assets are optimized WebP with preserved alpha/marker anchors. Local fonts and user-supplied music are retained.
