# Accepted and Monitored Dependency Risks

Date: 30 July 2026

`npm audit --omit=dev` reports three high package findings through Next.js 16.2.12:

1. `next` — aggregate finding caused by bundled `postcss` and `sharp` paths.
2. `next > postcss` — source-map parsing/path disclosure advisories. Portfolio does not accept or compile user-supplied CSS or source maps at runtime.
3. `next > sharp` — inherited libvips advisories. Portfolio image optimization currently processes repository-controlled local assets; no user-upload image endpoint exists.

Status: accepted and monitored until compatible upstream Next.js patch is available.

Mitigation:

- Next upgraded from 16.2.6 to 16.2.12.
- Nodemailer upgraded from 8.0.7 to 9.0.3; its reported advisories are cleared.
- No `npm audit fix --force` executed.
- npm's current suggested remediation is an incompatible major downgrade to Next 9.3.3; rejected.
- Re-run `npm audit --omit=dev` before each deployment and update Next when a compatible release resolves bundled dependencies.
- Keep image sources repository-controlled and do not introduce runtime user-supplied CSS/source maps without re-triage.

Evidence:

- `qa/dogfood/npm-audit-production-after.json`
- `qa/dogfood/npm-audit-all-after.json`
