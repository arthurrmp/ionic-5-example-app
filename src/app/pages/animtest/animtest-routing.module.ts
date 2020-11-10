import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimtestPage } from './animtest.page';

const routes: Routes = [
  {
    path: '',
    component: AnimtestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimtestPageRoutingModule {}
