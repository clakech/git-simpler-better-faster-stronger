#!/usr/bin/env node

var fs = require('fs'),
  path = require('path');

exports.replace = function (transform) {

	var filePath = process.argv[2];

	var contents = fs.readFileSync(filePath, { encoding: 'utf-8' });
	
	contents = transform(contents);

	fs.writeFileSync(filePath, contents);
};

exports.commands = function (commands) {

	exports.replace(function (data) {

		commands.forEach(function (command) {
			
			var escapedApplyTo = command.applyTo
				.replace(/\(/g, '\\(')
				.replace(/\)/g, '\\)');
			
			var regexp = new RegExp('^pick ([a-f0-9]{7}) (' + escapedApplyTo + ')$', 'mg');
			
			data = data.replace(regexp, command.name + ' $1 $2');
		});

		return data;
	});
};

exports.move = function (commitToMove, beforeCommit) {

	exports.replace(function (data) {

		var commits = data.split('\n'),
			commitToMoveIdx,
			beforeCommitIdx;

		commits.forEach(function (commit, idx) {
			if (commit.slice(13) === commitToMove) {
				commitToMoveIdx = idx;
			}
			if (commit.slice(13) === beforeCommit) {
				beforeCommitIdx = idx;
			}
		});

		commits.splice(beforeCommitIdx, 0, commits.splice(commitToMoveIdx, 1)[0]);

		data = commits.join('\n');

		return data;
	});
};

exports.exec = function (exec, beforeCommit) {

	exports.replace(function (data) {

		var commits = data.split('\n'),
			beforeCommitIdx;

		commits.forEach(function (commit, idx) {
			if (commit.slice(13) === beforeCommit) {
				beforeCommitIdx = idx;
			}
		});

		commits.splice(beforeCommitIdx, 0, commits.splice(commitToMoveIdx, 1)[0]);

		data = commits.join('\n');

		return data;
	});
};

exports.remove = function (commitToRemove) {

	exports.replace(function (data) {

		var commits = data.split('\n'),
			commitToRemoveIdx;

		commits.forEach(function (commit, idx) {
			if (commit.slice(13) === commitToRemove) {
				commitToRemoveIdx = idx;
			}
		});

		commits.splice(commitToRemoveIdx, 1);

		data = commits.join('\n');

		return data;
	});
};