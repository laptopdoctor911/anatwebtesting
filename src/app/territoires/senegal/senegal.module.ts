import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SenegalRoutingModule } from './senegal-routing.module';
import { SenegalComponent } from './senegal.component';
import { LesenegalComponent } from './lesenegal/lesenegal.component';
import { DepartementsComponent } from './departements/departements.component';
import { RegionsComponent } from './regions/regions.component';
import { CommunesComponent } from './communes/communes.component';
import { Senegal404Component } from './senegal404/senegal404.component';


@NgModule({
  declarations: [
    SenegalComponent, 
    LesenegalComponent, 
    DepartementsComponent, 
    RegionsComponent, 
    CommunesComponent, 
    Senegal404Component],
  imports: [
    CommonModule,
    SenegalRoutingModule
  ]
})
export class SenegalModule { }
