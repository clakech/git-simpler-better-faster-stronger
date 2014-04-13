#cat $1
sed -i 's/^initial commit$/chore: initial commit/g' $1
sed -i 's/^reveal.js$/chore: init empty reveal.js skeleton with markdown source\n\nadd a cleaned up 2.7.0 reveal.js template\nconfigure index.html to use the contents of index.md\n\nall default plugins, themes and libs are kept just in case/g' $1
sed -i 's/^add good history contents$/feat(history): list reasons why a clean history is important/g' $1
sed -i 's/^commit message example$/feat(conventions): show full commit message example following conventions/g' $1
sed -i 's/^questions for conventions$/feat(conventions): list questions that should be answered by a good commit message/g' $1
sed -i 's/^changelog$/feat(changelog): show a generated changelog example/g' $1
sed -i 's/^rebase vs merge$/feat(rebaseVsMerge): recap pros and cons/g' $1
sed -i 's/^reorder questions$/refactor(conventions): reorder questions\n\nthe different parts of a commit message answer questions about the change, it’s better to present which question are answered in the same order as the commit message parts/g' $1
sed -i 's/^design$/feat: apply custom design\n\ncustom design is light for clarity purposes, colors are chosen from the official Devoxx 2014 templates : http://www.devoxx.fr/2014/03/modeles-de-presentation-pour-devoxx-france-2014/ /g' $1
sed -i 's/^design 2$/feat: simplify and speed up transitions\n\ntransitions should not be a distraction/g' $1
sed -i 's/^rebase -i$/feat(rebaseInteractive): recap commands and todo-list/g' $1
sed -i 's/^rename commit$/feat(rebaseInteractive): recap how to rename a commit/g' $1
sed -i 's/^modify a commit$/feat(rebaseInteractive): recap how to modify a commit/g' $1
sed -i 's/^reorder commits$/feat(rebaseInteractive): recap how to reorder commits/g' $1
sed -i 's/^merge$/feat(rebaseInteractive): recap how to merge commits/g' $1
sed -i 's/^delete$/feat(rebaseInteractive): recap how to delete a commit/g' $1
sed -i 's/^THX and Q&A$/feat(ending): thank audience and invite to Q&A/g' $1
sed -i 's/^changelog image$/refactor(changelog): replace text with an image\n\nthe generated HTML example as an image is prettier to display than the markdown version/g' $1
sed -i 's/^footer$/feat: always display session hashtag and twitter handles\n\nbecause we want to display theses important information all the time, we used a fixed positionned footer element/g' $1
#cat $1