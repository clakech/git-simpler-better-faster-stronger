#!/usr/bin/env node

var git = require('./git.js');

git.commands([
	{ name: 'squash', applyTo: 'feat(history): mention that a good history helps when a new member arrives in the team' }
]);