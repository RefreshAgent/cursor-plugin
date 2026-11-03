---
name: seo-implement
description: Implement the selected SEO improvements in the current project and verify the changes.
---

# Implement approved SEO fixes

Use the `seo-optimization` skill.

1. Identify the specific SEO changes the user approved. If no approved scope exists, propose a small prioritized set and ask which changes to implement.
2. Match affected pages to concrete code files and inspect existing tests and conventions.
3. Implement the smallest safe diffs. Preserve behavior, UX, accessibility and route semantics.
4. Validate titles, descriptions, canonical tags, redirects, internal links, indexing controls and structured data as relevant to the actual changes.
5. Run the project's appropriate tests, formatter, lint and build when available.
6. Summarize edited files, test results, unresolved risks and how to measure outcomes. Do not deploy, publish or make paid external calls without explicit authorization.
