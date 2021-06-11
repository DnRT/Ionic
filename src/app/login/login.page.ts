import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  errorMessage = '';
  loginFrom: FormGroup;
  validationMessage = 
    {
      email: [
        {type:"required",message:"Email requerido"},
        {type:"pattern",message:"Debe ingresar un email valido"}
      ],
      password: [
        {type:"required",message:"Contraseña requerida"},
        {type:"minlength",message:"La contraseña debe tener minimo 5 caracteres"}
      ]
    };
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.loginFrom=this.formBuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      pass: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }

  ngOnInit() {
  }

  async loginUser(form){
    await this.storage.create();
    this.authService.logIn(form).then(res=>{
      if(res==='LOG IN SUCCESSFUL'){
        this.storage.set("isUserLoggedIn", true);
        this.navCtrl.navigateForward("/home");
      }
    }).catch(err=>{
      this.errorMessage=err;
    });
  }

}
