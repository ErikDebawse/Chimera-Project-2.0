#!/bin/bash
echo Formatting .svgs in the $1 directory
read -p "Continue? [y/n]: " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]];
then
    find . -name "*.svg" -print0 | while read -d $'\0' file
    do
        cat "$file"
        sed -i '/<\?xml version.*/d' "$file"
        sed -i '/<\!DOCTYPE.*/d' "$file"
        sed -i '/<\!-- Generator.*/d' "$file"
        sed -i '/.*dtd.*/d' "$file"
    done
fi