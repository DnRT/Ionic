import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: Storage
  ){}

  async canActivate(){
    this.storage.create();
    const aux= await this.storage.get("isUserLoggedIn");
    if(aux){
      return true;
    }
    else{
      this.router.navigateByUrl('/login');
    }
    return false;
  }
  
}
