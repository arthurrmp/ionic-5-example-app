import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhePage } from './detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhePageRoutingModule {}
