#!/bin/bash -e
[ $# -ne 1 ] && echo "Usage: $0 <filename>" && exit 1
PUB_TITLE=$(echo "$1" | tr '[:upper:] ' '[:lower:]_')
PUB_FNAME="content/publication/$PUB_TITLE.md"
echo "creating $PUB_FNAME"
[ -f "$PUB_FNAME" ] && echo "ERROR: $PUB_FNAME already exists" && exit 2
cp resources/templates/publication.md "$PUB_FNAME"
vim "$PUB_FNAME"
