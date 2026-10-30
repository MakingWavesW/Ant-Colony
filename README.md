# UNDERROOT — The Wild Frontier

An upgrade of the existing Phase 3 ant colony simulator: a 5× surface area, renewable large depots, four biomes and landmarks, articulated predators, improved ant movement and separate platform adapters.

Open `index.html`, or run `python3 -m http.server 8000` and visit http://localhost:8000. Use the Standalone edition for offline play; it never simulates production ads. Existing colony progress is migrated on the same origin.

- [Beginner run instructions and controls](README_BEGINNER.md)
- [Implementation and executed tests](IMPLEMENTATION_AND_TEST_REPORT.md)
- [Publishing and outstanding platform checks](PUBLISHING_GUIDE.md)
- [Monetization tests](MONETIZATION_AND_TEST_REPORT.md)

Build: `python3 build.py`. Verify: `node tests/run.cjs` (requires Node and `@napi-rs/canvas`). The game itself has no package dependencies. The uploaded game is retained unchanged in `original/phase3.html`; the maintained source is in `src/`.

Status: code-level checks and native Canvas render inspection; browser/mobile play-testing and live Playgama/YouTube certification are still outstanding. No live deployment or platform submission.
