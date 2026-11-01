# Save compatibility

Standalone keeps existing origin-scoped local save keys, including underroot_colony_v1. Checkpoint B's queensLegacy and journey objects, resources, population, room timers, discoveries, settings and rewards remain in the same serialized game. No reset or schema replacement is introduced.

Part 3 adds optional questId to pending bonus transactions and uses deterministic quest receipt IDs. Existing UUID receipts and verified pending bonuses still restore. Journey.offers persists declined, requested, unavailable, failed and reward-granted decisions. Ordinary quest rewards remain independent from advertisements.

The Playgama target loads the existing underroot_bundle_v1 through Bridge storage before gameplay starts. It does not automatically import unrelated browser-local saves into a platform account. An unread or invalid cloud bundle causes explicit retry/session-only play, never an empty-cloud overwrite. Bridge decides actual guest/local versus authenticated backing according to platform support. Test account transitions in Sandbox.

Incubation/construction keep Checkpoint B simulation-clock behavior: remaining duration survives reload, with no new offline progression. Saving verified bonuses preserves the existing recovery model and one-time consumed receipts. Do not close a tab while a save-pending warning is shown; use Retry Saving.

Checkpoint B remains byte-identical in CHECKPOINT_B_ROLLBACK.zip. SHA-256: 0650751ff43ec7d4cd60526c214cfc1e38faad0c0f891d4c2682a7fe5eafdf2a
