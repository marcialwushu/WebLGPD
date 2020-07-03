import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapituloViPage } from './capitulo-vi.page';

const routes: Routes = [
  {
    path: '',
    component: CapituloViPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapituloViPageRoutingModule {}
