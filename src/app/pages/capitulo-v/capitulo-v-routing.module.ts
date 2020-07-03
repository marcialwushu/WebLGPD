import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapituloVPage } from './capitulo-v.page';

const routes: Routes = [
  {
    path: '',
    component: CapituloVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapituloVPageRoutingModule {}
