# Crypto Utils

## Install

```
npm install crypto-utils-box
```

## Usage
```
const { hex } = require('crypto-utils-box');
console.log(hex('message'));

const { md5 } = require('crypto-utils-box');
console.log(md5('message'));

const { morse } = require('crypto-utils-box');
// encode
console.log(morse.en('message'));
// decode
console.log(morse.de('message'));

const { caesar } = require('crypto-utils-box');
// encode
console.log(aes.en('message', shift));
// decode
console.log(aes.de('message', shift));

const { aes } = require('crypto-utils-box');
// encode
console.log(aes.en('message', 'key'));
// decode
console.log(aes.de('message', 'key'));

```

## API
```
hex,
morse,
base64,
caesar,
railfence,
vigenere,
md5,
sha1,
sha256,
sha512,
rc4,
aes,
des
```