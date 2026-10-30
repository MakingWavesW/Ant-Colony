# SOL 6.1 HIGH — UNDERROOT EXECUTION MASTER PROMPT

> **READ THIS FIRST.** You are the implementing engineer. The detailed game specification follows this execution contract. This is a command to edit, test, and deliver game files—not a request for an outline, synopsis, or concept art.

## YOUR INPUTS AND ACTUAL BASELINE

- Attached archive: `UNDERROOT_Phase3_Smart_Gathering.zip`. It contains **one existing HTML game**, `UNDERROOT_Phase3_Smart_Gathering.html`, of about **201 KB uncompressed**, with the existing HTML/CSS/JavaScript game implementation. Treat this as the authoritative source code, not a finished Wild Frontier build.
- This document contains the full Wild Frontier specification below, including large world, enemy designs, resource regeneration, rewarding ads, Playgama and YouTube Playables requirements.
- Prior assistant attempts had an **offline workspace/file reader error**. Uploading files repeatedly did not repair that environment. Never claim that a new session automatically fixes access.
- The original game does **not** yet contain Playgama or YouTube SDK integration. Do not assume it does.
- Any design reference is inspiration only: original artwork/animations, no asset or code copying from Pocket Ants.

## CRITICAL FIRST ACTION — ACCESS TEST, THEN BUILD

1. Check tool and workspace availability immediately. Without wasting turns, list accessible files and read the ZIP central directory. Identify and inspect the HTML inside. Do not merely say you see a file attachment.
2. Confirm write access by creating a small temporary file and reading it back (in the working project space, then remove it).
3. Verify that you can create a ZIP or other downloadable artifact. Do not state that any output is downloadable until a concrete accessible path/file has been verified.
4. **If file access/editing is unavailable:** state `BLOCKED — NO FILE WORKSPACE`. Briefly report which read/write check failed and the recovery action (fresh capable coding environment or attachment availability). Do not pretend to implement changes, regenerate HTML from memory, or burn time pasting the whole existing file into the response.
5. If access works, **proceed with actual edits immediately**. You have my authorization to modify the uploaded game in a working copy and produce new local downloadable artifacts. You do **not** have authorization to publish, submit accounts, accept legal terms, spend money, or change unrelated repositories.

## SOL-HIGH WORKING RULES

- **Prioritize verified code over verbose narration.** Inspect, make a short implementation checklist, edit files, execute tests, package, and report facts.
- Keep a byte-for-byte original backup and create a working project. Preserve all working gameplay. If you modularize the single HTML into CSS/JS/assets, preserve behavior and offer a buildable standalone HTML where practical.
- Implement core mechanics before visual polish. A beautiful mockup without a functioning playable game is unacceptable.
- Avoid destructive rewrites. Integrate with existing state objects, input handlers, render loop, entity lists, persistence, and UI controls. When a subsystem must be replaced, document compatibility/migration.
- Use robust modular components but avoid unnecessary framework installation, external dependencies, and network-only game assets. Prefer HTML5 Canvas/JS and original efficient vector/procedural art. Do not inflate files with empty padding.
- Do not paste massive HTML, encoded images, or source files into chat or tool outputs. Work directly on files; summaries should remain short enough to avoid the previously encountered 4 MiB decoded-message ceiling.
- If a requested API is not available or official docs cannot be reached, **do not invent a working SDK**. Build a clean adapter interface; mark live integration as blocked/unverified, disable production ad offers when unavailable, and finish the rest of the game.
- Do not claim browser tests, FPS benchmarks, ad impressions, Playgama QA, or YouTube certification occurred unless they actually occurred.

## IMPLEMENTATION ORDER AND ACCEPTANCE GATES

### MILESTONE A — KEEP THE GAME PLAYABLE (mandatory)

A1. Map the existing game structure and identify working systems: surface/underground, explorer WASD + touch, colony/queen, worker gathering/priorities, soldier behaviors, economy, saving, UI, and render loop.

A2. Create a baseline smoke test and a backup. Use named game constants/config and a single source of truth for resource types, inventory, deposit amounts, ants, and saved state.

A3. Expand the actual **world-space map** (ideally 4–6× area as specified; avoid merely zooming out), preserving camera follow, mobile control, entrance access, and collision. Build natural biome clusters, minimap, recognizable landmarks, and culling/chunks. Put some resources within a reasonable starting radius and tougher encounters in distant regions.

A4. Replace tiny scattered collectible nodes with **three big depots for EACH existing resource type**, including Food/Berries, Leaves, Seeds, Nectar and Soil. Each new depot starts with an independent random integer 1,000–2,300. When ONE depot reaches zero, automatically retire it and generate ONE reachable same-type depot elsewhere (without waiting for other depots). Respect unique IDs, non-overlap, no negative counts, discoverability, priority-worker retargeting, persistence and inventory/storage rules. Under no circumstances let rewarded ads alter depot population or depot quantity directly.

A5. Repair stacked workers/soldiers. Implement cheap local separation, different patrol/idle targets and queue/reservation offsets; avoid N² scans across all ants and avoid a shared exact entrance coordinate as the idle destination. Soldier patrols, detects enemies, protects workers and resumes patrol; idle workers wander and accept priority jobs. Preserve practical passage through narrow underground tunnels.

A6. Retest gathering/delivery, queen/hatching, digging, combat, surface ↔ underground, save/load, and input. **Package a playable Milestone A build before advancing** so there is a fallback if later systems prove harder.

### MILESTONE B — CREATURES, COMBAT AND FINISH (mandatory)

B1. Create ORIGINAL scary-but-general-audience creatures: giant stalking spider (eight articulated legs), armored beetle (mandibles and charge), aggressive rival fire ants (coordinated patrol), mantis (foreleg wind-up and strike). Strong distinctive silhouette/anatomy, animation, threat telegraph, damage and defeat states. Do not use oversized generic colored circles or copied copyrighted images.

B2. Use coherent 2D art direction, animated terrain/resource piles, readable shadows/lighting and polished UX. Maintain existing menu functionality, HUD sizes where practical and unobstructed touch controls. All animations must be efficient and reflect the game state.

B3. Balance danger: safe near initial nest, stronger far away; enemies cannot attack through walls, indefinitely pursue player, or instantly wipe out colony without warning. Add meaningful exploration goals and clear discovery feedback.

B4. Profile actual bottlenecks if tools permit. Use spatial partitioning, cached world layers, view culling, sensible AI tick rates, and avoid per-frame broad-pathfinding. Test increasing ant counts (10/25/50/100 if feasible) and report *measured* numbers only.

B5. Complete gameplay QA and package a playable Milestone B build before platform work.

### MILESTONE C — BONUS CENTER + REAL PLATFORM ADAPTERS (mandatory where SDKs and tooling permit)

C1. Add a clearly **optional** Bonus Center: 4–6 offers (example +150 food, +120 leaves, +100 seeds, +75 nectar, +120 soil, or 2× gathering for three minutes). Bonuses go to correctly bounded inventory or worker multipliers, not to existing resource deposits. No forced ads or punishing users for declining.

C2. Implement shared RewardCatalog + RewardService + per-platform AdAdapter with transaction ID, one-at-a-time requests, confirmed reward signal, exactly-once/idempotent reward grant, state saving, cancellation/no-fill/error handling, pause/resume and user mute state preservation. A mock ad is allowed **only in a clearly labeled development/test harness**, never as a real monetized ad in the shipped builds. Do not give bonuses if a platform SDK cannot confirm successful reward completion.

C3. Make separate publish-target bundles from ONE maintained gameplay source:
- `UNDERROOT_Wild_Frontier_Playgama.zip`: only official current **Playgama Bridge** integration, config, lifecycle, storage and rewarded ads; no YouTube SDK.
- `UNDERROOT_Wild_Frontier_YouTube_Playables.zip`: only current **YouTube Playables** SDK, supported readiness, audio lifecycle, cloud saving and SDK rewarded ads; no Playgama SDK or unauthorized third-party ads.
- `UNDERROOT_Wild_Frontier_Standalone.zip`: clean offline/normal browser build, saved locally, no fake production ads (optional but strongly preferred).

C4. **Before implementing SDK-specific calls**, check official up-to-date docs at the URLs in the full spec. Verify supported API names, callbacks, configuration, packaging, size caps, age/audience and monetization settings. These can change. Do not simply trust old snippets, guess undocumented functions, or mistake local mocks for live integration.

C5. Check each archive contains `index.html` at the ZIP root and resolvable relative game assets. Produce separate reports for local QA, mocked SDK validation and any **actually executed** platform QA (not merely planned). If platform tools are inaccessible, explicitly state unverified Playgama/YouTube steps; do not label an untested archive as certified or accepted.

### MILESTONE D — FINAL VERIFICATION AND HANDOFF

D1. Automate unit/invariant tests when feasible for: 3 deposits per resource, 1,000–2,300 spawn values, independent replacement, valid/reachable spawn positions, conservation on harvesting/delivery, unique IDs, save roundtrip, no infinite replacement loop, and no resource duplication.

D2. Reward-specific tests for verified success, cancel, no fill, duplicate callbacks, rapid taps, game pause/background, save failure, and replay after reload. Verify no false rewards or stuck input/audio.

D3. Smoke-test gameplay with real browser automation if available; attach clear notes for anything requiring a real Playgama or YouTube developer account.

D4. Deliver actual downloadable files, `README_BEGINNER.md`, `PUBLISHING_GUIDE.md`, and `IMPLEMENTATION_AND_TEST_REPORT.md` showing WHAT CHANGED / WHAT WAS TESTED / WHAT REMAINS. Archive should never be reported as uploaded or published without actual verified action.

## STOPPING RULES / TIME BUDGET

- If you cannot finish every milestone during the current work session, **deliver the best fully playable build achieved**, not a broken half-completed ZIP or a promise of later background work. Include the remaining tasks as a specific implementation checklist.
- Never block all gameplay improvements merely because real Playgama/YouTube SDK testing needs credentials or an online platform session.
- The following **complete detailed specification governs features and quality**, subject to this execution order, verification requirement, and truthful reporting. Preserve all requested features, unless platform restrictions force an explicitly documented change.

---

# DETAILED ORIGINAL WILD FRONTIER SPECIFICATION (PRESERVED)

# UNDERROOT — THE WILD FRONTIER
## COMPLETE GAME SPECIFICATION — GPT-6.1 SOL (HIGH) — DUAL PLATFORM + REWARDED ADS

You are an elite Game Director, Lead HTML5 Game Engineer, 2D Creature Artist, Gameplay AI Programmer, Procedural World Designer, Animation Specialist, Performance Engineer, and Quality Assurance Lead.

Your task is to make a major, fully playable upgrade to my existing game:

**UNDERROOT — Ant Colony Chronicles**

This is an original, cartoon-style ant colony simulator inspired by the gameplay genre of Pocket Ants.

I will attach the latest playable game files and relevant visual references.

**You must modify the actual game, not create mockups or merely provide design suggestions.**

## CRITICAL INSTRUCTIONS

1. Inspect the complete existing project before editing.
2. Preserve functional game systems and save data wherever possible.
3. Do not start from scratch unless a specific subsystem genuinely requires rebuilding.
4. Create original creature designs and artwork.
5. Keep the game playable offline in HTML5.
6. Support desktop and mobile controls.
7. Preserve the existing GUI unless improvements are necessary.
8. Keep controls simple enough for young children.
9. Avoid repetitive placeholder graphics.
10. Optimize performance for large environments and growing ant populations.
11. Deliver a complete, runnable game and test it.
12. Build two distinct publishing packages: one Playgama Bridge version and one YouTube Playables SDK version, plus an optional standalone browser version.
13. Add genuinely optional rewarded ads that only grant bonuses after platform-confirmed success, never from a fake timer or merely clicking a button.
14. Do not mix platform ad SDKs, external monetization providers, or storage backends across the releases.
15. Keep the game suitable for the general audience; YouTube Playables requires content aimed at a general audience (13+), not content specifically marketed as made for kids. Keep the controls simple without describing the YouTube listing as a children's game.
16. Any release, developer registration, agreement, payment, or submission must be performed by an eligible developer / parent or guardian where required; do not submit or accept terms automatically.

# PHASE 1 — MASSIVELY EXPAND THE WORLD

The current surface world feels too small and repetitive.

Transform it into a significantly larger, explorable natural ecosystem.

## World size

- Increase the explorable surface dimensions approximately 4–6 times where practical.
- Use a configurable world-size setting.
- Ensure world dimensions genuinely increase rather than simply zooming the camera out.
- Support smooth camera following.
- Support mouse/touch map navigation where appropriate.
- Prevent movement beyond world boundaries.
- Keep the colony entrance easily recognizable.
- Include an accessible minimap and an expandable full map.

## World regions

Create visually distinct interconnected environments.

### 1. Green Meadow
- Vibrant cartoon grass.
- Small flowers.
- Clover patches.
- Fallen leaves.
- Soft dirt trails.
- Small stones.
- Gentle vegetation movement.

### 2. Forest Floor
- Massive fallen branches.
- Twigs and roots.
- Leaf-covered terrain.
- Mossy stones.
- Tree-shadow patterns.
- Natural clearings.

### 3. Dry Rocky Terrain
- Brown soil.
- Pebbles.
- Cracked earth.
- Stone formations.
- Dry vegetation.
- Distinctive sandy pathways.

### 4. Dark Wilderness
- Dense vegetation.
- Atmospheric shadows.
- Spider webs.
- Strange mushrooms.
- Dangerous insect habitats.
- More threatening environmental audio.

Each region must have a clear visual identity.

The world should not look like a single stretched texture.

## Procedural decoration

Use seeded procedural generation for natural decoration, allowing the world to remain visually consistent after reload.

Avoid placing hundreds of unrelated objects randomly.

Use natural clusters and recognizable landmarks.

## Performance

Use viewport culling, chunk-based rendering or equivalent techniques, and cached terrain graphics.

Offscreen decorative objects should not require full per-frame updates.

The large map must remain smooth on typical desktop and mobile hardware.

# PHASE 2 — COMPLETE RESOURCE DEPOSIT SYSTEM OVERHAUL

THIS IS ONE OF THE HIGHEST PRIORITIES.

The current world contains too many small, scattered resource objects.

Replace this with a system of large, meaningful, harvestable resource deposits.

## REQUIRED RESOURCE TYPES

Use the existing resource types, including:

- Food / Berries.
- Leaves.
- Seeds.
- Nectar.
- Soil.

Preserve any other resource types already implemented unless there is a justified reason to change them.

## SOURCE COUNT

Each resource type must have 2–3 active large deposits across the surface world.

Default configuration:

**3 active deposits per resource type.**

For the five resource types listed above, this creates 15 major resource deposits.

These deposits should be distributed across suitable locations.

Do not place all deposits next to the colony.

Avoid spawning them inside walls, obstacles, inaccessible terrain, other deposits, or enemy collision geometry.

## RESOURCE QUANTITY

Every new resource deposit must spawn with a randomly generated whole-number quantity between:

**MINIMUM = 1,000**

**MAXIMUM = 2,300**

Examples:
- Leaf Source A: 1,458 leaves.
- Leaf Source B: 2,174 leaves.
- Leaf Source C: 1,092 leaves.

The amount must be determined independently for each deposit.

The displayed value must represent the actual remaining resources.

Gathering must decrease it correctly.

## RESOURCE REPLACEMENT SYSTEM

When one resource deposit becomes completely depleted:

1. Detect the depletion.
2. Mark the source as exhausted.
3. Stop assigning new workers to it.
4. Allow existing workers to safely finish or abandon their orders.
5. Remove the exhausted deposit using a small visual animation.
6. Generate a new deposit of the SAME resource type elsewhere in a valid location.
7. Assign it a random starting quantity from 1,000 to 2,300.
8. Give it a new unique source ID.
9. Update the world and minimap.
10. Ensure active source counts remain within the required range.

Example:

There are three leaf deposits.

A = 1,480
B = 2,200
C = 1,700

Workers completely harvest deposit A.

Deposit A disappears.

A new Leaf Source D is generated elsewhere with 1,932 leaves.

The world once again contains three active leaf sources.

**Repeat this indefinitely.**

IMPORTANT:
- Do not wait until all three deposits are depleted.
- Replenish individually when any source is exhausted.
- Do not duplicate replacement deposits.
- Do not create an unlimited number of sources.
- Avoid repeatedly spawning and despawning sources in one frame.
- Ensure replacements are reachable.
- Prevent resource amounts from becoming negative.
- Preserve source state and coordinates when saving.

## LARGE CARTOON RESOURCE MODELS

Every resource deposit must look visually different.

### Leaf Deposits
- Large recognizable piles of overlapping green leaves.
- Different leaf sizes.
- Visible veins.
- Smooth cartoon outlines.
- Green leaf fragments when harvested.
- Deposit visibly shrinks as its quantity decreases.

### Food Deposits
- Large berry clusters.
- Fruit fragments.
- Natural food piles.
- Rich red, orange, and purple colors.
- Clear gathering animations.
- Visually shrinking piles.

### Seed Deposits
- Large heaps of seeds or grains.
- Distinct brown and golden colors.
- Individual seed shapes.
- Small particles while harvesting.
- Visible reduction in pile size.

### Nectar Deposits
- Flower clusters.
- Golden nectar droplets.
- Visually recognizable harvesting points.
- Subtle glowing highlights.
- Animated flower petals.

### Soil Deposits
- Large dirt mounds.
- Loose soil pellets.
- Distinct brown shades.
- Small rocks.
- Excavation effects.
- Visible quantity reduction.

Do not use identical generic circles with different colors.

## RESOURCE DISCOVERY

Deposits should be discoverable through exploration.

When the player approaches a deposit, show:

Resource Name
Remaining Quantity

Two options:

**GATHER MYSELF**

**SEND WORKERS**

Gather Myself:
- Player performs harvesting animation.
- Player carries an item.
- Resource quantity decreases.
- The item is delivered to colony storage.

Send Workers:
- Source becomes a priority target.
- Worker ants receive collection orders.
- A marker appears over the source.
- Workers travel to the deposit.
- Workers harvest and return.
- Players can cancel priority orders.

Keep this system intuitive and functional.

# PHASE 3 — CREATE MUCH SCARIER CREATURE DESIGNS

The current enemy insects are too simple and visually unimpressive.

Redesign creatures into original, striking, intimidating cartoon enemies.

They should look powerful and dangerous while remaining suitable for a general-audience strategy game.

Avoid excessive gore or disturbing injury details.

## Creature A — GIANT HUNTER SPIDER

Design:
- Large hairy body.
- Eight long articulated legs.
- Dark charcoal exoskeleton.
- Deep red or amber glowing eyes.
- Intimidating fangs.
- Sharp silhouette.
- Subtle body breathing.

Animations:
- Slow stalking.
- Leg articulation.
- Sudden quick movement.
- Attacking.
- Taking damage.
- Defeat.
- Idle threat display.

Behavior:
- Stalks nearby ants.
- Attacks when in range.
- Has a recognizable warning animation.
- Can retreat or reposition.

## Creature B — ARMORED PREDATOR BEETLE

Design:
- Heavy dark armored shell.
- Oversized mandibles.
- Distinct plated body.
- Powerful legs.
- Sharp horn or armored head.
- Shiny shell highlights.

Animations:
- Slow heavy walking.
- Charging.
- Mandible snapping.
- Shell movement.
- Staggering.
- Defeat.

Behavior:
- Resistant to damage.
- Slow movement.
- Occasional charge attack.
- Clear attack warning.

## Creature C — HOSTILE FIRE ANTS

Design:
- Fierce reddish body coloration.
- Sharp-looking mandibles.
- Distinct darker body segments.
- Fast coordinated movement.
- Clear visual differences from friendly ants.

Behavior:
- Move in small groups.
- Patrol dangerous areas.
- Chase nearby colony ants.
- Attempt coordinated attacks.
- Retreat or regroup when appropriate.

Animations:
- Running.
- Turning.
- Mandible attacks.
- Group movement.
- Warning behavior.
- Defeat.

## Creature D — GIANT MANTIS

Design:
- Tall, distinctive green insect.
- Large triangular head.
- Expressive eyes.
- Long striking forelegs.
- Recognizable raptorial arms.
- Sharp but original cartoon silhouette.

Animations:
- Slow searching.
- Head tracking.
- Raised attacking pose.
- Rapid foreleg strike.
- Recovery.
- Defeat.

Behavior:
- Ambush predator.
- Clear attack wind-up.
- High-damage close-range attack.
- Limited detection radius.

## OPTIONAL CREATURES

If time and performance permit, add:
- Scorpions.
- Centipedes.
- Giant rival queen guards.
- Dangerous territorial insects.

Do not sacrifice the quality of the four primary creatures to add many weak placeholder enemies.

# PHASE 4 — ADVANCED CREATURE ANIMATIONS

Creatures must not look like static pictures sliding across the ground.

Implement:
- Animated legs.
- Directional turning.
- Body movement.
- Attack preparation.
- Attack execution.
- Damage response.
- Idle behavior.
- Natural death or defeat animation.

Use efficient procedural 2D skeletal animation, articulated parts, or optimized sprite animation where suitable.

## Creature size

Make enemies visually larger and more intimidating than normal worker ants where biologically and artistically appropriate.

Different creatures must have recognizable silhouettes.

## Environmental integration

Creatures should interact with their habitat.

Examples:
- Spiders near webs and shadowed areas.
- Beetles near rocks and fallen wood.
- Fire ants near rival nests.
- Mantises near tall vegetation.

Make hostile creatures appear to belong in the world.

# PHASE 5 — SMART ENEMY AI AND FAIR COMBAT

Improve enemy behavior without making combat unfair.

Use clear states:
- Idle.
- Patrol.
- Search.
- Detect.
- Chase.
- Attack.
- Recover.
- Retreat.
- Defeated.

Enemies should:
- Detect ants within appropriate ranges.
- Avoid attacking through solid obstacles.
- Respect movement and collision.
- React to nearby soldiers.
- Stop chasing beyond reasonable boundaries.
- Use efficient targeting.

## Soldier defense

Friendly soldiers should:
- Patrol near the colony.
- Maintain spacing.
- Detect threats.
- Intercept enemies.
- Protect workers.
- Return to patrol after combat.

## Critical existing bug

The current game previously showed soldiers and idle ants stacking on top of one another at the colony entrance.

Inspect and correct this behavior.

Implement:
- Distributed patrol points.
- Local separation steering.
- Individual movement targets.
- Efficient nearby-ant detection.
- Shared destination spacing.
- Natural idle wandering.

Do not solve the problem by hiding overlapping ants.

## Balancing

Early creatures should be manageable.

Stronger creatures should appear progressively farther from the starting colony or in clearly dangerous zones.

Use visual warnings before powerful attacks.

Keep the game suitable for beginners.

# PHASE 6 — MAKE THE BIG WORLD FUN TO EXPLORE

The larger map must introduce meaningful gameplay, not just more walking.

Implement:
- Interesting landmarks.
- Discoverable resource deposits.
- Dangerous creature territories.
- Safe zones near the colony.
- Optional exploration rewards.
- Clearly distinguishable biomes.
- Smooth camera tracking.
- Useful minimap markers.

## Map features

The minimap should indicate:
- Player location.
- Colony entrance.
- Discovered resource deposits.
- Priority sources.
- Major landmarks.
- Nearby significant threats where appropriate.

Allow players to open a larger map.

Do not reveal every undiscovered secret automatically unless that matches the chosen gameplay design.

## Explorer ant

Preserve:
- WASD movement.
- Sprint.
- Mobile joystick.
- Camera follow.
- Resource interaction.
- Entrance interaction.
- Underground exploration.

Improve movement responsiveness if necessary.

# PHASE 7 — ART DIRECTION AND VISUAL POLISH

The entire game should feel like one coherent original cartoon world.

Use:
- Distinct clean silhouettes.
- Rich but readable colors.
- Rounded cartoon shading.
- Attractive terrain textures.
- Soft shadows.
- Expressive creature movement.
- Visible environmental details.
- Clear UI states.

Avoid:
- Generic placeholder circles.
- Blurry stretched textures.
- Extremely tiny unreadable objects.
- Inconsistent art styles.
- Excessive particles.
- Heavy glow effects.
- Unnecessary screen clutter.

Creature designs should be intimidating, visually memorable, and original.

Keep resource deposits immediately recognizable.

# PHASE 8 — PERFORMANCE OPTIMIZATION

The game must remain smooth despite the larger world.

Inspect:
- World rendering.
- Particle counts.
- AI update frequency.
- Pathfinding.
- Entity collisions.
- Ant separation.
- Enemy targeting.
- Resource search.
- Animation calculations.

Implement, where appropriate:
- Spatial hash grids.
- Viewport culling.
- Chunk-based terrain.
- Reusable render assets.
- Reusable animation data.
- Cached paths.
- AI update throttling.
- Limited offscreen simulation.
- Efficient worker target assignment.

Avoid repeatedly sorting every enemy and every ant each frame.

Avoid O(N²) loops for large populations when efficient spatial queries are possible.

Target 60 FPS on capable devices and maintain stable gameplay on lower-end hardware.

Do not invent FPS benchmarks.

# PHASE 9 — SAVE SYSTEM AND WORLD PERSISTENCE

Preserve existing game progress wherever practical.

Save:
- Colony level.
- Queen upgrades.
- Workers.
- Soldiers.
- Resources.
- Underground chambers.
- Resource deposit locations.
- Remaining deposit quantities.
- Active priority orders.
- Discovered map areas.
- Relevant gameplay progression.

Use stable IDs for resource deposits.

When reloading, do not accidentally create duplicate sources.

When loading an older save, migrate safely to the new resource system.

Keep a backup-compatible migration strategy.


# PHASE 9A — OPTIONAL REWARDED ADS AND BONUS CENTER

THIS IS A REQUIRED, PLAYABLE FEATURE. It is not a decorative menu.

## Why it exists

Players should be able to continue gathering, hatching, upgrading, and defending without ever watching an advertisement. Watching an ad can grant a **small optional bonus** that speeds up ordinary progress; it must not replace the core game loop, gate story progress, force extra clicks, or feel coercive.

## Bonus Center UI

Add an attractive, animated **🎁 BONUS CENTER** button to the existing menu. Make it easy to find without covering the explorer joystick, world, minimap, enemy indicators or combat buttons. On desktop and mobile, open a clean cartoon panel. Show one to several eligible offers with:

- Distinctive icon and short title.
- Exact reward amount and duration.
- Transparent button label: **WATCH AD → +150 FOOD**, **WATCH AD → 2× WORKERS FOR 3 MIN**, etc.
- An X/Not Now button and clear option to continue without watching.
- An actual unavailable/disabled state if platform ads are unavailable, with a brief explanation instead of a fake ad.
- Clear duration/progress bar for timed boosts and confirmation animation after verified completion.

Offer examples to implement and balance using the game's true economy:

1. Berry Basket — +150 Food.
2. Fresh Leaves — +120 Leaves.
3. Seed Supply — +100 Seeds.
4. Nectar Treat — +75 Nectar.
5. Soil Delivery — +120 Soil.
6. Worker Rush — 2× ordinary worker gathering for 3 minutes (not permanent).

Choose a manageable set of 4–6 options and calibrate exact numbers with actual costs and gathering rates. Keep bonuses finite, small, and strictly in-game; **do not change the world deposit sizes of 1,000–2,300 or create fake new deposit nodes when rewarding players.** Deposit quantities still obey existing source-spawning logic. Reward items should be added to player inventory subject to the correct storage-capacity rules, overflow behavior, and economy integrity.

Use a modest, configurable cooldown and per-session/daily maximum only if they are appropriate to the platform, user experience, and Playgama/YouTube rules; do not manufacture an artificial scarcity countdown or pressure players to watch ads. Never force a rewarded ad upon launching the game, losing combat, switching the surface/underground view, or running out of a resource. Do not build a compulsory lives-for-ads loop. Avoid popups that nag the player.

## Rewarded-ad flow — MUST use real platform validation

Implement a reusable game-owned RewardService with platform-specific AdAdapters. The UI calls RewardService; it must NOT directly call Playgama or YouTube APIs.

State machine:

IDLE → REQUESTED → AD_SHOWING → VERIFIED_REWARDED → ATOMIC_GRANT → SAVED → IDLE

Also support: NOT_AVAILABLE, CLOSED_WITHOUT_REWARD, ERROR, PAUSED, RESTARTED.

- Start ONLY on explicit user selection.
- Determine whether an ad is supported and available on this platform.
- Before the ad, save existing gameplay and freeze ant simulation, input, hostile attacks, cooldowns where appropriate, music and game SFX.
- Call the correct official SDK rewarded-ad API for the active build.
- Grant a reward **only after** an official rewarded-completion callback or confirmed true result; NEVER merely on ad display, click, close, failed request, SDK timeout, or fake local countdown.
- Show a celebratory but fast animation and update inventory, timers, HUD, achievements only after a verified reward.
- Handle close/cancel/no fill/network error safely: return to gameplay with no reward, no soft lock, and no game-state corruption.
- Restore game audio according to the platform's current mute state (not blindly unmute), and resume correctly.
- Prevent double-click requests and duplicate callbacks. Use a unique logical reward transaction identifier, a consumed/credited state, idempotent grant logic, and persistence to prevent double-credit from retries or crashes.
- Save progress immediately after a successful reward; if save fails, preserve a retryable, consistent local transaction and do not silently lose credits.
- Treat multiple fast taps, switching tabs, device backgrounding, paused/resumed ads, and save/load during an ad as first-class edge cases.
- Advertisements should never be simulated as real ads during production. You may implement a clearly labeled DEV ONLY mock provider for automated QA, excluded or disabled in release bundles.

## Optional interstitial ads

Only implement if beneficial and compliant. They must use the current platform's official SDK and occur exclusively at natural transitions (e.g., after an actual completed expedition, after a level, or after a user-initiated pause), **never** during resource gathering, walking, ant combat, underground exploration, or critical game interactions. Do not use interstitial callbacks to award rewarded-ad bonuses. Prefer opt-in rewarded ads rather than intrusive interruptions.

## Cross-platform game economy

Never give bonuses in cash, real-world value, transferable currency or cryptocurrency. Do not provide paid upgrades that can only be earned through a rewarded ad; all core progression must remain feasible by normal play. Do not save ad IDs, reward tokens, or account identifiers in public analytics or share state between unrelated players.

# PHASE 9B — PLAYGAMA + YOUTUBE PLAYABLES DISTRIBUTION

Create ONE maintainable game codebase with **separate, explicit publishing targets**, not a single game containing two monetization SDKs that might be invoked incorrectly.

## Build A — Playgama

Read the CURRENT official docs rather than inventing API names:

- https://wiki.playgama.com/playgama/quick-start
- https://wiki.playgama.com/playgama/game-requirements/advertising-requirements
- https://wiki.playgama.com/playgama/game-requirements/technical-requirements
- https://wiki.playgama.com/playgama/sdk/getting-started

Required:

- Integrate the current official **Playgama Bridge SDK** and its configuration file as documented for Plain JS HTML5 games.
- Use the official Playgama Bridge advertising functions and official rewarded-success indication. Do not use direct third-party ad scripts or a separate custom advertising network.
- Wire platform-specific game save/loading, audio mute, pause/resume, language and SDK lifecycle as required.
- Show rewarded ads only when a user explicitly requests the advertised bonus; ad rewards must be additional, not necessary for survival or progress.
- When a full-screen ad appears, pause game action and sound; restore appropriately afterward.
- Use no unauthorized external analytics or external registration requirements.
- Keep index.html at ZIP root with correct assets and relative paths, and check the Playgama package cap and submission self-check at build time.
- Ensure platform SDK loading and local testing are properly separated. In a local browser preview without a working monetization provider, disable the watch-ad offers and leave normal gameplay functional.
- Test on Playgama's available QA tools when access permits; note all unverified acceptance checks.

## Build B — YouTube Playables

Read the CURRENT official docs:

- https://developers.google.com/youtube/gaming/playables/reference/getting_started
- https://developers.google.com/youtube/gaming/playables/reference/sdk
- https://developers.google.com/youtube/gaming/playables/reference/monetization
- https://developers.google.com/youtube/gaming/playables/certification/requirements_monetization
- https://developers.google.com/youtube/gaming/playables/certification/requirements_stability
- https://developers.google.com/youtube/gaming/playables/developer_portal
- https://developers.google.com/youtube/gaming/playables/certification/requirements_trustsafety

Required:

1. Integrate **only the YouTube Playables SDK** in this build. Load `<script src="https://www.youtube.com/game_api/v1"></script>` before other game code, per official instructions. It is a platform SDK exception to the normal rule against other remote dependencies.
2. Correctly detect `ytgame.IN_PLAYABLES_ENV` (and avoid calling unavailable functions outside it).
3. Call `ytgame.game.firstFrameReady()` and `ytgame.game.gameReady()` at their correct stages, without false ready reports.
4. Implement YouTube cloud `ytgame.game.loadData()` and `ytgame.game.saveData(data)` with serialization compatible with the platform's save limits and with migration from earlier versions where feasible.
5. Respect `ytgame.system.isAudioEnabled()`, `onAudioEnabledChange(...)`, `onPause(...)`, `onResume(...)`; no playing audio while muted/paused.
6. For rewarded ads, use **only** `ytgame.ads.requestRewardedAd(rewardId)` from a real opt-in button. Grant rewards only when the awaited SDK result confirms reward earned (`true`). Use a clear stable reward ID without private player information. A rejected/false/unavailable request must never produce a bonus.
7. Don't import Playgama Bridge, Playgama advertising, off-platform payment scripts or analytics into the YouTube build. No off-platform purchases, banners, or third-party ad networks.
8. YouTube handles pre-roll; do not implement custom pre-roll calls. Optional YouTube interstitials must use `ytgame.ads.requestInterstitialAd()` and natural breakpoints, never active gameplay.
9. On the YouTube Playables Developer Portal, rewarded/interstitial monetization settings must be enabled before real SDK ad placements can run; the SDK alone doesn't guarantee ads or revenue.
10. The game must be suitable for a general audience (13+), not expressly presented or labeled as "made for kids". Simple, accessible controls are still desirable.
11. Keep the game original with cleared artwork/music rights; do not copy Pocket Ants content.
12. Meet current performance/package limits: **initial loading MUST be under 30 MiB (SHOULD under 15 MiB); total bundle under 250 MiB by default; each file under 30 MiB; save under 3 MiB; JS heap at or below 512 MB.** Prefer far smaller initial load and files, lazy-load nonessential images/audio, aim for under 5 s initial gameplay readiness.
13. Use relative paths for bundled assets, compliant filenames, mobile-responsive portrait and landscape adaptation where feasible, and test web, Android YouTube, iOS YouTube using the official Test Suite / preview when authorized.
14. YouTube Playables developer access is currently early access / subject to consideration. Prepare a validated package, screenshots, title, IARC information and a submission checklist; **do not claim the game is already eligible, accepted, published or earning revenue**. Do not submit or accept legal terms without explicit user/parent or guardian authorization.

## Build C — Standalone HTML (optional)

Make a browser/offline demo with no actual third-party ads, no cross-platform SDK calls, and working normal gameplay and local saves. Ads/bonus buttons may be hidden or disabled (or clearly developer-only mock for tests). Keep it straightforward to open locally for feedback and regression testing.

## Architecture

Design modular adapters:

- GameCore: ants, enemy AI, maps, harvesting, colony, inventory, economy, scene switching.
- RewardCatalog: exact bonuses, cooldown configuration, balance and eligibility.
- RewardService: single-game transaction state machine, idempotency, save after grant.
- PlatformAdapter / StorageAdapter / AdAdapter / LifecycleAdapter: one implementation per target.
- Build scripts: package platform-specific configurations and dependencies, reject accidental cross-imports.

Keep gameplay state portable without assuming YouTube saves can be read by Playgama or vice versa. Preserve existing saves *on the same platform* when feasible. Treat ad availability, consent, and platform limitations as distinct from gameplay requirements.

## Proof and tests

Test mocked rewarded-success and rewarded-cancel flows, duplicate callback, repeated taps, background/resume, disconnected connection, unavailable ad, save/reload, timestamp/cooldown reset, and reward replay attacks. Test that no false reward is granted, no normal action blocks after ad failure, and resource balances remain coherent.

Separate tests for:

- Playgama Bridge configuration / SDK init / ad callbacks / saving / pause and sound.
- YouTube required readiness, saving, audio lifecycle, and test-suite results including rewarded false/true; both with appropriate platform mocks.
- Both packages load the same GAMEPLAY version, but only their own SDK/ad adapter.
- Packaging: index.html at ZIP root, supported file references, limits, licensing, no off-platform analytics on YouTube.

## Deliverable packages

- `UNDERROOT_Wild_Frontier_Playgama.zip`
- `UNDERROOT_Wild_Frontier_YouTube_Playables.zip`
- `UNDERROOT_Wild_Frontier_Standalone.zip` (optional)
- `PUBLISHING_GUIDE.md`: beginner-friendly Playgama upload and YouTube early-access / Developer Portal checklist, what requires account access or parent/guardian approval.
- `MONETIZATION_AND_TEST_REPORT.md`: implemented reward choices, real SDK functions, proof of no false reward, which platform checks genuinely ran and what remains unverified.

Do NOT claim successful real ad impressions, certification, Playgama acceptance, YouTube eligibility or payouts unless actually verified.


# PHASE 10 — TESTING

Test all new mechanics.

## Rewarded ads and multi-platform tests
- Rewarded ad offer is clear, optional, and displays the exact bonus.
- Correct SDK is used for each platform: Playgama Bridge only in Playgama build; ytgame only in YouTube build.
- No reward for canceled, failed, unavailable or unverified ads.
- Reward is granted exactly once after verified success; inventory updates and persists.
- Gameplay and audio pause/resume properly during ads, including platform mute state.
- Cooldowns, error handling and save consistency work after reload.
- YouTube build meets readiness, sound, cloud save, ad, file size and initial-load requirements.
- Playgama and YouTube publishing eligibility, account access and final submission remain honestly marked as unverified until approved.

## Resource tests
- Exactly three initial deposits per configured resource.
- Each deposit has 1,000–2,300 resources.
- Collection reduces the correct quantity.
- Deposits cannot go below zero.
- Depleted deposits are removed.
- Replacement deposits spawn.
- Replacement type matches the exhausted type.
- Replacement quantity is valid.
- Replacement location is accessible.
- No duplicate source IDs.
- No unlimited source creation.
- Save/reload preserves the system.

## AI tests
- Soldiers patrol independently.
- Idle workers do not stack.
- Priority gathering functions.
- Workers reach deposits.
- Workers return resources.
- Workers handle depleted targets.
- Enemies patrol and attack.
- Creatures respect collisions.
- Combat remains functional.

## World tests
- Camera movement.
- Map boundaries.
- Resource generation.
- Minimap.
- Biome transitions.
- Surface / Underground access.
- Mobile controls.
- Desktop controls.

## Performance tests
Test populations of approximately:
- 10 ants.
- 25 ants.
- 50 ants.
- 100 ants when supported.

Profile the game where possible.

Fix discovered errors before delivering.

# PHASE 11 — DEVELOPMENT WORKFLOW

Before implementation:

1. Inspect the current source.
2. Identify which systems already exist.
3. Identify the modules requiring change.
4. Preserve working systems.
5. Implement the new world and resource system.
6. Implement creature artwork and animations.
7. Improve patrol AI.
8. Optimize rendering and simulation.
9. Perform testing.
10. Package the result.

Do not stop at a written plan.

However, prioritize correctness and maintainability over attempting every optional feature.

## IMPORTANT MESSAGE-SIZE RESTRICTION

A previous task failed because a tool attempted to output more than 4 MiB in a single decoded message.

Avoid this error.

- Do not print huge source files.
- Do not return base64 assets inside tool messages.
- Edit files directly in the workspace.
- Keep tool logs concise.
- Use separate source files where useful.
- Package the complete game into a ZIP.
- Create a standalone HTML build if practical.

The 4 MiB tool-message limit is not a total game-size limit.

# FINAL DELIVERABLE

Produce a new playable build named:

**UNDERROOT — THE WILD FRONTIER**

Deliver:

1. Complete updated playable game.
2. Large explorable cartoon world.
3. Three substantial deposits per resource type.
4. Automatic resource deposit replenishment.
5. Beautiful, intimidating original enemy creature designs.
6. Improved creature animations.
7. Improved worker and soldier behavior.
8. Optimized rendering and AI.
9. Preserved progression and save compatibility where feasible.
10. Downloadable HTML or ZIP.
11. Testing results.
12. Known remaining limitations.
13. Optional rewarded-ad Bonus Center connected to the correct platform SDK.
14. Separate validated Playgama and YouTube Playables ZIP builds with platform-specific ad and save integrations.
15. Beginner-friendly publishing guide and test/monetization report.

## FINAL QUALITY EXPECTATION

The player should enter a large, living world filled with recognizable natural environments, giant valuable resource deposits, patrolling ants, dangerous creatures, and meaningful exploration.

Each resource source should feel important.

Every enemy should have a strong visual identity.

Ants should move independently and naturally.

The world must feel like a complete ecosystem rather than a tiny empty field with random scattered objects.

**IMPLEMENT THIS UPGRADE IN MY EXISTING GAME. DO NOT DELIVER A MOCKUP OR ONLY A DEVELOPMENT PLAN.**


---

## FINAL SOL HIGH SELF-CHECK (DO NOT SKIP)

- Did I read and inspect the ZIP's actual HTML before editing?
- Did I keep a working backup and preserve gameplay?
- Are the world and depot systems real game mechanics, not merely UI changes?
- Are all depleted depots immediately replaced by one valid new same-type deposit?
- Do soldiers and idle ants disperse and avoid stacking at entrance?
- Are scary enemy creatures animated and playable in combat?
- Do rewarded bonuses require an official confirmed ad result?
- Do separate Playgama and YouTube builds avoid importing each other's SDK?
- Is each downloadable ZIP verified to exist with `index.html` at its root?
- Have I distinguished actually tested, mocked, and blocked checks?
- Did I provide actual artifacts or explicitly state why file operations failed?
