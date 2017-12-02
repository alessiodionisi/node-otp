const otp = require('../lib')

test('hotp', function () {
  expect(
    otp.hotp({
      secret: '12345678901234567890'
    })
  ).toBe('755224')

  expect(
    otp.hotp({
      secret: '12345678901234567890',
      movingFactor: 1
    })
  ).toBe('287082')
})
