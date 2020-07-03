import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapituloVPageRoutingModule } from './capitulo-v-routing.module';

import { CapituloVPage } from './capitulo-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapituloVPageRoutingModule
  ],
  declarations: [CapituloVPage]
})
export class CapituloVPageModule {}
