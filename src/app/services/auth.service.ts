import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storage: Storage
  ) { }
  async logIn(cred){
    const data = await this.storage.get('new user');
    return new Promise((accept,reject)=>{
      if(cred.email===data.email && btoa(cred.pass)==data.password){
        accept("LOG IN SUCCESSFUL");
      } else {
        reject("LOG IN FAILED");
      }
    })
  }
  async register(cred){
    await this.storage.create();
    cred.password= btoa(cred.pass);
    return this.storage.set('new user', cred);
  }
}
