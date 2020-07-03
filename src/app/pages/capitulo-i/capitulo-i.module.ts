import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapituloIPageRoutingModule } from './capitulo-i-routing.module';

import { CapituloIPage } from './capitulo-i.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapituloIPageRoutingModule
  ],
  declarations: [CapituloIPage]
})
export class CapituloIPageModule {}
