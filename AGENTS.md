# control_photomode

Personal photo gallery hosted on GitHub Pages. Currently contains 144 Control
(Remedy) photomode screenshots in the `control` album; more albums can be added as
subdirectories under `gallery/`.

## Albums
- `gallery/control/` — Control (Remedy, 2019) photomode screenshots (144 files)
- `gallery/askance-session-in-moscow/` — empty, pending photos

## Structure
- `gallery/` — photo directories (each subdirectory = an album)
- `config.json` — Thumbsup gallery configuration
- `custom.css` — optional style overrides
- `CNAME` — custom domain `gallery.nukdokplex.ru` (DNS: CNAME → `<user>.github.io`)
- `LICENSE` — Unlicense (public domain)
- `GAME.md` — about the Control album (to be moved into an album subfolder)
- `.github/workflows/gallery.yml` — CI/CD: builds gallery via `ghcr.io/thumbsup/thumbsup` Docker image and deploys to Pages

## Build & deploy
No local build needed. Push to `master` triggers GitHub Actions:
1. Restores build cache for `build_output/`
2. Runs `thumbsup --config config.json` via Docker
3. Uploads artifact and deploys to GitHub Pages

## Configuration
Gallery settings in `config.json`:
- `theme`: cards | mosaic | classic | flow
- `sort-albums-by`: title | date
- `sort-media-by`: filename | date

## Limitations
- Single file upload limit: 25MB (browser) / 100MB (git push)
- Repo size limit: 75GB
- GH Actions cache: 10GB per repo, 7-day retention
