import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapituloIiiPageRoutingModule } from './capitulo-iii-routing.module';

import { CapituloIiiPage } from './capitulo-iii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapituloIiiPageRoutingModule
  ],
  declarations: [CapituloIiiPage]
})
export class CapituloIiiPageModule {}
