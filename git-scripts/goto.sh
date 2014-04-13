#!/bin/sh

GIT_SEQUENCE_EDITOR=~/dev/git-scripts/$1-alter-todo.js GIT_EDITOR=~/dev/git-scripts/$1-commit.js git rebase -i master