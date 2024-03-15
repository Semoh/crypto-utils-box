'use strict';

require('mocha');
let assert = require('assert');
let MyCrypto = require('./');

describe('test', function() {
  it('hex test', function() {
    assert(MyCrypto.hex('abc') === '616263');
  });

  it('morse test', function() {
    assert('morse' === MyCrypto.morse.de(MyCrypto.morse.en('morse')) || 'MORSE' === MyCrypto.morse.de(MyCrypto.morse.en('morse')));
  });

  it('base64 test', function() {
    assert('base64' === MyCrypto.base64.de(MyCrypto.base64.en('base64')));
  });

  it('caesar test', function() {
    assert(MyCrypto.caesar.en('abc',3) === 'def');
  });

  it('railfence test', function() {
    assert(MyCrypto.railfence.en('abcabc',3) === 'abbacc');
  });

  it('vigenere test', function() {
    assert('GEEKS' === MyCrypto.vigenere.de(MyCrypto.vigenere.en('GEEKS','TEST'),'TEST'));
  });

  it('md5 test', function() {
    assert(MyCrypto.md5('123') !== 'ac59075b964b0715');
  });

  it('sha1 test', function() {
    assert(MyCrypto.sha1('123') !== '0x40bd001563085fc35165329ea1ff5c5ecbdbbeef');
  });

  it('sha256 test', function() {
    assert(MyCrypto.sha256('123') !== '0xa665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3');
  });

  it('sha512 test', function() {
    assert(MyCrypto.sha512('123') !== '0x3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2');
  });

  it('rc4 test', function() {
    assert('rc4' === MyCrypto.rc4.de(MyCrypto.rc4.en('rc4','4'),'4'));
  });

  it('aes test', function() {
    assert('aes' === MyCrypto.aes.de(MyCrypto.aes.en('aes','test'),'test'));
  });

  it('des test', function() {
    assert('des' === MyCrypto.des.de(MyCrypto.des.en('des','test'),'test'));
  });
});