
# Concat vs Async

A POC to demonstrate efficiency gains of script concatenation vs async script loading. For a higher level analysis see this article by the hubspot team, [Async != Fast](http://dev.hubspot.com/blog/async-fast)

## Live demo

[Async vs Concat](http://danemacaulay.github.io/concat-vs-async/)

## Methodology
60 mock files are loaded on a page and run the following javascript

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

Each script will display the millisecond it was evaluated;

### Async
Each file is loaded asynchronously using the async script attribute

### Concat
All of the async files are concatenated and loaded with one request

### Measuring
There are two event callbacks per page, one on the ``DomContentLoaded`` event, the other is the load event for each script tag.

With async attributes, the DomContentLoaded event fires fast, the time that we care most about is when the final script is fully loaded.

Times are calculated using the method described on MDN for [calculating load times](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Example:_Calculating_elapsed_time)

```js
// using Date objects
var start = Date.now();

// the event to time goes here:
doSomethingForALongTime();
var end = Date.now();
var elapsed = end - start; // elapsed time in milliseconds

```

After 20 seconds, the time it took the last script to load with be logged to console.

## Results

### Local

Concat will clearly load faster with the same code base, but I was interested to see where the two would reach load time parity. 

I multiplied the size of the concat payload several times, finally reaching parity around 60x the original payload size, or about 829K.

### Served remotely

Serving files over the network adds much more overhead to requests. The 60x payload loads 4-5 times faster.

## Considerations

This only demonstrates simple code, the main focus however is to demonstrate the effect of HTTP requests on page load time. Concatenation clearly wins.

## Installation

```bash
npm install
grunt build:60
```

The build task will create the files based on ``template.js``, update the async page scripts and concatenate the files for the concat page. 

Content is served at [http://localhost:8000](http://localhost:8000)
