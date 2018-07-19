import { Observable } from 'rxjs/internal/Observable';
import { UserService } from './user.service';
import { AuthService } from 'src/app/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService) { }
  canActivate() : Observable<boolean>{
   return this.authService.user$.
    switchMap(user => this.userService.get(user.uid))
    .map(appuser => appuser.isAdmin);
  }
}
