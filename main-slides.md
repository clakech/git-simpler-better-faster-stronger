# Git++ : Passez au niveau supérieur de la gestion de version

---

## Historique crappy

---

### Commit by stack

![us1234](img/commitByStack.png)

---

### Merge

![us1234](img/merge.png)

---

### One word commit

![us1234](img/oneWordCommit.png)

---

### Revert

![us1234](img/revert.png)

---

### Test

![us1234](img/test.png)

---

### US1234

![us1234](img/US1234.png)

---

### WIP

![us1234](img/wip.png)

---

## Qualité de l'historique du code ? Pourquoi faire ?

---

### Un historique propre

![us1234](img/goodHistory.png)

---

### Perte de mémoire

![us1234](img/devWhatIsThis.jpg)

---

### Retour de vacances

![us1234](img/devOnVacation.jpg)

---

### Arrivée d'un nouveau

![us1234](img/devNew.jpg)

---

![us1234](img/pull-request-with-detailed-commits.png)

---

# Donner du sens aux changements du code

<br/>
###Quoi ? Où ? (Pour)quoi ? (Comment ?) (Référence?)

---

## Convention de Commit

```txt
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
<br/>
###Quoi ? Où ? (Pour)quoi ? (Comment ?) (Référence?)

---

## Exemple 1
<br/>

```
feat(search): add automatic suggestions

we now use the new feature from the search API to provide
instant suggestions just below search inputs

* update component implementation to support automatic suggestion
* update component tests
* update component documentation
```
<br/>
###Quoi ? Où ? (Pour)quoi ? (Comment ?) (Référence?)

---
## Exemple 2
<br/>


```
feat(login): reset password on demand

send an email with unique reset url
display a form to define a new password

Closes #1234
```
<br/>
###Quoi ? Où ? (Pour)quoi ? (Comment ?) (Référence?)

---

## Exemple 3
<br/>


```
fix(search): find products containing special chars

escape specials chars before search API call

special characters: \+-&|!(){}[]^"~*?:
see related doc at: http://lucene.apache.org/core/4_7_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#Escaping_Special_Characters

Closes #789
```
<br/>
###Quoi ? Où ? (Pour)quoi ? (Comment ?) (Référence?)

---
##Types - Quoi?

* feat: Une fonctionnalité
* fix: Un correctif
* refactor: Un changement de code qui n'est ni une fonctionnalité ni un correctif
* chore: Un changement dans le processus de construction ou configuration d'un outil auxiliaire utilisé pour tester le code
<br/>
<br/>
* test: Un test manquant
* docs: Un changement dans la documentation
* style: Un changement de formattage
---
##Scopes - Où

Choississez vos scopes, listez les et faites les évoluer au cours du temps

* product
* editorial
* family
* model
* attribut
<br/>
<br/> 
* (optionnel)

---
##Subjects - (Pour)quoi?

Description des changements et de ce que cela implique

##Body - Comment?

* (optionnel)

##Footer - Référence?

* (optionnel)

###Breaking Changes

---

## Changelog
<br/>

```
Changelog (mettre une image)

v5.8.2 (2014-02-21)

Bug Fixes

family:
	split files into services and directives (3a15c697)
	update style on multiple checks on queries (97185f0e)
queryPicker: replace != by ≠ in query picker operands (f16b3f7c)

Features

form: add empty fields behavior info message (23882829)
```

---

## Ce qu'il faut savoir faire sur un commit :

* Renommer
* Modifier
* Réordonner
* Fusionner
* Supprimer
* Découper

---

## Collaboration

Préférer le rebase au merge pour la lisibilité et la simplicité

plus complexe, perte d'informations

stash is crappy ! commit wip then rebase it!

