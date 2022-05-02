import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { CurrencyService } from 'src/app/services/currency.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: User | any
  btcRate: any
  userBtc: number | string
  subscription: Subscription

  constructor(private userService: UserService, private currencyService: CurrencyService) { }

  async ngOnInit() {
    this.userService.getUser()
    this.subscription = this.userService.user$.subscribe(user => {
      this.user = user
    })
    this.btcRate = await this.currencyService.getRate().toPromise()
    this.userBtc = (this.btcRate * this.user.coins).toFixed(4)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
