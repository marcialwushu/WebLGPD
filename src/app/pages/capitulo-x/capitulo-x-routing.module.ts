import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapituloXPage } from './capitulo-x.page';

const routes: Routes = [
  {
    path: '',
    component: CapituloXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapituloXPageRoutingModule {}
