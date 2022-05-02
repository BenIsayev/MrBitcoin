import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import format from 'date-fns/format';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {

  constructor(private currencyService: CurrencyService) { }

  transactions: any
  transactionsData: any

  async ngOnInit() {
    this.transactions = await this.currencyService.getTransactions(1).toPromise()
    this.transactionsData = {
      labels: [],
      datasets: [
        { data: [], label: 'Amount', backgroundColor: '#01ffff' },
      ]
    }
    this.transactions.values.forEach(value => {
      this.transactionsData.labels.push(format(new Date(+(value.x + '000')), 'PPP'))

      this.transactionsData.datasets[0].data.push(value.y.toFixed(3))
    })
  }
}
