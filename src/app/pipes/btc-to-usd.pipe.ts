import { Pipe, PipeTransform } from '@angular/core';
const USD_BTC = 101715;
@Pipe({
  name: 'btcToUsd'
})
export class BtcToUsdPipe implements PipeTransform {

  transform(amount: number, isBtcToUsd = true): number {
    return isBtcToUsd ? amount * USD_BTC : amount / USD_BTC;
  }
}
