
# Concat vs Async

A POC to demonstrate efficiency gains of script concatenation vs async script loading

25 mock files are loaded on a page and run the following javascript

```js
(function(){
    'use strict';
    var p = document.createElement('p');
    var t = new Date();
    p.innerHTML = t.getMilliseconds();
    document
        .getElementsByTagName('body')[0]
        .appendChild(p);
})();
```

In one version each file is loaded asynchronously using the async script attribute

In the other each file is concatenated and loaded with one request

The times displayed for the concatenated version of this test are within a much smaller range when compared to unconcatenated.

## Installation

```bash
npm install -g serve
```

## Running

```bash
cd concat-vs-async
serve
```

open browser to [http://localhost:3000/](http://localhost:3000/) and [http://localhost:3000/index-build.html](http://localhost:3000/index-build.html)

## Bulk updating scripts

If you'd like to play around with the test, you can  update ``template.js`` with changes, then run 

```bash
node templateCopy
```

Then concat the scripts:

## Concatenating scripts

A node script that uses a small node library called node-minify to concat the files

The library also provides support for other build tasks inlcuding uglify 

```bash
node concat
```

