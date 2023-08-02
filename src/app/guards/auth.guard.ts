import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import Constant from '../config/Constant';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let isLoggedIn = this.auth.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    if (parseInt(this.auth.getRole()) != Constant.ROLE.User) {
      this.router.navigate(['admin/dashboard']);
      return false;
    }
    return isLoggedIn;
  }
}
