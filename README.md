## amaze

[![Build Status](https://github.com/larsthorup/amaze/actions/workflows/ci.yml/badge.svg)](https://github.com/larsthorup/amaze/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/larsthorup/amaze/badge.png?branch=master)](https://coveralls.io/r/larsthorup/amaze?branch=master)
[![Dependency Status](https://david-dm.org/larsthorup/amaze.png)](https://david-dm.org/larsthorup/amaze#info=dependencies)
[![devDependency Status](https://david-dm.org/larsthorup/amaze/dev-status.png)](https://david-dm.org/larsthorup/amaze#info=devDependencies)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)


Maze generation in isomorphic JavaScript

## TODO

- switch from requirejs to ES6 modules
- inline vsvg
- isomorphic ES6 module mocking? (_.random, _.sample, console.log)
- JSDoc typing

## Getting Started

    npm install
    npm test
    npm start
    open src/index.html || start src/index.html

## Sample output

![Maze](./amaze.png)

```
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
|       |           |           |                       |   |
+   +   +   +---+   +---+   +   +   +---+---+---+   +   +   +
|   |   |   |       |       |   |               |   |   |   |
+   +   +   +---+   +   +---+   +---+---+   +---+   +   +   +
| x |   |       |       |   |   |           |       |   |   |
+---+   +   +   +---+---+   +   +---+   +---+   +---+   +   +
|       |   |       |       |       |       |       |   |   |
+   +---+   +---+   +   +   +---+   +---+   +---+   +   +   +
|   |   |   |       |   |       |   |       |       |       |
+   +   +   +   +---+   +   +   +   +---+   +   +---+---+   +
|   |   |   |   |       |   |   |       |   |       |       |
+   +   +   +   +   +---+   +   +---+   +   +---+   +   +---+
|   |       |   |   |       |       |   |       |   |   |   |
+   +   +---+   +   +   +---+---+---+   +---+---+   +   +   +
|   |   |       |   |   |               |           |   |   |
+   +   +   +---+   +   +   +---+---+---+   +---+---+   +   +
|   |   |   |   |   |       |               |       |       |
+   +---+   +   +   +---+---+---+---+---+   +   +   +---+   +
|   |       |   |               |           |   |           |
+   +   +---+   +---+---+---+   +   +---+---+   +---+---+---+
|       |   |           |       |   |                   |   |
+---+---+   +   +   +---+   +---+   +---+   +---+---+   +   +
|               |   |       |           |   |       |       |
+   +---+---+---+   +   +---+---+   +   +---+   +   +---+   +
|               |       |       |   |           |   | x |   |
+---+---+---+   +---+---+   +   +---+---+---+---+   +   +   +
|   |       |       |       |   |               |   |   |   |
+   +   +   +---+   +   +---+   +   +---+---+   +   +   +   +
|       |               |           |               |       |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
```
