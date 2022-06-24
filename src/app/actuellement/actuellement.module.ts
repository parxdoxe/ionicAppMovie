import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuellementPageRoutingModule } from './actuellement-routing.module';

import { ActuellementPage } from './actuellement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuellementPageRoutingModule
  ],
  declarations: [ActuellementPage]
})
export class ActuellementPageModule {}
