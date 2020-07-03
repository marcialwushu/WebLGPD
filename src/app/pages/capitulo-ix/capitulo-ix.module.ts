import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapituloIxPageRoutingModule } from './capitulo-ix-routing.module';

import { CapituloIxPage } from './capitulo-ix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapituloIxPageRoutingModule
  ],
  declarations: [CapituloIxPage]
})
export class CapituloIxPageModule {}
