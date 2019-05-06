# Node OTP

[![Travis](https://img.shields.io/travis/adnsio/node-otp/master.svg?style=flat-square)](https://travis-ci.org/adnsio/node-otp)
[![NPMV](https://img.shields.io/npm/v/node-otp.svg?style=flat-square)](https://npmjs.org/package/node-otp)

Node.js One-Time Password library

## Features

- Zero Dependency
- TypeScript Definitions
- RFC4226 (HMAC One-Time Password)
- RFC6238 (Time-Based One-Time Password)

---

## Installation

```bash
yarn add node-otp
```

or

```bash
npm install --save node-otp
```

## Examples

```javascript
const { hotp } = require('node-otp')

hotp({
  secret: '12345678901234567890',
})
```

```javascript
const { totp } = require('node-otp')

totp({
  secret: '12345678901234567890',
})
```

## APIs

### `hotp: (parameters: Parameters) => string`

### `Parameters`

#### `secret: string | Buffer`

#### `movingFactor?: number`

Default value of `movingFactor` is 0

#### `codeDigits?: number`

Default value of `codeDigits` is 6

#### `addChecksum?: boolean`

Default value of `addChecksum` is false

#### `truncationOffset?: number`

Default value of `truncationOffset` is -1

#### `hmacAlgorithm?: 'sha1' | 'sha256' | 'sha512'`

Default value of `hmacAlgorithm` is sha1

---

### `totp: (parameters: Parameters) => string`

### `Parameters`

#### `secret: string | Buffer`

#### `step?: number`

Default value of `step` is 30

#### `time?: number`

Default value of `time` is 6

#### `initialTime?: number`

Default value of `initialTime` is 0

#### `codeDigits?: number`

Default value of `codeDigits` is 6

#### `hmacAlgorithm?: 'sha1' | 'sha256' | 'sha512'`

Default value of `hmacAlgorithm` is sha256
