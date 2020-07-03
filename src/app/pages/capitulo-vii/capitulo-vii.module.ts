import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapituloViiPageRoutingModule } from './capitulo-vii-routing.module';

import { CapituloViiPage } from './capitulo-vii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapituloViiPageRoutingModule
  ],
  declarations: [CapituloViiPage]
})
export class CapituloViiPageModule {}
