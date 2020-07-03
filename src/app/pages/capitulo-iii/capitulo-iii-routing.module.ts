import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapituloIiiPage } from './capitulo-iii.page';

const routes: Routes = [
  {
    path: '',
    component: CapituloIiiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapituloIiiPageRoutingModule {}
