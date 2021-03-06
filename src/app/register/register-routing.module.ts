import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrerPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrerPageRoutingModule {}
