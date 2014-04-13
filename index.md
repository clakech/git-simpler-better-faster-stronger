<!-- .slide: data-background="#F5AF33" -->

# Git++

*Passez au niveau supérieur<br>de la gestion de version*

Note:
Qui utilise git ? <br>
Qui a trouvé git complexe au début ?

---

<!-- .slide: data-background="#F5AF33" class="oneColList" -->

##3 points pour améliorer la qualité

* Une vision
* Une méthode
* Des outils

---

<!-- .slide: data-background="img/cockpit.jpg" data-background-size="cover" -->

<!-- .element: class="fullImageCaption" -->
`man git (>_<)`

---

<!-- .slide: data-background="img/marteau.jpg" data-background-size="cover" -->

<!-- .element: class="fullImageCaption" -->
Git != SVN

---

<!-- .slide: data-background="url(img/couteau-suisse.jpg)" data-background-size="cover" -->

<!-- .element: class="fullImageCaption" -->
Git, un outil multi-fonction!

---

<!-- .slide: data-background="url(img/katana-couteau-suisse.png)" data-background-size="cover" -->

<!-- .element: class="fullImageCaption" -->
Git, une arme pour les NINJA!

Note:
Git va nous permettre de combattre un fléau trop répandu:
L'historique sale :-(

---

<!-- .slide: data-background="#F5AF33" -->

# Un historique sale

---

## Un historique sale

||
-- | -- | --
*   | 07fc819 | toto
*   | ba6383e | tests
*   | 66d8bdd | Merge branch 'US1234' into master
¦\  ||
¦ * | dba5ed1 | US1234 fix
¦ * | 66d8bdd | Merge master
¦/¦ ||
* ¦ | 04354b7 | css
¦ * | dbdeb5c | US1234
¦/  ||
*   | 5d994c4 | wip

---

<!-- .slide: data-background="#F5AF33" -->

# Un historique propre

## Mais pourquoi faire ?

---

<!-- .slide: data-background="img/men-in-black.jpg" data-background-size="cover" -->

<!-- .element: class="fullImageCaption" -->
Perte de mémoire

---

<!-- .slide: data-background="img/holiday.jpg" data-background-size="cover" -->

<!-- .element: class="fullImageCaption" -->
En cas d'absence

---

<!-- .slide: data-background="img/newbie.jpg" data-background-size="cover" -->

<!-- .element: class="fullImageCaption" -->
Arrivée d'un nouveau

---

<!-- .slide: data-background="img/pull-request-with-detailed-commits.png" data-background-size="cover" -->

<!-- .element: class="fullImageCaption" -->
Revue de code

---

<!-- .slide: data-background="#F5AF33" -->

# Donnons du sens <br> à notre historique

Note:
Quoi ? Où ? (Pour)quoi ? Comment ? Référence ?

---

## Conventions de commit

<!-- .slide: class="oneColList" -->

* AngularJS
* Karma runner
* Angular UI

---

<!-- .slide: data-transition="none" -->

## Conventions de commit

![git rebase target](img/conventions-00.png)

Note:
Quoi ? Où ? (Pour)quoi ? Comment ? Référence ?

---

<!-- .slide: data-transition="none" -->

## Conventions de commit

![git rebase target](img/conventions-01-type.png)

---

<!-- .slide: data-transition="none" -->

## Conventions de commit

![git rebase target](img/conventions-01-type-list.png)

Note:
feat     : fonctionnalité <br>
fix      : correctif <br>
refactor : changement technique <br>
chore    : changement build/config <br>
test     : test manquant <br>
docs     : changement dans la documentation <br>
style    : changement de formattage

---

<!-- .slide: data-transition="none" -->

## Conventions de commit

![git rebase target](img/conventions-02-scope.png)

Note:
(optionnel) <br>
Listez vos scopes <br>
Faites les évoluer dans le temps

---

<!-- .slide: data-transition="none" -->

## Conventions de commit

![git rebase target](img/conventions-03-subject.png)

Note:
Description des changements <br>
Point de vue utilisateur (feat, fix)
---

<!-- .slide: data-transition="none" -->

## Conventions de commit

![git rebase target](img/conventions-04-body.png)

Note:
(optionnel) <br>
Détails sur le sujet <br>
Détails d'implémentation

---

<!-- .slide: data-transition="none" -->

## Conventions de commit

![git rebase target](img/conventions-05-footer.png)

Note:
(optionnel) <br>
Identifiant de bug fix <br>
Identifiant de user story <br>

---

<!-- .slide: data-transition="none" -->

## Exemple : Fonctionnalité

![git rebase target](img/conventions-ex-01-feat.png)

---

<!-- .slide: data-transition="none" -->

## Exemple : Résolution de bug

![git rebase target](img/conventions-ex-02-fix.png)

---

<!-- .slide: data-background="img/happy-dev.jpg" data-background-size="cover" -->

<!-- .element: class="fullImageCaption" -->
Des développeurs contents

---

<!-- .slide: data-background="#F5AF33" -->

# Générer <br> un changelog

---

<!-- .slide: data-background="img/changelog.png" data-background-size="contain" -->

---

<!-- .slide: data-background="img/happy-users.jpg" data-background-size="cover" -->

<!-- .element: class="fullImageCaption" -->
Des utilisateurs contents

---

<!-- .slide: data-background="#F5AF33" -->

# Améliorons <br> notre historique

---

<!-- .slide: class="twoColList" -->

## Ce qu'il faut savoir faire <br> sur un commit :


* Renommer
* Modifier
* Réordonner
* Fusionner
* Insérer
* Supprimer

---

<!-- .slide: data-background="#F5AF33" class="codeTitle" -->

# `git rebase -i`

---

# WAT ??

---

<!-- .slide: class="codeTitle" -->

# `git merge`

---

<!-- .slide: data-transition="none" -->

## Feature branch

![git rebase target](img/git-04.png)

---

<!-- .slide: data-transition="none" -->

## Feature branch

![git rebase target](img/git-07.png)

---

<!-- .slide: data-transition="none" -->

## Git merge

![git rebase target](img/git-merge-01.png)

---

<!-- .slide: data-transition="none" -->

## Feature branch

![git rebase target](img/git-merge-02.png)

---

<!-- .slide: data-transition="none" -->

## Git merge

![git rebase target](img/git-merge-03.png)

---

<!-- .slide: data-transition="none" -->

## Git merge

![git rebase target](img/git-merge-04.png)

---

<!-- .slide: class="codeTitle" -->

# `git rebase`

---

<!-- .slide: data-transition="none" -->

## Feature branch

![git rebase target](img/git-07.png)

---

<!-- .slide: data-transition="none" -->

## Git rebase

![git rebase target](img/git-rebase-01.png)

---

<!-- .slide: data-transition="none" -->

## Git rebase

![git rebase target](img/git-rebase-02.png)

---

<!-- .slide: data-transition="none" -->

## Git rebase

![git rebase target](img/git-rebase-03.png)

---

<!-- .slide: data-transition="none" -->

## Git rebase

![git rebase target](img/git-rebase-04.png)

---

<!-- .slide: data-transition="none" -->

## Git rebase

![git rebase target](img/git-rebase-05.png)

---

<!-- .slide: data-background="img/clean-vs-dirty-water.jpg" data-background-size="cover" -->

<!-- .element: class="fullImageCaption" -->
Git merge vs rebase

---

<!-- .slide: class="oneColList" -->

##Git merge vs rebase

* ;-) historique simple
* :-( perte du contexte de travail
* :-( plus difficile à maitriser

---

<!-- .slide: data-background="#5A0000" class="warningTitle" -->

#Git merge vs rebase

###attention au rebase de commits partagés

---

<!-- .slide: data-background="#F5AF33" class="codeTitle" -->

# `git rebase -i ?`

---

<!-- .slide: data-transition="none" -->

## Git rebase interactive

![git rebase target](img/git-rebase-interactive-01.png)

---

<!-- .slide: data-transition="none" -->

## Git rebase interactive

![git rebase target](img/git-rebase-interactive-02.png)

---

<!-- .slide: data-transition="none" -->

## Git rebase interactive

![git rebase target](img/git-rebase-interactive-03.png)

---

<!-- .slide: data-transition="none" -->

## Git rebase interactive

![git rebase target](img/git-rebase-interactive-04.png)

---

<!-- .slide: data-transition="none" -->

## Git rebase interactive

![git rebase target](img/git-rebase-interactive-05.png)

---

<!-- .slide: data-transition="none" -->

## Git rebase interactive

![git rebase target](img/git-rebase-interactive-06.png)

---

<!-- .slide: data-transition="none" -->

## Git rebase interactive

![git rebase target](img/git-rebase-interactive-07.png)

---

<!-- .slide: class="oneColList" -->

##Git rebase ? Git commit ? Git merge ?

1. Code privé ? rebase
2. Code review ? commit
3. Code ready ? rebase
4. Code merge ? merge !

---

<!-- .slide: data-background="#F5AF33" -->

#DEMO