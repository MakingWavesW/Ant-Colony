# Queen / Nursery / Quest integration — Checkpoint B

## Artwork and live state
Queen frame: current level, incubation bonus, soldier health bonus, active/queued nests and readiness; Nursery and Queen upgrade navigation. Nursery frame: actual two-per-level slots, egg type icons, live progress and seconds, Explorer recovery reservation/queue, breeding and chamber list. Upgrade frame: existing cost, affordability, next benefit, construction timer, progress and level cap. All 12 tier medallions map to current room level. Completion art observes completed upgrades without granting rewards.

Worker and Soldier frames: living population, hatching population, deliveries/priority orders and recruited escort count. Existing forage/priority/cancel/recruit/patrol/attack/retreat/dismiss APIs remain authoritative. Disabled breeding checks resources, active/queued nests and population cap; full or unaffordable actions explain the constraint.

Journal and tracker: all 12 existing quests, current progress, instructions, leaf rewards, completed/current/locked states, collapsible tracker and original Show Trail route. Completion medals decorate existing success events. No reward or advertising transaction was added.

## Slot art mapping by appearance
- Empty moss border: slot-empty.webp (unaffordable empty nest).
- Bright plain rim: slot-available.webp (available empty nest).
- Amber nest: slot-incubating.webp (active incubation).
- Golden glowing rim: slot-hatching.webp (last 20% of incubation).
- Boarded nest: slot-locked.webp retained as a reserved asset, not displayed as an invented capacity state.
Queued Explorer recovery is explicitly listed beneath the slots; it cannot occupy an extra active slot. Hatching remains automatic, with no extra claim step.

## Integrity
QL owns breeding, costs, clocks, hatching, room levels and death recovery. Journey owns progression, rewards and save fields. New scripts add presentation and command buttons, not duplicate economies or AI loops. Part 1 fonts, image buttons, resource HUD, loading, settings and audio controller are retained. Illustrations are alpha-cropped/resized WebP, and animation remains CSS/procedural with reduced-motion support. The only presentation timer runs at 250 ms and skips closed management panels; content refreshes at second granularity or state changes.

## Scope
No Queen/Nursery source simulation rewrite, no extra engine dependency, no Playgama monetization or Advanced Banner implementation. The inherited standalone platform adapter is unchanged. Original layered source art stays in the supplied package; runtime derivatives and a manifest are in this checkpoint.
