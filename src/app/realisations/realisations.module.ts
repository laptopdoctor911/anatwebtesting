import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealisationsRoutingModule } from './realisations-routing.module';
import { NosrealisationsComponent } from './nosrealisations/nosrealisations.component';
import { SdtmComponent } from './sdtm/sdtm.component';
import { PnadtComponent } from './pnadt/pnadt.component';
import { Realisations404Component } from './realisations404/realisations404.component';
import { RealisationsComponent } from './realisations.component';


@NgModule({
  declarations: [
    RealisationsComponent,
    NosrealisationsComponent,
    SdtmComponent,
    PnadtComponent,
    Realisations404Component
  ],
  imports: [
    CommonModule,
    RealisationsRoutingModule
  ]
})
export class RealisationsModule { }
