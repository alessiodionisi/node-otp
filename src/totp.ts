// https://tools.ietf.org/html/rfc6238

import hotp from './hotp'

export interface Parameters {
  secret: string | Buffer
  step?: number
  time?: number
  initialTime?: number
  codeDigits?: number
  hmacAlgorithm?: 'sha1' | 'sha256' | 'sha512'
}

export default function(parameters: Parameters) {
  let {
    secret,
    step,
    time,
    initialTime,
    codeDigits,
    hmacAlgorithm
  } = parameters

  if (!secret) throw new Error('no secret value')
  if (!step) step = 30
  if (!time) time = new Date().getTime() / 1000
  if (!initialTime) initialTime = 0
  if (!hmacAlgorithm) hmacAlgorithm = 'sha512'

  const movingFactor = Math.floor((time - initialTime) / step)

  return hotp({
    secret,
    movingFactor,
    codeDigits,
    hmacAlgorithm
  })
}
