import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapituloIvPage } from './capitulo-iv.page';

const routes: Routes = [
  {
    path: '',
    component: CapituloIvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapituloIvPageRoutingModule {}
