import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutilsRoutingModule } from './outils-routing.module';
import { AmenagementComponent } from './amenagement/amenagement.component';
import { DeveloppementComponent } from './developpement/developpement.component';
import { CartographieComponent } from './cartographie/cartographie.component';
import { GeodesieComponent } from './geodesie/geodesie.component';
import { AppcartoComponent } from './appcarto/appcarto.component';
import { OcniComponent } from './ocni/ocni.component';
import { Outils404Component } from './outils404/outils404.component';
import { OutilsComponent } from './outils.component';


@NgModule({
  declarations: [
    OutilsComponent,
    AmenagementComponent,
    DeveloppementComponent,
    CartographieComponent,
    GeodesieComponent,
    AppcartoComponent,
    OcniComponent,
    Outils404Component
  ],
  imports: [
    CommonModule,
    OutilsRoutingModule
  ]
})
export class OutilsModule { }
