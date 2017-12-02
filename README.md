# Node OTP

[![Greenkeeper badge](https://badges.greenkeeper.io/adnsio/node-otp.svg)](https://greenkeeper.io/)

[![Travis](https://img.shields.io/travis/adnsio/node-otp.svg?style=flat-square)](https://travis-ci.org/adnsio/node-otp)
[![NPMV](https://img.shields.io/npm/v/node-otp.svg?style=flat-square)](https://npmjs.org/package/node-otp)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Node.js One-Time Password library

### Features
- Zero Dependency
- TypeScript Definitions
- RFC4226 (HMAC One-Time Password)
- RFC6238 (Time-Based One-Time Password)

### Examples
```javascript
otp.hotp({
  secret: '12345678901234567890'
})
```

```javascript
otp.totp({
  secret: '12345678901234567890',
  timestamp: new Date().getTime()
})
```