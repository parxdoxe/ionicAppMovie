import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopulairePage } from './populaire.page';

const routes: Routes = [
  {
    path: '',
    component: PopulairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopulairePageRoutingModule {}
