import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService) { }

  @Input() contact: Contact
  @Input() user: User
  subscription: Subscription
  amount: number
  msg: { msg: string, type: string }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  onTransferFunds() {
    this.amount = +this.amount
    if (isNaN(this.amount)) {
      this.msg = {
        msg: 'Use only numbers',
        type: 'error'
      }
      this.amount = 0
    } else if (this.amount <= 0) {
      this.msg = {
        msg: 'Must be more than 0 coins',
        type: 'error'
      }
      this.amount = 0
    } else {
      const msg = this.userService.transferFunds(this.contact._id, this.amount)
      this.msg = msg
    }
    setTimeout(() => {
      this.msg = {
        msg: '',
        type: ''
      }
    }, 1500);
  }

}
