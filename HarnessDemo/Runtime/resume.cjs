'use strict';
const fs = require('node:fs');
const path = require('node:path');

// iOS can change the container's absolute path when an app is updated. The
// harness indexes projects by cwd, so use its existing JSONL resume interface
// to locate the selected session across project folders in this app's config.
function resolveResumeTarget(configDirectory, sessionID) {
  if (!sessionID) return null;
  if (!/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(sessionID)) {
    throw new Error('The saved session ID is not a UUID');
  }
  if (!configDirectory) throw new Error('CLAUDE_CONFIG_DIR is required to resume');
  const projects = path.join(configDirectory, 'projects');
  const entries = fs.existsSync(projects) ? fs.readdirSync(projects, { withFileTypes: true }) : [];
  const matches = entries.filter(entry => entry.isDirectory()).map(entry =>
    path.join(projects, entry.name, `${sessionID}.jsonl`)
  ).filter(file => fs.existsSync(file) && fs.lstatSync(file).isFile());
  if (matches.length !== 1) {
    throw new Error(matches.length ? 'Multiple transcripts match the saved session' : 'The saved session transcript is missing');
  }
  return matches[0];
}

module.exports = { resolveResumeTarget };
