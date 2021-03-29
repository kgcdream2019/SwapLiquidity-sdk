import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GORLI = 5,
  KOVAN = 42,
  BSC_MAINNET = 56,
  BSC_TESTNET = 97,
  HECO_MAINNET = 128,
  HECO_TESTNET = 256,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GORLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.BSC_MAINNET]:'0x553990F2CBA90272390f62C5BDb1681fFc899675',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.HECO_MAINNET]:'0x491C5fF6F4712fafa33F124dc355858af75B2EFD',
  [ChainId.HECO_TESTNET]: '',
}

export const INIT_CODE_HASH = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GORLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.BSC_MAINNET]:'0xb1e98e21a5335633815a8cfb3b580071c2e4561c50afd57a8746def9ed890b18',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.HECO_MAINNET]:'0x3d05450af2c2ae253bd3f0abf57d5ddb60d5304f79f5a5840e620907ad000e55',
  [ChainId.HECO_TESTNET]: '',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
