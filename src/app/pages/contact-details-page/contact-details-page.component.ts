import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { UserMove } from 'src/app/models/user-move.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  @Input() contactId: string


  contact: Contact;
  subscription: Subscription
  user: User
  userMovesToContact: UserMove[] = []


  async ngOnInit() {
    // this.contact = await this.contactService.getContactById(this.contactId).toPromise()
    this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
    this.userService.getUser()
    this.subscription = this.userService.user$.subscribe(user => {
      this.user = user
    })
    this.filterMovesToContact()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  filterMovesToContact() {
    if (!this.user.moves.length) return
    const moves = [...this.user.moves]
    for (let i = 0; i < moves.length; i++) {
      const move: UserMove = moves[i] as UserMove;
      if (move.toId === this.contact._id) this.userMovesToContact.push(move)
    }
  }
}
