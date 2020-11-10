import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimtestPageRoutingModule } from './animtest-routing.module';

import { AnimtestPage } from './animtest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimtestPageRoutingModule
  ],
  declarations: [AnimtestPage]
})
export class AnimtestPageModule {}
