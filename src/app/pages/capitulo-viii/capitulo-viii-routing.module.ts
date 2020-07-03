import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapituloViiiPage } from './capitulo-viii.page';

const routes: Routes = [
  {
    path: '',
    component: CapituloViiiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapituloViiiPageRoutingModule {}
