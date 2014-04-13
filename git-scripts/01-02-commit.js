#!/usr/bin/env node

var git = require('./git.js');

var badToGoodCommits = [
	{ bad: 'design', good: 'feat: apply custom design\n\ncustom design is light for clarity purposes, colors are chosen from the official Devoxx 2014 templates : http://www.devoxx.fr/2014/03/modeles-de-presentation-pour-devoxx-france-2014/ ' },
	{ bad: 'add good history contents', good: 'feat(history): list reasons why a clean history matters' },
	{ bad: 'commit message example', good: 'feat(conventions): show full commit message example following conventions' },
	{ bad: 'questions for conventions', good: 'feat(conventions): list questions that should be answered by a good commit message' },
	{ bad: 'rebase -i', good: 'feat(rebaseInteractive): recap commands to alter commits' },
	{ bad: 'changelog', good: 'feat(changelog): show a generated changelog example' },
	{ bad: 'merge vs rebase', good: 'feat(mergeVsRebase): recap pros and cons' },
	{ bad: 'THX and Q&A', good: 'feat(ending): thank audience and invite to Q&A' },
	{ bad: 'changelog image', good: 'refactor(changelog): replace text with an image\n\nthe generated HTML example as an image is prettier to display than the markdown version' }
];

git.replace(function (data) {

	badToGoodCommits.forEach(function (commit) {
		data = data.replace(new RegExp('^' + commit.bad + '$', 'm'), commit.good);
	});

	return data;
});