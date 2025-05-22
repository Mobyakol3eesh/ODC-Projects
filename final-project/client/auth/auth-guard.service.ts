import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable , map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService ,private router : Router) {}
   canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.checkAuth().pipe(
      map((isAuth) => {
        const path = route.routeConfig?.path;

        if (path === 'login' || path === 'register') {
            setTimeout(() => console.log("user is login"), 0);
          if (isAuth) {
            
            this.router.navigate(['/home']);
            return false;
          }
          else 
          return true;
        }

        if (path === 'home') {
            
          if (isAuth) {
            return true;

          } 
          else {
            this.router.navigate(['/login']);
            setTimeout(() => console.log("user is home"), 0);
            return false;
          }
        }

       
        return false;
      })
    );
  }
}

