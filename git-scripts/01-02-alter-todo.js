#!/usr/bin/env node

var git = require('./git.js');

git.commands([
	{ name: 'reword', applyTo: '.*' }
]);