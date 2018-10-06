const should = require('should');
const {sortByKeys, makeQueryString, prefixKeys, unhexlify, hash} = require('../src/lib/util')

describe("Utility Functions", () => {
    it('`sortByKeys` should return an object with sorted key set', () => {
        const obj = {a:1, k:2, c:5};
        const expected = {a:1, c:5, k:2}
        should(sortByKeys(obj)).eql(expected)
    });

    it('`makeQueryString` should return a valid query string from an object', () => {
        const obj = {"param":"value", "param2":"value2"};
        const expected = "param=value&param2=value2";
        should(makeQueryString(obj)).eql(expected);
    });

    it('`prefixKeys` should return an object with keys prefixed with `sh_`', () => {
        const obj = {amount:2};
        const expected  = {sh_amount:2};
        should(prefixKeys(obj)).eql(expected)
    });

    it('`unhexlify` should return a TypedArray of binary representation of the passed hex string', () => {
        const hexString = "FF0FF0"; // this is a 255 , 15, 240
        const expected = new Uint8Array([255, 15, 240]);
        should(unhexlify(hexString)).eql(expected);
    });

    it('`generateSecureHash` should hash a message with a key and return the hash string', () => {
        const message = "hello";
        const key = "7365637572656b6579"; // hex for securekey
        const expected = "865cbbb4537b02b7c4b66055d9399e9d4769112088c3f279f47e7ba476a5287c".toUpperCase(); // generated from 3rd party online tool
        should(hash(message, key)).eql(expected);
    });
});