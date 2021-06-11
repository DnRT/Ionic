import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  logIn(cred){
    return new Promise((accept,reject)=>{
      if(cred.email==="test@test.com" && cred.pass==="12345"){
        accept("LOG IN SUCCESSFUL");
      } else {
        reject("LOG IN FAILED");
      }
    })
  }
}
