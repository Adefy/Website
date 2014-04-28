#! /bin/bash
#
# Builds adefy bower components
# In future versions, this will no longer be necessary
cd _components

cd adefyjs
npm install
grunt cdn
rm -rf node_modules
cd ..

cd adefyre
npm install
grunt cdn
rm -rf node_modules
cd ..

cd ..
