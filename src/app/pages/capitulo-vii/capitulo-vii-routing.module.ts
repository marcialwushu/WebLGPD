import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapituloViiPage } from './capitulo-vii.page';

const routes: Routes = [
  {
    path: '',
    component: CapituloViiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapituloViiPageRoutingModule {}
