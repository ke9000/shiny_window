#!/bin/bash

version=$(cat src/manifest.json | jq .version | sed "s/\"//g")
echo $version creating.

mkdir dist/Shiny_Window-$version
cp -r src/* dist/Shiny_Window-$version/
zip -r dist/Shiny_Window-$version.zip dist/Shiny_Window-$version/

echo $version create.