import { hotp } from '../src'

test('algorithm not supported', function() {
  expect(() => {
    hotp({
      secret: '12345678901234567890',
      // @ts-ignore
      hmacAlgorithm: 'sha522',
    })
  }).toThrow()
})

test('no secret value', function() {
  expect(() => {
    hotp({
      // @ts-ignore
      secret: undefined,
    })
  }).toThrow()
})

test('truncation offset', function() {
  expect(
    hotp({
      secret: '12345678901234567890',
      truncationOffset: 1,
    })
  ).toBe('339280')
})

test('add checksum', function() {
  expect(
    hotp({
      secret: '12345678901234567890',
      addChecksum: true,
    })
  )
})

test('hotp 0', function() {
  expect(
    hotp({
      secret: '12345678901234567890',
    })
  ).toBe('755224')
})

test('hotp 1', function() {
  expect(
    hotp({
      secret: '12345678901234567890',
      movingFactor: 1,
    })
  ).toBe('287082')
})

test('hotp 2', function() {
  expect(
    hotp({
      secret: '12345678901234567890',
      movingFactor: 2,
    })
  ).toBe('359152')
})

test('hotp 3', function() {
  expect(
    hotp({
      secret: '12345678901234567890',
      movingFactor: 3,
    })
  ).toBe('969429')
})

test('hotp 4', function() {
  expect(
    hotp({
      secret: '12345678901234567890',
      movingFactor: 4,
    })
  ).toBe('338314')
})

test('hotp 5', function() {
  expect(
    hotp({
      secret: '12345678901234567890',
      movingFactor: 5,
    })
  ).toBe('254676')
})

test('hotp 6', function() {
  expect(
    hotp({
      secret: '12345678901234567890',
      movingFactor: 6,
    })
  ).toBe('287922')
})

test('hotp 7', function() {
  expect(
    hotp({
      secret: '12345678901234567890',
      movingFactor: 7,
    })
  ).toBe('162583')
})

test('hotp 8', function() {
  expect(
    hotp({
      secret: '12345678901234567890',
      movingFactor: 8,
    })
  ).toBe('399871')
})

test('hotp 9', function() {
  expect(
    hotp({
      secret: '12345678901234567890',
      movingFactor: 9,
    })
  ).toBe('520489')
})
