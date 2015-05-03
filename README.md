# `wu-babel`

`wu-babel` is a modification of `wu.js` that uses the [Babel.js](https://babeljs.io/) 
compiler instead of [Traceur](https://github.com/google/traceur-compiler). The library itself
is unchanged.

`wu.js` is a JavaScript library providing higher order functions (such as `map`,
`filter`, and `reduce`) for ECMAScript 6 iterators.

## [wu.js documentation](http://fitzgen.github.com/wu.js/)

## Install

```shell
npm install wu-babel
```

## Usage

`wu-babel` depends on [Babel's polyfill](http://babeljs.io/docs/usage/polyfill/) being loaded.
See the Babel documentation for information on how to do this in different environments.

### ES5 Compatible Browsers

```html
<script src="/node_modules/wu-babel/es5/wu.js"></script>
```

### ES6 Compatible Browsers

```html
<script src="/node_modules/wu-babel/es6/wu.js"></script>
```

### Node, Browserify, Webpack, etc.

#### CommonJS

```js
var wu = require('wu-babel');
```

#### ES6 Modules

```js
import wu from 'wu-babel';
```

### Standalone

If you do not want to use the Babel polyfill, `wu-babel` also includes a standalone version of
the library compiled with Babel's runtime optional transform.

```html
<script src="/node_modules/wu-babel/es5/standalone.js"></script>
```

```js
var wu = require('wu-babel/es5/standalone');
```

```js
import wu from 'wu-babel/es5/standalone';
```

--------------------------------------------------------------------------------------------

           NNNNNNNNN==..                                               .=NNNNN=
         NNNNNNNNNNNNNNNNNNN==..                               .=NNNNNNNNNNNNNNI
       MNNNNNNNNNNNNNNNNNNNNNNNNNNNN                   .=NNNNNNNNNNNNNNNNNNNNNNN=
     .NNNNNNNNNNNNNNNNNNNNNNNNNNNNN.               MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNI
     =NNNNNNNNNNNNNNNNNNNNNNNNNNNZ                   NNNNNNNNNNNNNNNNNNNNNNNNNNNNN=
     NNNNNNNNNNNNNNNNNNNNNNNNNNNN           .=INNN     ?NNNNNNNNNNNNNNNNNNNNNNNNNNNN
     NNNNNNNNNNNNNNNNNNNNNNNNNNNN=     ?NNNNNNNNNN     NNNNNNNNNNNNNNNNNNNNNNNNNNNNN.
     NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN . . ~NNNNNNNNNN   NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNZ
     NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
     NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNI
     NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN.
     "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNI
      "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/"\NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
       "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNM   .NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN"
        "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN     NNNNNNNNNNNNNNNNNNNNNNNNNNNNN
          "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN     MNNNNNNNNNNNNNNNNNNNNNNNNNN"
            "=NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN     .NNNNNNNNNNNNNNNNNNNNNNNN"
                "=NNNNNNNNNNNNNNNNNNNNNNNNNNNNI     INNNNNNNNNNNNNNNNNNNN:"
                    "=NNNNNNNNNNNNNNNNNNNNNNNNN.     NNNNNNNNNNNNNNNNNN
                          "=NNNNNNNNNNNNNNNNNNNN     NNNNNNNNNNNNNN"
                                  "==NNNNNNNNNNNN    NNNNNNNNN"
                                                     ZNNN7"
