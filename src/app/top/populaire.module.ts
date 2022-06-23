import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopulairePageRoutingModule } from './populaire-routing.module';

import { PopulairePage } from './populaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopulairePageRoutingModule
  ],
  declarations: [PopulairePage]
})
export class PopulairePageModule {}
