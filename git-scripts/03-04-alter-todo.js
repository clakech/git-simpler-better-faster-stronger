#!/usr/bin/env node

var git = require('./git.js');

git.move(
	'feat(history): mention that a good history helps when a new member arrives in the team',
	'feat(conventions): show full commit message example following conventions'
);