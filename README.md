# Yet another deferred implementation

[![Build Status](https://travis-ci.org/kostasmanionis/yaDeferred.svg?branch=master)](https://travis-ci.org/kostasmanionis/yaDeferred)

You can never have enough of these, right?

Small, zero dependency deferred utility based on ES2015 promises.

*Does not include the promise polyfill, so you have to take care of it yourself folks.*

[es6-promise](https://github.com/stefanpenner/es6-promise)

## Installation

`npm install --save yaDeferred`

## Usage

```
const yaDeferred = require('yaDeferred');

yaDeferred()
    .resolve(true)
    .then(result => console.log(result));
```
## API

### resolve

`yaDeferred.resolve()`

resolves the promise with a given value and returns the promise

### reject

`yaDeferred.reject()`

rejects the promise with a given value and returns the promise

### resolve

`yaDeferred.then()`

`then` is a direct call to the original promise then method

### catch

`yaDeferred.catch()`

`then` is a direct call to the original promise catch method
