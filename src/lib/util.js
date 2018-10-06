const crypto = require('crypto');
const { snakeCase, mapKeys, fromPairs, map } = require('lodash/fp');

const sortByKeys = object => fromPairs( map(key => [key, object[key]], Object.keys(object).sort()) )
const makeQueryString = params => Object.keys(params).map(key => key + '=' + params[key]).join('&');
const prefixKeys = mapKeys( key => snakeCase('sh_'+key) );

function unhexlify(str) { 
  var result = [];
  while (str.length >= 2) { 
    result.push(parseInt(str.substring(0, 2), 16));
    str = str.substring(2, str.length);
  }
  return new Uint8Array(result);
}

const hash = (message, secureKey) =>  crypto
  .createHmac('sha256', unhexlify(secureKey))
  .update(message, 'utf8')
  .digest('hex').toUpperCase();

module.exports = {
    sortByKeys,
    makeQueryString,
    prefixKeys,
    unhexlify,
    hash
}