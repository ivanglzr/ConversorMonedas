import { Injectable } from '@angular/core'
import { Coin } from '../models/coin'

@Injectable()
export class CoinService{
  public coins: Coin[]

  constructor() {
    this.coins = [
      new Coin("USD", 1),
      new Coin("EUR", 1.08),
      new Coin("JPY", 0.0068),
      new Coin("GBP", 1.26),
      new Coin("AUD", 0.64),
      new Coin("CAD", 0.73),
      new Coin("CHF", 1.13),
      new Coin("CNH", 0.137336),
      new Coin("HKD", 0.13),
      new Coin("NZD", 0.59),
    ]
  }
}