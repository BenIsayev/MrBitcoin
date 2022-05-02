import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { UserMove } from 'src/app/models/user-move.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-moves',
  templateUrl: './user-moves.component.html',
  styleUrls: ['./user-moves.component.scss']
})
export class UserMovesComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService) { }

  @Input() contact: Contact
  user: User
  moves: ['']

  subscription: Subscription

  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe((user) => {
      this.user = user
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
