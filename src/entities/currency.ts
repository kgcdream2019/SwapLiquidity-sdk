import JSBI from 'jsbi'

import { ChainId, SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly chainId: ChainId
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: { [chainId in ChainId]: Currency } = {
    [ChainId.MAINNET]: new Currency(ChainId.MAINNET, 18, 'ETH', 'ETH'),
    [ChainId.ROPSTEN]: new Currency(ChainId.ROPSTEN, 18, 'ETH', 'ETH'),
    [ChainId.RINKEBY]: new Currency(ChainId.RINKEBY, 18, 'ETH', 'ETH'),
    [ChainId.GORLI]: new Currency(ChainId.GORLI, 18, 'ETH', 'ETH'),
    [ChainId.KOVAN]: new Currency(ChainId.KOVAN, 18, 'ETH', 'ETH'),
    [ChainId.BSC_MAINNET]: new Currency(ChainId.BSC_MAINNET, 18, 'BNB', 'BNB'),
    [ChainId.BSC_TESTNET]: new Currency(ChainId.BSC_TESTNET, 18, 'BNB', 'BNB'),
    [ChainId.HECO_MAINNET]: new Currency(ChainId.HECO_MAINNET, 18, 'HT', 'HT'),
    [ChainId.HECO_TESTNET]: new Currency(ChainId.HECO_TESTNET, 18, 'HT', 'HT'),
  }

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(chainId: ChainId, decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.chainId = chainId
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

const ETHER = Currency.ETHER
export { ETHER }
