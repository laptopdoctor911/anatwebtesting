import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationRoutingModule } from './presentation-routing.module';
import { DgComponent } from './dg/dg.component';
import { MissionsComponent } from './missions/missions.component';
import { OrganigrammeComponent } from './organigramme/organigramme.component';
import { QuiComponent } from './qui/qui.component';
import { Presentation404Component } from './presentation404/presentation404.component';
import { PresentationComponent } from './presentation.component';


@NgModule({
  declarations: [ 
    PresentationComponent,
    DgComponent, 
    MissionsComponent,
    OrganigrammeComponent,
    QuiComponent,
    Presentation404Component
  ],
  imports: [
    CommonModule,
    PresentationRoutingModule
  ]
})
export class PresentationModule { }
