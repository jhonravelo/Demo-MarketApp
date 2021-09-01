import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerifyRoutingService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const path = route.routeConfig?.path;
    const logueo: any = window.localStorage.getItem('logueo');

    if (path == 'login') {

      if (logueo) {
        this.router.navigate(['products']);
        return false;
      } else {
        return true;
      }

    } else {
      if (logueo) {
        return true;
      } else {
        window.localStorage.removeItem('logueo');
        this.router.navigate(['login']);
        return false;
      }
    }
  }


}
