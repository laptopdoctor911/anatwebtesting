import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunesComponent } from './communes/communes.component';
import { DepartementsComponent } from './departements/departements.component';
import { LesenegalComponent } from './lesenegal/lesenegal.component';
import { RegionsComponent } from './regions/regions.component';
import { SenegalComponent } from './senegal.component';
import { Senegal404Component } from './senegal404/senegal404.component';

//const routes: Routes = [];

const routes: Routes = [
  {
    path: '', component: SenegalComponent, children: [     
      { path: 'lesenegal', component: LesenegalComponent }, 
      { path: 'regions', component: RegionsComponent },
      { path: 'departements', component: DepartementsComponent }, 
      { path: 'communes', component: CommunesComponent },
      { path: '', redirectTo: 'lesenegal', pathMatch: 'full' },
      { path: '**', component:  Senegal404Component }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SenegalRoutingModule { }
