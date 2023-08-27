import { Component } from '@angular/core';
import { CoinService } from '../../services/coin.service'
import { Coin } from 'src/app/models/coin';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  public coin: string
  public value: string
  public convertedCoin: string
  public finalValue: number
  public coinUSD: number
  public finalCoin: number
  public coinsValue: Coin[]
  
  constructor(
    public _coinService: CoinService
  ) {
    this.coinsValue = this._coinService.coins
  }

  onSubmit(){
    for (const coin of this.coinsValue) {
      if (coin.name == this.coin) {
        this.coinUSD = coin.value * parseInt(this.value)
      }
      if (coin.name == this.convertedCoin) {
        this.finalCoin = coin.value
      }

      this.finalValue = (this.coinUSD / this.finalCoin)

    }
  }
}
