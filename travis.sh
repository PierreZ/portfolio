#!/bin/bash

GH_REPO="@github.com/PierreZ/portfolio.git"

FULL_REPO="https://$GH_TOKEN$GH_REPO"

cp .travis.yml build/bundled/
cp -r bower_components/* build/bundled/bower_components
cd build/bundled/
git init
git config user.name "travis-auto"
git config user.email "travis"

git add -A
git commit -m "deployed to github pages"
git push --force --quiet $FULL_REPO HEAD:prod