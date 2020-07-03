import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapituloIvPageRoutingModule } from './capitulo-iv-routing.module';

import { CapituloIvPage } from './capitulo-iv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapituloIvPageRoutingModule
  ],
  declarations: [CapituloIvPage]
})
export class CapituloIvPageModule {}
