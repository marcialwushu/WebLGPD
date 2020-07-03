import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapituloIiPage } from './capitulo-ii.page';

const routes: Routes = [
  {
    path: '',
    component: CapituloIiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapituloIiPageRoutingModule {}
