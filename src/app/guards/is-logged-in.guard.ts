import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    const isLoggedIn = await this.userService.isLoggedIn()
    if (isLoggedIn) {
      return isLoggedIn
    } else {
      this.router.navigateByUrl('/signup');
      return isLoggedIn;
    }
  }


}
