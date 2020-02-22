import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  private isloggedIn: boolean;


  constructor() {
    this.isloggedIn = false;
  }

  canActivate() {
    if (sessionStorage.getItem('TokenId') == null)
      this.isloggedIn = true;
    else
      this.isloggedIn = false;
    return of(this.isloggedIn);
  }
}
