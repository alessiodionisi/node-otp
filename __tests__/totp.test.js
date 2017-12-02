const otp = require('../lib')

test('totp', function () {
  expect(
    otp.totp({
      secret: '12345678901234567890',
      timestamp: 59000,
      codeDigits: 8
    })
  ).toBe('94287082')
})
