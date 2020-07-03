import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapituloIiPageRoutingModule } from './capitulo-ii-routing.module';

import { CapituloIiPage } from './capitulo-ii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapituloIiPageRoutingModule
  ],
  declarations: [CapituloIiPage]
})
export class CapituloIiPageModule {}
