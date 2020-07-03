import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapituloIxPage } from './capitulo-ix.page';

const routes: Routes = [
  {
    path: '',
    component: CapituloIxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapituloIxPageRoutingModule {}
