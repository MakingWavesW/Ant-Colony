# Known limitations

- Playgama package is a Sandbox candidate, not a live-approved release. Real ads/cloud/banner inventory require publisher-side acceptance.
- The official wiki was network-blocked; current official SDK source and README were inspected as the API reference.
- Mobile browser dimensions were tested using Chromium automation, not physical devices; Safari/Firefox and long-session profiling remain.
- The existing simulation clock does not advance eggs or construction while the game is closed.
- Elite health art is reserved because existing wildlife differentiates ordinary/apex, not a separate elite rank. No fake elite system was added.
- Save availability and ad inventory depend on the host/account. Standalone deliberately has no ads; offline/failed platform initialization offers session-only gameplay.
- There is no authoritative backend anti-tamper service. Transaction IDs protect normal duplicate callbacks and reloads, not deliberate modification of client state.
