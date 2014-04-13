<!-- .slide: data-background="#F5AF33" -->

# Git++

*Passez au niveau supérieur<br>de la gestion de version*

Note:
Qui utilise git ? <br>
Qui a trouvé git complexe au début ?

---

3 points importants pour améliorer la qualité de son produit

* un vision
* une méthode
* des outils

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
Git, un outil de précision multi-fonction!

Note:
Git va nous permettre de combattre un fléau trop répondu
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

## Perte de mémoire

mémoire, cerveau...

---

## Absences

image de vacances

---

## Arrivée d'un nouveau

un geek perdu

série lost

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

```diff
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

---

## Quoi ?

```diff
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

||
-- | --
| feat     | fonctionnalité
| fix      | correctif
| refactor | changement technique
| chore    | changement build/config
|          | &nbsp;
| test     | test manquant
| docs     | changement dans la documentation
| style    | changement de formattage

---

## Où ?

```diff
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

<!-- .slide: class="oneColList" -->

* (optionnel)
* Listez vos scopes
* Faites les évoluer dans le temps

---

<!-- .slide: class="oneColList" -->

## (Pour)quoi ?

```diff
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

* Description des changements
* Point de vue utilisateur

---

<!-- .slide: class="oneColList" -->

## Comment ?

```diff
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

* (optionnel)
* Détails sur le sujet
* Détails d'implémentation

---

<!-- .slide: class="oneColList" -->

## Référence ?

```diff
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

* (optionnel)
* Identifiant de bug fix
* Identifiant de user story

---

<!-- .slide: class="oneColList" -->

## Breaking Changes

```diff
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

* (optionnel)
* Changements incompatibles

---

## Exemple : Fonctionnalité

```diff
feat(login): reset password on demand

send an email with unique reset url
display a form to define a new password

Closes #1234
```

---

## Exemple : Résolution de bug

```diff
fix(search): find products containing special chars

escape specials chars before search API call

special characters: \+-&|!(){}[]^"~*?:
see related doc at:
http://lucene.apache.org/core/4_7_0/queryparser

Closes #789
```

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

<!-- .slide: data-background="#F5AF33" -->

#DEMO

---

<!-- .slide: class="oneColList" -->

##Git rebase ? Git commit ? Git merge ?

* Code privé ? rebase
* Code review ? commit
* Code ready ? rebase
* Code merge ? merge !

---

<!-- .slide: data-background="#F5AF33" -->

#Changelog

---

<!-- .slide: data-background="img/changelog.png" data-background-size="contain" -->

---

<!-- .slide: data-background="#F5AF33" -->

#DEMO
