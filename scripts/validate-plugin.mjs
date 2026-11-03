import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');
const json = (path) => JSON.parse(read(path));
const manifest = json('.cursor-plugin/plugin.json');
const mcp = json('mcp.json');

assert.equal(manifest.name, 'refreshagent');
assert.match(manifest.version, /^\d+\.\d+\.\d+$/);
assert.match(manifest.description, /SEO|seo/);
assert.equal(manifest.repository, 'https://github.com/RefreshAgent/cursor-plugin');
assert.equal(manifest.mcpServers, 'mcp.json');
assert.equal(manifest.license, 'MIT');
assert.ok(existsSync(resolve(root, manifest.logo)), 'missing logo');
assert.ok(existsSync(resolve(root, 'LICENSE')));
assert.deepEqual(Object.keys(mcp.mcpServers), ['refreshagent']);
assert.deepEqual(mcp.mcpServers.refreshagent, { url: 'https://refreshagent.com/mcp' });
assert.ok(!/Authorization|headers|token|secret|api_key/i.test(JSON.stringify(mcp)), 'MCP configuration must not embed credentials');

for (const [file, expectedName] of [
  ['skills/seo-optimization/SKILL.md', 'seo-optimization'],
  ['commands/seo-audit.md', 'seo-audit'],
  ['commands/seo-implement.md', 'seo-implement'],
]) {
  const content = read(file);
  assert.ok(content.startsWith('---\n'), file + ': missing YAML frontmatter');
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  assert.ok(match, file + ': frontmatter not closed');
  assert.ok(match[1].split('\n').includes('name: ' + expectedName), file + ': incorrect name');
  assert.ok(match[1].split('\n').some((line) => line.startsWith('description: ')), file + ': missing description');
  assert.ok(content.trim().length > 150, file + ': needs useful instructions');
}
const readme = read('README.md');
assert.ok(readme.includes('https://refreshagent.com/mcp'));
assert.ok(readme.includes('cursor.com/marketplace/publish'));
console.log('RefreshAgent Cursor plugin: manifest, MCP URL, logo, skills, commands, license and README validated.');
