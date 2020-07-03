import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapituloXPageRoutingModule } from './capitulo-x-routing.module';

import { CapituloXPage } from './capitulo-x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapituloXPageRoutingModule
  ],
  declarations: [CapituloXPage]
})
export class CapituloXPageModule {}
