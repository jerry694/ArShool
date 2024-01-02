import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },

  // {
  //   path: 'propos',
  //   loadChildren: () => import('./propos/propos.module').then( m => m.ProposPageModule)
  // },
  // {
  //   path: 'historique',
  //   loadChildren: () => import('./historique/historique.module').then( m => m.HistoriquePageModule)
  // },
  {
    path: 'onglets',
    loadChildren: () => import('./onglets/onglets.module').then( m => m.OngletsPageModule)
  }, 
  {
    path: '',
    redirectTo: 'onglets',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'onglets',
    pathMatch: 'full'
  }, 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
