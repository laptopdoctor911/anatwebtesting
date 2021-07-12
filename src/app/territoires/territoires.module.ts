import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerritoiresRoutingModule } from './territoires-routing.module';
import { TerritoiresComponent } from './territoires.component';
import { Territoires404Component } from './territoires404/territoires404.component';
import { RessourcesComponent } from './ressources/ressources.component';


@NgModule({
  declarations: [
    TerritoiresComponent, 
    Territoires404Component, 
    RessourcesComponent
  ],
  imports: [
    CommonModule,
    TerritoiresRoutingModule
  ]
})
export class TerritoiresModule { }
