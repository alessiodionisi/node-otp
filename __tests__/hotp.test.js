const otp = require('../lib')

test('hotp 0', function () {
  expect(
    otp.hotp({
      secret: '12345678901234567890'
    })
  ).toBe('755224')
})

test('hotp 1', function () {
  expect(
    otp.hotp({
      secret: '12345678901234567890',
      movingFactor: 1
    })
  ).toBe('287082')
})

test('hotp 2', function () {
  expect(
    otp.hotp({
      secret: '12345678901234567890',
      movingFactor: 2
    })
  ).toBe('359152')
})

test('hotp 3', function () {
  expect(
    otp.hotp({
      secret: '12345678901234567890',
      movingFactor: 3
    })
  ).toBe('969429')
})

test('hotp 4', function () {
  expect(
    otp.hotp({
      secret: '12345678901234567890',
      movingFactor: 4
    })
  ).toBe('338314')
})

test('hotp 5', function () {
  expect(
    otp.hotp({
      secret: '12345678901234567890',
      movingFactor: 5
    })
  ).toBe('254676')
})

test('hotp 6', function () {
  expect(
    otp.hotp({
      secret: '12345678901234567890',
      movingFactor: 6
    })
  ).toBe('287922')
})

test('hotp 7', function () {
  expect(
    otp.hotp({
      secret: '12345678901234567890',
      movingFactor: 7
    })
  ).toBe('162583')
})

test('hotp 8', function () {
  expect(
    otp.hotp({
      secret: '12345678901234567890',
      movingFactor: 8
    })
  ).toBe('399871')
})

test('hotp 9', function () {
  expect(
    otp.hotp({
      secret: '12345678901234567890',
      movingFactor: 9
    })
  ).toBe('520489')
})