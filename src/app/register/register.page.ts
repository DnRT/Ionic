import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registrer',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegistrerPage implements OnInit {

  errorMessage = '';
  registerFrom: FormGroup;
  validationMessage = 
    {
      nombre:[
        {type:"required", message:"Nombre requerido"}
      ],
      apellido:[
        {type:"required", message:"Apellido requerido"}
      ],
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
    private navCtrl: NavController,
    private storage: Storage,
    private auth: AuthService
  ) {
    this.registerFrom=this.formBuilder.group({
      nombre: new FormControl('',Validators.compose([
        Validators.required
      ])),
      apellido: new FormControl('',Validators.compose([
        Validators.required
      ])),
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
  registerUser(form){
    console.log(form);
    this.auth.register(form).then(()=>{
      this.returnLogin();
    });
  }

  returnLogin(){
    this.navCtrl.navigateBack('/login');
  }
}
