import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArLaucherPageRoutingModule } from './ar-laucher-routing.module';

import { ArLaucherPage } from './ar-laucher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArLaucherPageRoutingModule
  ],
  declarations: [ArLaucherPage ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArLaucherPageModule {}
