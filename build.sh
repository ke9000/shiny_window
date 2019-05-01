#!/bin/bash

version=$(cat src/manifest.json | jq .version | sed "s/\"//g")
echo $version creating.

mkdir dist/$version
cp -r src/* dist/$version/
zip -r dist/$version.zip dist/$version/

echo $version create.