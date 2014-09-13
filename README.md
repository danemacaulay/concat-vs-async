
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

## Live demo

[Side by side](http://danemacaulay.github.io/concat-vs-async/)

[Async](http://danemacaulay.github.io/concat-vs-async/index-async.html)

[Concat](http://danemacaulay.github.io/concat-vs-async/index-concat.html)


## Results (local)

|          | Initial Pageload    | Cached         |
|----------|---------------------|----------------|
| Async    | ~ 20 ms - 50 ms     | ~ 4 ms         |
| Concat   | ~ 2 ms - 4 ms       | ~ 1 ms         |

### Considerations
This test is run under optimal network conditions, with no real header payload, practically no latency, and high bandwidth. In real world conditions, all of these factors spread over each request push page load time higher and higher.

## Installation

```bash
npm install -g serve
```

## Running

```bash
cd concat-vs-async
serve
```

open browser to [http://localhost:3000/index-async.html](http://localhost:3000/index-async.html) and [http://localhost:3000/index-concat.html](http://localhost:3000/index-concat.html)

## Bulk updating scripts

If you'd like to play around with the test, you can create any number of files with the ``createFiles.js`` script, just remember to also update the script tags

Or just update ``template.js`` with changes, then run the ``templateCopy.js`` script

## Concatenating scripts

Run the node script ``concat.js``

Its only dependency is a small node library called node-minify that is used to concat the files, it also provides support for other build tasks including uglify. 

Before running, install it locally:

```bash
cd concat-vs-async
npm install
```
