import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhePageRoutingModule } from './detalhe-routing.module';

import { DetalhePage } from './detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhePageRoutingModule
  ],
  declarations: [DetalhePage]
})
export class DetalhePageModule {}
