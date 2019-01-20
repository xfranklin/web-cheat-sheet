<h1>Web cheat sheet</h1>
<ul>
	<li><a href="#vim">Vim</a></li>
	<li><a href="#git">Git</a></li>
	<li><a href="#npm">Npm</a></li>
	<li><a href="#yarn">Yarn</a></li>
	<li><a href="#tmux">Tmux</a></li>
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
| git commit --amend "Change commit" - change last commit message        |
| git commit --amend - add file to last commit                           |
| git tag -a TAG -m MESSAGE - creage tag                                 |
| git tag -l - show tags                                                 |
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
| git merge dev - add dev[branch] to current branch                      |
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
| npm init - create package.json                                         |
| npm install - install from package.json                                |
| npm install [PACKAGE] - install [PACKAGE] local                        |
| npm install -g [PACKAGE] - insatall [PACKAGE] global                   |
| npm install [PACKAGE] --save - install [PACKAGE] saved package.json    |
| npm install [PACKAGE] --save-dev - install [PACKAGE] saved package.json|
| npm unninstall [PACKAGE] - remove [PACKAGE]                            |
| npm unninstall -g [PACKAGE] - remove [PACKAGE] global                  |
| npm update - update local package.json                                 |
| npm list --depth=0 - packages list                                     |
+------------------------------------------------------------------------+
</pre>
<br>
<h2 id="yarn">Yarn</h2>
<pre>
+------------------------------------------------------------------------+
| Yarn cheat scheet                                                      |
+------------------------------------------------------------------------+
|                                                                        |
| yarn init - create package.json                                        |
| yarn - install from package.json                                       |
| yarn add [PACKAGE] - install [PACKAGE] saved package.json              |
| yarn add [PACKAGE] --dev - install [PACKAGE] saved package.json        |
| yarn global add [PACKAGE] - install global [PACKAGE]                   |
| yarn remove [PACKAGE] - remove [PACKAGE]                               |
| yarn global remove [PACKAGE] - remove [PACKAGE] global                 |
| yarn upgrade [PACKAGE] - upgrade [PACKAGE]                             |
| yarn list --depth=0 - packages list                                    |
+------------------------------------------------------------------------+
</pre>
<br>
<h2 id="tmux">Tmux</h2>
<pre>
+------------------------------------------------------------------------+
| Tmux cheat scheet                                                      |
+------------------------------------------------------------------------+
| Ctrl + b = &lt;Cb&gt;                                                        |
+------------------------------------+-----------------------------------+
| Windows                            | Panes                             |
|                                    |                                   |
| &lt;Cb&gt; c - new window                | &lt;Cb&gt; " - horizontal split         |
| &lt;Cb&gt; w - windows list              | &lt;Cb&gt; % - vertical split           |
| &lt;Cb&gt; n - next window               | &lt;Cb&gt; [ARROWS] - move to pane      |
| &lt;Cb&gt; p - previous window           | &lt;Cb&gt; + [ARROWS] - change pane size|
| &lt;Cb&gt; [NUM] - number of window      |                                   |
| &lt;Cb&gt; x - close window, pane        |                                   |
| exit - close window, pane          |                                   |
+------------------------------------+-----------------------------------+
| Session                                                                |
|                                                                        |
| tmux new -s [NAME] - create new session [NAME]                         |
| tmux ls - session list                                                 |
| &lt;Cb&gt; s - select session                                                |
| &lt;Cb&gt; d - session disconnection                                         |
| tmux detach - session disconnection                                    |
| tmux attach - connect to last session                                  |
| tmux attach -t [NAME] - connect to session [NAME]                      |
| tmux kill-session -t [NAME] - close session                            |
| tmux kill-server - close all session                                   |
+------------------------------------------------------------------------+
</pre>
