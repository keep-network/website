import BigNumber from "bignumber.js"

export class Token {
  /**
   * Convert wei amount to token units
   * @param {*} amount amount in wei
   * @param {*} decimals decimals
   *
   * @return {BigNumber} amount in token units
   */
  static toTokenUnit(amount, decimals = 18) {
    if (!amount) {
      return new BigNumber(0)
    }

    return new BigNumber(amount).div(new BigNumber(10).pow(decimals))
  }

  /**
   * Convert token unit amount to wei.
   * @param {*} amount amount in token units
   * @param {*} decimals decimals
   *
   * @return {BigNumber} amount in wei
   */
  static fromTokenUnit(amount, decimals = 18) {
    amount = new BigNumber(amount)
    return amount.times(new BigNumber(10).pow(decimals))
  }
}
