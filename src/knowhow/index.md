# システム技術ノウハウ

## ローカルのプロジェクトをgithubにpushする

### githubにリポジトリを作っておく

- webでgithubに新規プロジェクトを作る
- リポジトリの名前(git clone でしているするurl)が次の場合

```
https://github.com/hiroshi-murano/vuepress3.git

```


### ローカルのプロジェクトでgitを初期化してpushする


```

PS E:\Source\node_work\hello-vuepress> git init
Initialized empty Git repository in E:/Source/node_work/hello-vuepress/.git/

PS E:\Source\node_work\hello-vuepress> git add -A
warning: LF will be replaced by CRLF in src/.vuepress/dist/about/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/.vuepress/dist/assets/img/search.83621669.svg.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/.vuepress/dist/assets/js/app.238701d5.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/.vuepress/dist/index.html.
The file will have its original line endings in your working directory

PS E:\Source\node_work\hello-vuepress> git commit -m 'deploy'
[master (root-commit) 2fb343a] deploy
 23 files changed, 19204 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 console.txt
 create mode 100644 log.txt
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 src/.vuepress/config.js
 create mode 100644 src/.vuepress/dist/about/index.html
 create mode 100644 src/.vuepress/dist/assets/css/0.styles.3c606580.css
 create mode 100644 src/.vuepress/dist/assets/img/search.83621669.svg
 create mode 100644 src/.vuepress/dist/assets/js/2.a3c6ff1d.js
 create mode 100644 src/.vuepress/dist/assets/js/3.d052a4f0.js
 create mode 100644 src/.vuepress/dist/assets/js/4.5f60d4ea.js
 create mode 100644 src/.vuepress/dist/assets/js/5.48d2ae66.js
 create mode 100644 src/.vuepress/dist/assets/js/6.261c7cb6.js
 create mode 100644 src/.vuepress/dist/assets/js/7.cfc9cb83.js
 create mode 100644 src/.vuepress/dist/assets/js/app.238701d5.js
 create mode 100644 src/.vuepress/dist/index.html
 create mode 100644 src/about/index.md
 create mode 100644 src/index.md
 create mode 100644 src/knowhow/index.md
 create mode 100644 start.bat
 create mode 100644 yarn.lock
 create mode 100644 "\345\217\202\350\200\203\343\202\265\343\202\244\343\203\210.txt"

PS E:\Source\node_work\hello-vuepress> git remote add origin https://github.com/hiroshi-murano/vuepress3.git

PS E:\Source\node_work\hello-vuepress> git push origin master
Enumerating objects: 35, done.
Counting objects: 100% (35/35), done.
Delta compression using up to 4 threads
Compressing objects: 100% (27/27), done.
Writing objects: 100% (35/35), 310.24 KiB | 6.20 MiB/s, done.
Total 35 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/hiroshi-murano/vuepress3.git
 * [new branch]      master -> master
```

- nodeでnode_modulesをgithubに入れないようにするには プロジェクト直下(.gitの下ではない)に .gitignore というファイルを作り、以下の一行を書いておく

```
node_modules/
```

