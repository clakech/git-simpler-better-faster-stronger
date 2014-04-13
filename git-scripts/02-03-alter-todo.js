#!/usr/bin/env node

var git = require('./git.js');

git.commands([
	{ name: 'edit', applyTo: 'feat(rebaseInteractive): recap how to modify a commit' }
]);