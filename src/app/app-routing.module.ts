import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'detail-film',
    loadChildren: () => import('./detail-film/detail-film.module').then( m => m.DetailFilmPageModule)
  },
  {
    path: 'actor',
    loadChildren: () => import('./actor/actor.module').then( m => m.ActorPageModule)
  },
  {
    path: 'actuellement',
    loadChildren: () => import('./actuellement/actuellement.module').then( m => m.ActuellementPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
