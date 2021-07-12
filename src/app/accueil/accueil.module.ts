import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';

//import { Accueil404Component } from '../accueil404/accueil404.component';
import { AccueilComponent } from './accueil.component';
import { ActuDetailsComponent } from './actu-details/actu-details.component';
import { ActuListComponent } from './actu-list/actu-list.component';
import { AddActuComponent } from './add-actu/add-actu.component';
import { AppComponent } from '../app.component';
import { PipetestPipe } from './pipetest.pipe';
import { WordcountPipe } from './wordcount.pipe';
import { SafePipe } from './safe.pipe';
import { SafeurlPipe } from './safeurl.pipe';


@NgModule({
  declarations: [
    //Accueil404Component,
    //AppComponent,
    AccueilComponent,
    ActuDetailsComponent,
    ActuListComponent,
    AddActuComponent,
    PipetestPipe,
    WordcountPipe,
    SafePipe,
    SafeurlPipe
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule
  ],
  exports: [
    PipetestPipe,
    WordcountPipe,
    SafePipe,
    SafeurlPipe
  ]
})
export class AccueilModule { }
