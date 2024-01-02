import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArLaucherPage } from './ar-laucher.page';

const routes: Routes = [
  {
    path: '',
    component: ArLaucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArLaucherPageRoutingModule {}
