steps to deploy

create public repository with same name(this will be sitename) as owner name

git remote remove origin

git remote add origin https://github.com/raghu55mirashi/raghu55mirashi.github.io.git

yarn add gh-pages

add these in package.json:
"homepage":"sitename.github.io",
"scripts":{
"predeploy":"yarn run build",
"deploy":"gh-pages -d build -b master"
}

git checkout -b sourcecode //to move code from master to source

git add .

git commit

git push

git branch -d master //deletes master branch bcoz it will be used to keep build code, managed by package.json

yarn deploy
