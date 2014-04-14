#!/usr/bin/env node

var git = require('./git.js');

var badToGoodCommits = [
	{ bad: 'design', good: 'feat: apply custom design\n\ncustom design is light for clarity purposes, colors are chosen from the official Devoxx 2014 templates : http://www.devoxx.fr/2014/03/modeles-de-presentation-pour-devoxx-france-2014/ ' },
	{ bad: 'belief', good: 'feat(belief): show a clean history graph' },
	{ bad: 'conventions', good: 'feat(method): show full commit message example following conventions' },
	{ bad: 'rebase vs merge', good: 'feat(method): show merge vs rebase clean/dirty image' },
	{ bad: 'manipulate history', good: 'feat(tools): recap actions to manipulate history' },
	{ bad: 'transitions', good: 'refactor: use classic and fast transitions' },
	{ bad: 'changelog', good: 'feat(tools): show a generated changelog example' },
	{ bad: 'THX and Q&A', good: 'feat: thank audience and invite to Q&A' }
];

git.replace(function (data) {

	badToGoodCommits.forEach(function (commit) {
		data = data.replace(new RegExp('^' + commit.bad + '$', 'm'), commit.good);
	});

	return data;
});