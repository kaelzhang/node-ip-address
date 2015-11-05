[![Build Status](https://travis-ci.org/kaelzhang/node-ip-address.svg?branch=master)](https://travis-ci.org/kaelzhang/node-ip-address)
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/ip-address.svg)](http://badge.fury.io/js/ip-address)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/ip-address.svg)](https://www.npmjs.org/package/ip-address)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/node-ip-address.svg)](https://david-dm.org/kaelzhang/node-ip-address)
-->

# ip-address

Returns the external ip address of the local machine

## Install

```sh
$ npm install ip-address --save
```

## Usage

```js
var address = require('ip-address');
address();        // 10.0.0.1
address('ipv6');  // feff::feff::feff::feff
```

## License

MIT
