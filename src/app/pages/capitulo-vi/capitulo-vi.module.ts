import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapituloViPageRoutingModule } from './capitulo-vi-routing.module';

import { CapituloViPage } from './capitulo-vi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapituloViPageRoutingModule
  ],
  declarations: [CapituloViPage]
})
export class CapituloViPageModule {}
