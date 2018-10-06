# Shahry Payment SDK : NodeJS

this SDK provide single method `getPaymentLink` that generates a URL for processing payment with shahry payment gateway.

## Before starting
Before starting, this library depends on some **Environment Variables** that need to be presented before usage.

all these parameters should be presented by Shahry

- `SH_MERCHANT`: Shahry's merchant ID
- `SH_SECRET`: merchant's Secret key.
- `SH_ACCESS_CODE`: merchant's secret access code.
- `SH_PAYMENT_GATEWAY`: URL for shahry payment gateway.

## Get Started
- include the library `npm i shahry-sdk`
- import the library into your code `const {getPaymentLink} = require('shahry-sdk');`



## API
 > `getPaymentLink (amount, merchantTxnRef, returnUrl)`

- amount: the order amount in EGP.
- merchantTxnRef: unique payment order id identified by merchant.
- returnUrl: the URL to redirect back after success or failure.
