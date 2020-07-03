import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapituloIPage } from './capitulo-i.page';

const routes: Routes = [
  {
    path: '',
    component: CapituloIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapituloIPageRoutingModule {}
