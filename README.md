# RefreshAgent for Cursor

**SEO research and optimization inside your coding agent.** Connect Cursor to RefreshAgent's evidence-based SEO tools, identify opportunities, and turn findings into reviewed changes to your website's code.

RefreshAgent helps with content decay, search traffic diagnostics, click-through rate opportunities, content differentiation and information gain. This plugin adds an SEO optimization skill and focused commands, backed by RefreshAgent's secure remote MCP server.

The plugin code is open source. The hosted RefreshAgent service is separate and may require an account, connected data sources, or paid credits for certain tools.

## Install

After the Cursor Marketplace listing is approved, install **RefreshAgent** from Cursor's **Customize → Plugins** screen.

For development or prior to marketplace listing:

1. Clone this repository into `~/.cursor/plugins/local/refreshagent`.
2. Reload Cursor.
3. In **Customize → MCP**, enable the `plugin-refreshagent-refreshagent` server if prompted.
4. Complete RefreshAgent OAuth in Cursor's authentication flow. Sign in or create an account at [refreshagent.com](https://refreshagent.com).
5. In an open website project, ask Cursor: **"Use RefreshAgent to audit the SEO opportunities in this codebase."**

The MCP endpoint is **https://refreshagent.com/mcp**. No API key, Google OAuth credential, or customer data is stored in this repository.

If automatic OAuth cannot be completed in your Cursor version, use Cursor's MCP settings to connect the remote endpoint manually. Never paste a token in project source files or commit credentials to Git.

## Included components

- **Remote MCP**: RefreshAgent's authenticated, production Streamable HTTP service.
- **SEO optimization skill** (`skills/seo-optimization/SKILL.md`): analyze the local codebase, gather independent SEO evidence, prioritize fixes, implement approved changes and run checks.
- **`/seo-audit`**: research and produce an evidence-backed, prioritized audit.
- **`/seo-implement`**: implement selected changes, preserve product behavior and verify the diff.

Cursor detects plugin components from `.cursor-plugin/plugin.json`, `mcp.json`, `skills/` and `commands/`.

## Example prompts

> Find pages in this project with the strongest opportunity for SEO improvement. Use RefreshAgent research and show the data and file paths that justify the priorities.

> Analyze the information gain of our pricing page versus the search results. Recommend additions that genuinely help users.

> Look for pages losing search traffic, trace each one to the relevant source file, and propose the safest fixes.

> Review title tags, canonical tags, indexability and JSON-LD in this project, then implement the approved improvements with tests.

## How the workflow works

1. **Inspect code:** Locate routes, templates, content, metadata generation and existing SEO conventions. Avoid assuming a framework.
2. **Research:** Use RefreshAgent MCP tools where available. First-party Search Console and Analytics connections are optional.
3. **Prioritize:** Distinguish verified findings from hypotheses. Give evidence, target URL, source file, expected impact and confidence.
4. **Implement:** Propose specific diffs before changing code, avoid mass edits, and obtain approval for consequential changes.
5. **Verify:** Run relevant lint, tests and build; inspect generated pages where possible. Summarize what changed and what remains unverified.

The local coding agent performs reasoning and file modifications. RefreshAgent tools provide external evidence and specialized operators. The plugin does not automatically deploy or submit changes to search engines.

## Privacy, security and costs

- MCP uses OAuth with the hosted RefreshAgent service; tool execution is scoped to the authenticated account.
- Some tools can use connected website analytics; other workflows can work from public research and the local repository.
- Never expose credentials, proprietary customer content or internal URLs in public issues or sample outputs.
- Some research operations or premium features may use credits or incur charges; inspect pricing and confirm before paid/irreversible actions.
- [Privacy policy](https://refreshagent.com/privacy) · [Terms](https://refreshagent.com/terms) · [Support](mailto:support@refreshagent.com)

## For maintainers

Validate locally with `node scripts/validate-plugin.mjs` (Node.js 20+). Use [Cursor's plugin documentation](https://cursor.com/docs/plugins) to test installation locally before [submitting the repository to the Cursor Marketplace](https://cursor.com/marketplace/publish).

The repository contains only public plugin configuration and workflow instructions. The RefreshAgent backend is developed and hosted separately.

## License

The plugin wrapper, commands and skill in this repository are licensed under the MIT License (see [LICENSE](LICENSE)). This license does not apply to the hosted RefreshAgent backend, underlying tools or customer data.
