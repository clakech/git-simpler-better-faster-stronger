#!/usr/bin/env node

var git = require('./git.js');

git.replace(function (data) {

	data = data.replace(/comit/mg, 'commit');

	return data;
});