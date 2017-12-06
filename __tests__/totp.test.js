const otp = require('../lib')

test('totp 59s sha1', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 59,
      codeDigits: 8
    })
  ).toBe('94287082')
})

test('totp 59s sha256', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 59,
      codeDigits: 8,
      hmacAlgorithm: 'sha256'
    })
  ).toBe('46119246')
})

test('totp 59s sha512', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 59,
      codeDigits: 8,
      hmacAlgorithm: 'sha512'
    })
  ).toBe('90693936')
})

test('totp 1111111109s sha1', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 1111111109,
      codeDigits: 8,
      hmacAlgorithm: 'sha1'
    })
  ).toBe('07081804')
})

test('totp 1111111109s sha256', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 1111111109,
      codeDigits: 8,
      hmacAlgorithm: 'sha256'
    })
  ).toBe('68084774')
})

test('totp 1111111109s sha512', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 1111111109,
      codeDigits: 8,
      hmacAlgorithm: 'sha512'
    })
  ).toBe('25091201')
})

test('totp 1111111111s sha1', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 1111111111,
      codeDigits: 8,
      hmacAlgorithm: 'sha1'
    })
  ).toBe('14050471')
})

test('totp 1111111111s sha256', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 1111111111,
      codeDigits: 8,
      hmacAlgorithm: 'sha256'
    })
  ).toBe('67062674')
})

test('totp 1111111111s sha512', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 1111111111,
      codeDigits: 8,
      hmacAlgorithm: 'sha512'
    })
  ).toBe('99943326')
})

test('totp 1234567890s sha1', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 1234567890,
      codeDigits: 8,
      hmacAlgorithm: 'sha1'
    })
  ).toBe('89005924')
})

test('totp 1234567890s sha256', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 1234567890,
      codeDigits: 8,
      hmacAlgorithm: 'sha256'
    })
  ).toBe('91819424')
})

test('totp 1234567890s sha512', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 1234567890,
      codeDigits: 8,
      hmacAlgorithm: 'sha512'
    })
  ).toBe('93441116')
})

test('totp 2000000000s sha1', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 2000000000,
      codeDigits: 8,
      hmacAlgorithm: 'sha1'
    })
  ).toBe('69279037')
})

test('totp 2000000000s sha256', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 2000000000,
      codeDigits: 8,
      hmacAlgorithm: 'sha256'
    })
  ).toBe('90698825')
})

test('totp 2000000000s sha512', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 2000000000,
      codeDigits: 8,
      hmacAlgorithm: 'sha512'
    })
  ).toBe('38618901')
})

test('totp 20000000000s sha1', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 20000000000,
      codeDigits: 8,
      hmacAlgorithm: 'sha1'
    })
  ).toBe('65353130')
})

test('totp 20000000000s sha256', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 20000000000,
      codeDigits: 8,
      hmacAlgorithm: 'sha256'
    })
  ).toBe('77737706')
})

test('totp 20000000000s sha512', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      time: 20000000000,
      codeDigits: 8,
      hmacAlgorithm: 'sha512'
    })
  ).toBe('47863826')
})