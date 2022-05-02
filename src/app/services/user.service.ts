import { Injectable } from '@angular/core';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private contactService: ContactService) { }

  private _user$ = new BehaviorSubject<any>({})
  public user$ = this._user$.asObservable()

  private _currUserMoves$ = new BehaviorSubject<any>({})
  public currUserMoves$ = this._currUserMoves$.asObservable()


  // getUser(): Observable<User> {
  public getUser() {
    const user = JSON.parse(localStorage.getItem('user'))
    this._user$.next(user)
  }

  public getUserMoves(contact: Contact = null) {
    const user = JSON.parse(localStorage.getItem('user'))
    const moves = contact ? user.moves.filter(move => move.toId === contact._id) : user.moves
    this._currUserMoves$.next(moves)
  }

  public signUp(username: string) {
    const user = {
      name: username,
      coins: 1000000,
      moves: []
    }
    localStorage.setItem('user', JSON.stringify(user))
    return of(user)
  }

  public isLoggedIn() {
    const user = localStorage.getItem('user')
    return user ? Promise.resolve(true) : Promise.resolve(false)
  }

  public transferFunds(toId: string, amount: number) {
    const user = JSON.parse(localStorage.getItem('user'))
    let contact: Contact;
    this.contactService.getContactById(toId).subscribe(contactObs => {
      contact = contactObs
    }).unsubscribe()
    if ((user.coins - amount) < 0) return {
      msg: 'Not enough coins',
      type: 'error'
    }
    else {
      user.coins -= amount
      user.moves.unshift({
        toId,
        to: contact.name,
        at: Date.now(),
        amount
      })
      localStorage.setItem('user', JSON.stringify(user))
      this._user$.next({ ...user })
      this.getUserMoves(contact)
      return {
        msg: 'Funds successfuly transferred',
        type: 'success'
      }
    }

  }
}
