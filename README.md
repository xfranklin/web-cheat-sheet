<h1>Web cheat sheet</h1>
<ul>
	<li><a href="#vim">Vim</a></li>
	<li><a href="#git">Git</a></li>
	<li><a href="#npm">Npm</a></li>
</ul>

<h2 id="vim">Vim</h2>
<pre>
+------------------------------------------------------------------------+
| Vim cheat scheet                                                       |
+----------------------------------+-------------------------------------+
| Visual mode                      | Insert mode                         |
|                                  |                                     |
| v - visual chars                 | i - insert before cursor            |
| V - visual lines                 | I - insert begin of line            |
| Ctrl+v - visual blocks           | a - insert after cursor             |
| gu - to lowercase                | A - insert end of line              |
| gU - to uppercase                | o - insert new line down            |
| y p d c - change visual          | O - insert new line up              |
| I A - insert before after visual |                                     |
| s - change all visual block      |                                     |
+----------------------------------+-------------------------------------+
| Command mode Esc                                                       |
|----------------------------------+-------------------------------------+
| Moves                            | Return                              |
| hjkl - one char < v ^ >          | u - return                          |
| w - next word [5w]               | U - return all  line                |
| W - next WORD                    | Ctrl + r - return return            |
| b - prev word                    |                                     |
| B - prev WORD                    | Command                             |
| e - next end word                | :q - quit                           |
| E - next end WORD                | :q! - quit no save                  |
| 0 - first line char              | :w - write                          |
| ^ - first line non-space char    | :wa - write all files               |
| $ - last line char               | :cmd - bash command                 |
| gg - up file [24gg]              | :e - open file                      |
| G - end file                     |                                     |
| % - next () {} []                |                                     |
|                                  |                                     |
| Edit                             |                                     |
| x - delete one char              |                                     |
| X - backspace                    |                                     |
| d - delete [dd,d4k,d$,diw]       |                                     |
| c - change [cc,cw,c^]            |                                     |
| y - copy [yy,yw,y$]              |                                     |
| p - paste after [3p]             |                                     |
| P - paste before [5P]            |                                     |
| r - change one char              |                                     |
| R - change >                     |                                     |
| s - change one char insert       |                                     |
| J - join lines                   |                                     |
| . - repeat command               |                                     |
|                                  |                                     |
| Text objects                     |                                     |
| iw - inside word [c3iw,diw]      |                                     |
| iW - inside WORD                 |                                     |
| aw - inside a word               |                                     |
| aW - inside a WORD               |                                     |
| is - inside sentence             |                                     |
| as - inside a sentence           |                                     |
| ip - inside paragraph            |                                     |
| iP - paste paragraph             |                                     |
| i - block [(),{},[],"",'',< >]   |                                     |
| a - a block [(),{},[],"",'',< >] |                                     |
|                                  |                                     |
| Search                           |                                     |
| / - search                       |                                     |
| ? - search                       |                                     |
| :s/old/new/g - change            |                                     |
| n - next match                   |                                     |
| N - prev match                   |                                     |
|                                  |                                     |
+----------------------------------+-------------------------------------+
</pre>
<br>
<h2 id="git">Git</h2>
<pre>
+------------------------------------------------------------------------+
| Git cheat scheet                                                       |
+------------------------------------------------------------------------+
| Configure                                                              |
|                                                                        |
| git config --global user.name "xfranklin" - name in commit             |
| git config --global user.email "mail@mail.com" - email in commit       |
+------------------------------------------------------------------------+
| Create repository                                                      |
|                                                                        |
| git clone [URL] - download from repo                                   |
| git init - creat new repo                                              |
| git add FILE - add file to commit                                      |
| git commit -m "Init commit" - add commit                               |
| git status - repo status                                               |
| git log - commit history                                               |
| git log -p FILE - changes in file                                      |
| git diff - show differense                                             |
| git blame FILE - who change, what, when                                |
| git checkout HASH - go to commit                                       |
| git checkout master - go to master                                     |
| git rm -r FILE - remove FILE from git and local                        |
| git rm -r --cached FILE - remove from git                              |
+------------------------------------------------------------------------+
| Return before commit                                                   |
|                                                                        |
| git reset HEAD FILE - stage > mod                                      |
| git checkout FILE - mod > unmod                                        |
+------------------------------------------------------------------------+
| Cancel commit                                                          |
|                                                                        |
| git revert HEAD --no-edit                                              |
+------------------------------------------------------------------------+
| Branch                                                                 |
|                                                                        |
| git branch - branch list                                               |
| git checkout -b NEWBRANCH - create branch                              |
| git branch NEWBRANCH                                                   |
| git checkout BRANCH - go to branch                                     |
| git marge dev - add dev[branch] to current branch                      |
| git rebase dev                                                         |
| git branch -d BRANCH - delete branch                                   |
+------------------------------------------------------------------------+
| Remote repository                                                      |
|                                                                        |
| git remote add origin [URL] - add link to repo                         |
| git remote -v - show all connected repo                                |
| git push origin NEWBRANCH - add to repo                                |
| git fetch origin - download from repo                                  |
| git pull origin - download and pull                                    |
+------------------------------------------------------------------------+
| Stash                                                                  |
|                                                                        |
| git stash - save changes                                               |
| git pull                                                               |
| git stash pop                                                          |
| git stash list - changes list                                          |
| git stash show - last changes                                          |
| git stash apply - apply last changes                                   |
| git stash drop - remove last stash                                     |
| git stash pop - apply last changes and remove                          |
| git stash clear - remove all stash                                     |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
| Files                                                                  |
|                                                                        |
| untrack(new File)  unmod                mod                stage       |
| |                  |                    |                  |           |
| |    add file      |                    |                  |           |
| |------------------+--------------------+----------------->|           |
| |                  |     edit file      |                  |           |
| |                  |------------------->|   stage file     |           |
| |   remove file    |                    |----------------->|           |
| |<-----------------|                    |                  |           |
| |                  |                    |   commit file    |           |
| |                  |<-------------------+------------------|           |
| |                  |                    |                  |           |
+------------------------------------------------------------------------+
</pre>
<br>
<h2 id="npm">Npm</h2>
<pre>
+------------------------------------------------------------------------+
| Npm cheat scheet                                                       |
+------------------------------------------------------------------------+
|                                                                        |
| npm install - install from package.json                                |
| npm install [package] - install package local                          |
| npm install -g [package] - insatall package global                     |
| npm install [package] --save - install package and update package.json |
| npm install [package] --save-dev - install and update package.json dev |
| npm init - create package.json                                         |
| npm update - update local package.json                                 |
| npm unninstall [package] - remove package                              |
| npm unninstall -g [package] - remove global package                    |
| npm list - packages list                                               |
+------------------------------------------------------------------------+
</pre>