import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { UserMove } from 'src/app/models/user-move.model';

@Component({
  selector: 'user-move',
  templateUrl: './user-move.component.html',
  styleUrls: ['./user-move.component.scss']
})
export class UserMoveComponent implements OnInit {

  constructor() { }

  @Input() move: UserMove | any
  @Input() contact: Contact

  ngOnInit(): void {
  }

}
