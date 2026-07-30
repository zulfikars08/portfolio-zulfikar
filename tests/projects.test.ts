import assert from 'node:assert/strict';
import { projects } from '../src/data/projects.ts';
import { projectSlug } from '../src/data/project-utils.ts';
assert.equal(projects.en.length, projects.id.length, 'locale project counts differ');
assert.equal(new Set(projects.en.map((p) => projectSlug(p.title))).size, projects.en.length, 'slugs must be unique');
for (const locale of ['en', 'id'] as const) for (const project of projects[locale]) for (const key of ['title', 'summary', 'problem', 'solution', 'role', 'impact', 'confidentiality'] as const) assert.ok(project[key].trim(), `${locale} ${project.title}: ${key} missing`);
console.log(`PASS: ${projects.en.length} bilingual projects; unique slugs; required fields complete`);
