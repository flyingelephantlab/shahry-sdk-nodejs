const {merge} = require('lodash/fp');
const {sortByKeys, makeQueryString, prefixKeys, hash} = require('./lib/util');

function getPaymentLink(amount, merchantTxnRef, returnUrl)  {
  const secret = process.env.SH_SECRET;
  const gatewayUri = process.env.SH_PAYMENT_GATEWAY;
  const initParams = {
    command: 'pay',
    locale:  'en',
    version: 1
  };
  const merchConfigParams = {
    accessCode: process.env.SH_ACCESS_CODE,
    merchantId: process.env.SH_MERCHANT,
  };
  const orderParams = {
    amount: amount * 100,
    merchantTxnRef,
    returnUrl
  };
  
  const params = prefixKeys( sortByKeys(
    merge(initParams, merge(merchConfigParams, orderParams))
  ));
  
  const secureHash =  hash(makeQueryString(params), secret);
  params.sh_return_url = encodeURIComponent(params.sh_return_url);
  
  return [
    gatewayUri, 
    makeQueryString(sortByKeys(merge(params, {'sh_secure_hash': secureHash})))
  ].join('?');
}

module.exports = getPaymentLink;