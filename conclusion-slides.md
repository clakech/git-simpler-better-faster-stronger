# Git++ : Le recap

---

## Un historique propre !

* Mise en contexte
* Perte de mémoire
* Retour de congés
* Arrivée d'un nouveau
* Revue de code

---

## Un formalisme commun

```
feat(login): reset password on demand

send an email with unique reset url
display a form to define a new password

Closes #1234
```

---

## Répondre aux questions importantes

* Quoi ?
* Où ?
* Pourquoi ?
* Comment ?
* TODO parler des références

---

## Générer un changelog

```
TODO remplacer par l'image du changelog généré final
Changelog (en image)

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

## Soigner l'historique<br>=<br>modifier des commits

/!\ Ne jamais le faire sur master

---

### Rebase plutôt que merge

TODO Rappels sur le rebase

```
git rebase master
```

---

### Rebase interactif

```
git rebase -i master
git rebase -i HEAD~3
git rebase -i 74dec23

# editer la todo list

# faire les actions

git rebase --continue

# (résoudre les conflits)
```

---

### Renommer un commit

`reword/r`

---

### Modifier un comit

`edit/e`

---

### Réordonner un commit

changer l'ordre des lignes

---

### Fusionner un commit

`squash/s` : fusionner les messages<br>
ou `fixup/f` : garder le message le plus ancien

---

### Supprimer un commit

supprimer une ligne

---

### Insérer un nouveau commit au milieu

`edit/e` pour s'arrêter au milieu<br>
+ `commit`

---

## Merci ;-)

---

## Q/A ??
