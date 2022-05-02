import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  public getRate() {
    return this.http.get('https://blockchain.info/tobtc?currency=USD&value=1')
      .pipe(
        map(res => res)
      )
  }


  public getTransactions(timeSpan: number) {
    return this.http.get(`https://api.blockchain.info/charts/trade-volume?timespan=${timeSpan}weeks&format=json&cors=true`)
      .pipe(
        map(res => res)
      )
  }

}
