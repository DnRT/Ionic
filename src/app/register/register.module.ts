import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrerPageRoutingModule } from './register-routing.module';

import { RegistrerPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrerPage]
})
export class RegistrerPageModule {}
