import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapituloViiiPageRoutingModule } from './capitulo-viii-routing.module';

import { CapituloViiiPage } from './capitulo-viii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapituloViiiPageRoutingModule
  ],
  declarations: [CapituloViiiPage]
})
export class CapituloViiiPageModule {}
