jsminifier
==========

Simple Javascript file minifier. It script also can concat Javascript files.

### Implementation example

Minifying single js file
```js
var JSMinifier = require('./dist/jsminifier')

var jsmin = new JSMinifier('./file/to/minify.js')
console.log(jsmin.minify())
```
Minifying multiple js files

```js
var JSMinifier = require('./dist/jsminifier')

var jsmin = new JSMinifier(['./file/to/minify1.js', './file/to/minify2.js'])
console.log(jsmin.minify())
```
