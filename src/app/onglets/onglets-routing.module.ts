import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngletsPage } from './onglets.page';

const routes: Routes = [
  {
    path: '',
    component: OngletsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: 'ar-launcher',
        pathMatch: 'full'
      },
      {
        path: 'a-propos',
        loadChildren: () => import('../propos/propos.module').then( m => m.ProposPageModule)
      },
      {
        path: 'historique',
        loadChildren: () => import('../historique/historique.module').then( m => m.HistoriquePageModule)
      },
      {
        path: 'ar-launcher',
        loadChildren: () => import('../ar-laucher/ar-laucher.module').then( m => m.ArLaucherPageModule)
      },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngletsPageRoutingModule {}
