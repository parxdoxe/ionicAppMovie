import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuellementPage } from './actuellement.page';

const routes: Routes = [
  {
    path: '',
    component: ActuellementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuellementPageRoutingModule {}
