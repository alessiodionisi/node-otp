// https://tools.ietf.org/html/rfc6238

import hotp from './hotp'

export interface Parameters {
  secret: string,
  time?: number,
  timestamp?: number,
  codeDigits?: number,
  addChecksum?: boolean,
  truncationOffset?: number
}

export default function (parameters: Parameters): string {
  let {
    secret,
    time,
    timestamp,
    codeDigits,
    addChecksum,
    truncationOffset
  } = parameters

  if (!secret) throw new Error('no secret value')
  if (!time) time = 30
  if (!timestamp) timestamp = new Date().getTime()

  const movingFactor = Math.floor(timestamp / 1000 / time)

  return hotp({
    secret,
    movingFactor,
    codeDigits,
    addChecksum,
    truncationOffset
  })
}
