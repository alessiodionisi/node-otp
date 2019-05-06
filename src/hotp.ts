// https://tools.ietf.org/html/rfc4226

import * as crypto from 'crypto'

export interface Parameters {
  secret: string | Buffer
  movingFactor?: number
  codeDigits?: number
  addChecksum?: boolean
  truncationOffset?: number
  hmacAlgorithm?: 'sha1' | 'sha256' | 'sha512'
}

const doubleDigits = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
const digitsPower = [
  1,
  10,
  100,
  1000,
  10000,
  100000,
  1000000,
  10000000,
  100000000,
]

function calcChecksum(num: number, digits: number) {
  let doubleDigit = true
  let total = 0

  while (0 < digits--) {
    let digit = num % 10
    num /= 10
    if (doubleDigit) digit = doubleDigits[digit]
    total += digit
    doubleDigit = !doubleDigit
  }

  let result = total % 10
  if (result > 0) result = 10 - result
  return result
}

export default function(parameters: Parameters) {
  let {
    secret,
    movingFactor,
    codeDigits,
    addChecksum,
    truncationOffset,
    hmacAlgorithm,
  } = parameters

  if (!secret) throw new Error('no secret value')
  if (!movingFactor) movingFactor = 0
  if (!codeDigits) codeDigits = 6
  if (!addChecksum) addChecksum = false
  if (!truncationOffset) truncationOffset = -1
  if (!hmacAlgorithm) hmacAlgorithm = 'sha1'

  let secretLength: number
  if (hmacAlgorithm === 'sha1') secretLength = 20
  else if (hmacAlgorithm === 'sha256') secretLength = 32
  else if (hmacAlgorithm === 'sha512') secretLength = 64
  else throw new Error('algorithm not supported')

  const digits = addChecksum ? codeDigits + 1 : codeDigits

  const text = Buffer.alloc(8)
  for (let i = text.length - 1; i >= 0; i--) {
    text[i] = movingFactor & 0xff
    movingFactor >>= 8
  }

  const hash = crypto
    .createHmac(hmacAlgorithm.toLowerCase(), Buffer.alloc(secretLength, secret))
    .update(text)
    .digest()

  let offset = hash[hash.length - 1] & 0xf
  if (0 <= truncationOffset && truncationOffset < hash.length - 4)
    offset = truncationOffset

  const binary =
    ((hash[offset] & 0x7f) << 24) |
    ((hash[offset + 1] & 0xff) << 16) |
    ((hash[offset + 2] & 0xff) << 8) |
    (hash[offset + 3] & 0xff)

  let otp = binary % digitsPower[codeDigits]
  if (addChecksum) otp = otp * 10 + calcChecksum(otp, codeDigits)
  let result = otp.toString()
  while (result.length < digits) result = '0' + result
  return result
}
