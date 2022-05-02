import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  contact: Contact;

  ngOnInit(): void {
    this.route.data.subscribe(async ({ contact }) => {
      this.contact = contact._id ? { ...contact } : this.contactService.getEmptyContact()
    })
  }

  closeEdit() {
    this.router.navigateByUrl('contact')
  }

  onSaveContact() {
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('contact')
  }

}
