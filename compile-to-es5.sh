#!/usr/bin/env bash

set -e

cd `dirname $0`

# Make sure all dependencies are installed.
npm install

mkdir -p lib

BABEL="./node_modules/babel/bin/babel/index.js"

# Compile wu.js to ES5.
$BABEL                              \
    --source-maps                   \
    --out-file ./es5/wu.js          \
    --modules umd                   \
    ./es6/wu.js

# Compile wu.js to ES5 with external helpers

$BABEL                              \
    --source-maps                   \
    --out-file ./es5/standalone.js  \
    --modules umd                   \
    --optional runtime              \
    ./es6/wu.js

echo "OK"
